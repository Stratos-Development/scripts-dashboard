'use client'
import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export default function Hero({ params }) {
    const [data, setData] = useState([]);
    const [markdown1, setMarkdownData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`https://scripts-api.stratostech.xyz/scripts/${params.slug}`).then((response) => response.json())
            .then((data) => {
                setData(data.dockerCompose);
                setMarkdownData(data.instructions);
                setIsLoading(false); // Set loading to false after data is fetched
            })
            .catch((err) => {
                console.log(err.message);
                setIsLoading(false); // Set loading to false even if there is an error
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function CC({ content }) {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 active:translate-y-1 hover:cursor-pointer" fill="none" viewBox="0 0 24 19" stroke="currentColor" strokeWidth={2} onClick={() => navigator.clipboard.writeText(content)}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
            </svg>
        )
    }

    return (
        <section>
            <div className="mx-auto relative">
                <div className="mx-auto block items-center bg-gray-800 rounded-lg shadow-xl max-w-[100rem] mb-10 drop-shadow-xl p-10 mt-10 row text-left grid sm:grid-cols-2 lg:grid-cols-2 gap-2 relative">
                    {isLoading && (
                        <div className="absolute inset-0 h-[1000px] bg-gray-800 flex items-center justify-center z-10 rounded-lg">
                            <div className="w-8 h-8 border-4 border-t-4 border-t-transparent border-white rounded-full animate-spin"></div>
                        </div>
                    )}
                    <Markdown className='px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto z-0'>{markdown1.toString()}</Markdown>
                    <div className="item- px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto z-0">
                        <div className="grid w-[45rem] mx-auto items-center gap-2 bg-gray-900 rounded-lg shadow-xl drop-shadow-xl p-10">
                            <p className='inline-flex items-baseline gap-1 text-center justify-center'>Click on the icon to copy the code below <CC content={data} /></p>
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
