'use client'
import React from 'react';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export default function Hero() {
    function CC({ content }) {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300 hover:text-gray-500 cursor-pointer transition-all transform hover:scale-105 active:translate-y-1" fill="none" viewBox="0 0 24 19" stroke="currentColor" strokeWidth={2} onClick={() => navigator.clipboard.writeText(content)}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
            </svg>
        );
    }

    return (
        <section className="bg-gray-900 py-16">
            <div className="mx-auto w-[104rem] px-6 lg:px-8 py-10">
                <div className="bg-gray-800 rounded-lg shadow-2xl p-8">
                    <h1 className="text-4xl font-semibold text-gray-100 mb-8">Installation Instructions</h1>
                    <div className="space-y-10">
                        {/* Docker Installation Section */}
                        <div className="bg-gray-850 rounded-lg p-8 hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-2xl">
                            <h2 className="text-2xl font-semibold text-gray-100 mb-6">Install Docker Quickly</h2>
                            <p className="text-gray-300 mb-4 flex items-center gap-3">Click on the icon to copy the code below
                                <CC content={"wget -q https://scripts-api.stratostech.xyz/sh?file=Docker%20Install/docker.sh -O install.sh; sudo bash ./install.sh"} />
                            </p>
                            <SyntaxHighlighter language="bash" style={tomorrow} className="rounded-lg bg-gray-900 p-5 shadow-md">
                                {`wget -q https://scripts-api.stratostech.xyz/sh?file=Docker%20Install/docker.sh -O install.sh; sudo bash ./install.sh`}
                            </SyntaxHighlighter>
                        </div>

                        {/* Node.js Installation Section */}
                        <div className="bg-gray-850 rounded-lg p-8 hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-2xl">
                            <h2 className="text-2xl font-semibold text-gray-100 mb-6">Install Node.js Quickly</h2>
                            <p className="text-gray-300 mb-4 flex items-center gap-3">Click on the icon to copy the code below
                                <CC content={"wget -q https://scripts-api.stratostech.xyz/sh?file=Node%20Install/node.sh -O install.sh; sudo bash ./install.sh"} />
                            </p>
                            <SyntaxHighlighter language="bash" style={tomorrow} className="rounded-lg bg-gray-900 p-5 shadow-md">
                                {`wget -q https://scripts-api.stratostech.xyz/sh?file=Node%20Install/node.sh -O install.sh; sudo bash ./install.sh`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
