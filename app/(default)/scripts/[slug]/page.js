'use client'
import Image from 'next/image'
import stratos from '@/public/images/Stratos.png'
import React, { useState, useEffect, useRef } from 'react';
import Tundra from '@/public/images/Tundra.png'
import WickedMpulse from '@/public/images/WickedMpulse.png'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
export default function Hero({ params }) {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`https://api.github.com/repos/Stratos-Development/Simple-Scripts/contents/Docker%20Setups/${params.slug}/docker-compose.yml`, {
            cache: 'force-cache',
            headers: {
                'Accept': 'application/vnd.github+json',
                'Authorization': "Bearer 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",
                'X-GitHub-Api-Version': '2022-11-28'
            }
        }).then((response) => response.json())
            .then((data) => {
                setData(Buffer.from(data.content, 'base64').toString('ascii'))
            })
            .catch((err) => {
                console.log(err.message);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    function CC({ content }) {
        return (<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 active:translate-y-1 hover:cursor-pointer" fill="none" viewBox="0 0 24 19" stroke="currentColor" strokeWidth={2} onClick={() => navigator.clipboard.writeText(content)}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
        </svg>)
    }
    return (
        <section>
            <div className="mx-auto relative">
                <div className="mx-auto block items-center bg-gray-800 rounded-lg shadow-xl max-w-[100rem] p-10 mt-10 row text-left grid sm:grid-cols-2 lg:grid-cols-2 gap-2">
                    <div className='px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
                        <h1 className='text-2xl font-bold'>How to Install a Docker Compose File on Docker</h1>

                        <h2 className='text-xl font-bold'>Prerequisites</h2>
                        <p className='text-sm'>Before you begin, ensure that you have Docker installed on your system. You can download and install Docker from <a href="https://www.docker.com/products/docker-desktop">here</a>.</p>

                        <h2 className='text-xl font-bold'>Step 1: Copy the Docker Compose File</h2>
                        <p>Copy the Docker Compose file (<code className='inline-flex items-baseline'>docker-compose.yml <CC content={data} /></code>) from the right side of your screen.</p>

                        <h2 className='text-xl font-bold'>Step 2: Navigate to the Directory Containing the Compose File</h2>
                        <p>Open a terminal or command prompt and navigate to the directory where you downloaded the Docker Compose file.</p>

                        <h2 className='text-xl font-bold'>Step 3: Verify the Compose File</h2>
                        <p>Review the contents of the <code>docker-compose.yml </code> file to ensure it meets your requirements and configurations.</p>

                        <h2 className='text-xl font-bold'>Step 4: Run Docker Compose</h2>
                        <p>Execute the following command to run Docker Compose:</p>
                        <pre><code>docker-compose up -d</code></pre>
                        <p>This command will start the services defined in the Docker Compose file in detached mode, meaning they will run in the background.</p>

                        <h2 className='text-xl font-bold'>Step 5: Verify Deployment</h2>
                        <p>Once Docker Compose has finished setting up the services, you can verify that they are running by executing:</p>
                        <pre><code>docker-compose ps</code></pre>
                        <p>This command will display the status of the services defined in the Compose file.</p>

                        <h2 className='text-xl font-bold'>Step 6: Access Your Application</h2>
                        <p>Depending on the services you&lsquo;ve deployed, access your application using the appropriate URL or IP address.</p>

                        <h2 className='text-xl font-bold'>Step 7: Stop and Remove Services (Optional)</h2>
                        <p>To stop and remove the services defined in the Compose file, run the following command:</p>
                        <pre><code>docker-compose down</code></pre>

                        <h2 className='text-xl font-bold'>Conclusion</h2>
                        <p>Congratulations! You have successfully installed and deployed a Docker Compose file onto Docker.</p>

                        <h2 className='text-xl font-bold'>Additional Resources</h2>
                        <ul>
                            <li><a className='text-blue-600' href="https://docs.docker.com/compose/">Docker Compose Documentation</a></li>
                            <li><a className='text-blue-600' href="https://docs.docker.com/get-started/">Docker Documentation</a></li>
                        </ul>
                    </div>
                    <div className="item- px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                        <div className="grid w-[45rem] mx-auto items-center gap-2">
                            <p className='inline-flex items-baseline gap-1'>Click on the icon to copy the code below  <CC content={data} /></p>
                            <SyntaxHighlighter language="yml" style={tomorrow} className="drop-shadow-xl">
                                {data}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}
