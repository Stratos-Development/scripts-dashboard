'use client'
import React, { useState, useEffect } from 'react';

export default function Hero() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://scripts-api.stratostech.xyz/list`, { cache: 'force-cache' })
            .then((response) => response.json())
            .then((data) => {
                setData(data.list);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err.message);
                setLoading(false);
            });
    }, []);

    const skeletons = Array(23).fill(0);

    return (
        <section>
            <div className="mx-auto relative">
                <div className="w-screen relative md:pt-20">
                    <div className="max-w-[104rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                        {loading ? (
                            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-6">
                                {skeletons.map((_, index) => (
                                    <div key={index} className="h-[120px] group flex flex-col border shadow-lg rounded-xl transition bg-gray-800 hover:bg-gray-850 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                        <div className="p-4 md:p-5 animate-pulse">
                                            <div className="flex">
                                                <div className="grow ms-5">
                                                    <div className="h-6 bg-gray-700 rounded mb-2"></div>
                                                    <div className="h-4 bg-gray-700 rounded"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-6">
                                {data.map(x => (
                                    <a key={x.name} className="transform hover:scale-105 transition-transform duration-300 ease-in-out animate__animated animate__bounceIn animate__delay-3s h-[120px] group flex flex-col border shadow-lg rounded-xl transition bg-gray-800 hover:bg-gray-850 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href={"/scripts/" + x.name}>
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
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
