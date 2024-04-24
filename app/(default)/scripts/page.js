'use client'
import Image from 'next/image'
import stratos from '@/public/images/Stratos.png'
import React, { useState, useEffect } from 'react';
import Tundra from '@/public/images/Tundra.png'
import WickedMpulse from '@/public/images/WickedMpulse.png'

export default function Hero() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`https://scripts-api.stratostech.xyz/list`, { cache: 'force-cache' })
            .then((response) => response.json())
            .then((data) => {
                setData(data.list)
            })
            .catch((err) => {
                console.log(err.message);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <section>
            <div className="mx-auto relative">
                <div className="w-screen relative md:pt-20 ">
                    <div className="max-w-[104rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-6">
                            {data.map(x => {
                                return (
                                    <a key={x.name} className="h-[120px] group flex flex-col border shadow-lg  rounded-xl  transition bg-gray-800 hover:bg-gray-850 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href={"/scripts/" + x.name}>
                                        <div className="p-4 md:p-5">
                                            <div className="flex">
                                                <div className="grow ms-5">
                                                    <h3 className="font-semibold group-hover:text-gray-400 text-gray-200">
                                                        {x.name}
                                                    </h3>
                                                    <p className="text-sm text-gray-400">
                                                        {x.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}
