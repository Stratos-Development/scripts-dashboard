const list = []

export async function GET(req) {
    await fetch('https://api.github.com/repos/Stratos-Development/Simple-Scripts/contents/Docker%20Setups', {
        headers: {
            'Accept': 'application/vnd.github+json',
            'Authorization': process.env.GITHUB_TOKEN,
            'X-GitHub-Api-Version': '2022-11-28'
        }
    }).then((response) => response.json())
        .then(async (data) => {
            await data.map(async (x) => {
                await fetch(`https://api.github.com/repos/Stratos-Development/Simple-Scripts/readme/Docker%20Setups/${String(x.name).replace(" ", "%20")}`, {
                    headers: {
                        'Accept': 'application/vnd.github+json',
                        'Authorization': process.env.GITHUB_TOKEN,
                        'X-GitHub-Api-Version': '2022-11-28'
                    }
                }).then((response) => response.json())
                    .then(async (data) => {
                        if (list.map(a => a.name).includes(x.name)) return;
                        return list.push({ name: x.name, desc: Buffer.from(data.content, 'base64').toString('ascii') })
                    })
            })
        })
        .catch((err) => {
            console.log(err.message);
        });
    return Response.json({
        list: JSON.parse(JSON.stringify(list))
    }, {
        status: 200,
        headers: {
            'Cache-Control': 's-maxage=86400'
        },
    })
}
