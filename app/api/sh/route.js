const list = []

export async function GET(req, res) {
    try {
        const searchParams = req.nextUrl.searchParams
        const query = searchParams.get('file')
        if (!query) return Response.json({ error: "No file provided" })
        const url = `https://api.github.com/repos/Stratos-Development/Simple-Scripts/contents/Bash%20Scripts/${query}`;
        const options = {
            method: 'GET',
            headers: {
                Accept: 'application/vnd.github+json',
                Authorization: 'Bearer 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',
                'X-GitHub-Api-Version': '2022-11-28',
                'User-Agent': 'Awesome-Octocat-App'
            }
        };
        const response = await fetch(url, options);
        const data = await response.json();
        return new Response(`${Buffer.from(data.content, 'base64').toString('ascii')}`)

    } catch (error) {
        return new Response(`File not found`)

    }

}
