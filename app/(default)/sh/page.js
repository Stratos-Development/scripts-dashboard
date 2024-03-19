'use client'
import Image from 'next/image'
import stratos from '@/public/images/Stratos.png'
import React, { useState, useEffect, useRef } from 'react';
import Tundra from '@/public/images/Tundra.png'
import WickedMpulse from '@/public/images/WickedMpulse.png'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
export default function Hero({ params }) {
    function CC({ content }) {
        return (<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 active:translate-y-1 hover:cursor-pointer" fill="none" viewBox="0 0 24 19" stroke="currentColor" strokeWidth={2} onClick={() => navigator.clipboard.writeText(content)}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
        </svg>)
    }
    return (
        <section>
            <div className="mx-auto relative">
                <div className="mx-auto block items-center bg-gray-800 rounded-lg shadow-xl max-w-[100rem] p-10 mt-10 row text-left">
                    <div className="item- px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                        <h1 className='text-xl font-bold'>Install Docker Quick And Easy</h1>
                        <div className="grid mx-auto items-center gap-2">
                            <p className='inline-flex items-baseline gap-1'>Click on the icon to copy the code below  <CC content={"wget -q https://scripts.stratostech.xyz/api/sh?file=Docker%20Install/docker.sh -O install.sh; sudo bash ./install.sh"} /></p>
                            <SyntaxHighlighter language="bash" style={tomorrow} className="drop-shadow-xl">
                                wget -q https://scripts.stratostech.xyz/api/sh?file=Docker%20Install/docker.sh -O install.sh; sudo bash ./install.sh
                            </SyntaxHighlighter>
                        </div>
                        <h1 className='text-xl font-bold'>Install Node.js Quick And Easy</h1>
                        <div className="grid mx-auto items-center gap-2">
                            <p className='inline-flex items-baseline gap-1'>Click on the icon to copy the code below  <CC content={"wget -q https://scripts.stratostech.xyz/api/sh?file=Node%20Install/node.sh -O install.sh; sudo bash ./install.sh"} /></p>
                            <SyntaxHighlighter language="bash" style={tomorrow} className="drop-shadow-xl">
                                wget -q https://scripts.stratostech.xyz/api/sh?file=Node%20Install/node.sh -O install.sh; sudo bash ./install.sh
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}