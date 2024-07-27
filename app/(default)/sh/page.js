'use client'
import React from 'react';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export default function Hero({ params }) {
    function CC({ content }) {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300 hover:text-gray-500 cursor-pointer transition-transform transform active:translate-y-1" fill="none" viewBox="0 0 24 19" stroke="currentColor" strokeWidth={2} onClick={() => navigator.clipboard.writeText(content)}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
            </svg>
        );
    }

    return (
        <section className="bg-gray-900 py-16">
            <div className="mx-auto w-[100rem] px-4 sm:px-6 lg:px-8">
                <div className="bg-gray-800 rounded-lg shadow-lg p-8">
                    <h1 className="text-3xl font-semibold text-gray-100 mb-6">Installation Instructions</h1>
                    <div className="space-y-8">
                        <div className="bg-gray-700 rounded-lg p-6">
                            <h2 className="text-2xl font-semibold text-gray-100 mb-4">Install Docker Quickly</h2>
                            <p className="text-gray-300 mb-4 flex items-center gap-2">Click on the icon to copy the code below <CC content={"wget -q https://scripts-api.stratostech.xyz/sh?file=Docker%20Install/docker.sh -O install.sh; sudo bash ./install.sh"} /></p>
                            <SyntaxHighlighter language="bash" style={tomorrow} className="rounded-lg bg-gray-900 p-4 shadow-md">
                                {`wget -q https://scripts-api.stratostech.xyz/sh?file=Docker%20Install/docker.sh -O install.sh; sudo bash ./install.sh`}
                            </SyntaxHighlighter>
                        </div>
                        <div className="bg-gray-700 rounded-lg p-6">
                            <h2 className="text-2xl font-semibold text-gray-100 mb-4">Install Node.js Quickly</h2>
                            <p className="text-gray-300 mb-4 flex items-center gap-2">Click on the icon to copy the code below <CC content={"wget -q https://scripts-api.stratostech.xyz/sh?file=Node%20Install/node.sh -O install.sh; sudo bash ./install.sh"} /></p>
                            <SyntaxHighlighter language="bash" style={tomorrow} className="rounded-lg bg-gray-900 p-4 shadow-md">
                                {`wget -q https://scripts-api.stratostech.xyz/sh?file=Node%20Install/node.sh -O install.sh; sudo bash ./install.sh`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
