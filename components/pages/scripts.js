'use client'
import React, { useState, useEffect } from 'react';

export default function Hero() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        fetch(`https://scripts-api.stratostech.xyz/list`, { cache: 'force-cache' })
            .then((response) => response.json())
            .then((data) => {
                setData(data.list);
                setFilteredData(data.list);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err.message);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        const results = data.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(results);
    }, [searchTerm, data]);

    const skeletons = Array(23).fill(0);

    return (
        <section className="bg-gray-900 text-white ">
            <div className="max-w-[104rem] mx-auto px-6 lg:px-8 py-10">
                <div className="relative">
                    <input
                        type="text"
                        className="w-full mb-6 p-3 rounded-lg border border-gray-700 bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Search scripts..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    {loading ? (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-6">
                            {skeletons.map((_, index) => (
                                <div key={index} className="h-[120px] w-[300px] group flex flex-col border shadow-lg rounded-xl transition bg-gray-800 hover:bg-gray-850 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
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
                            {filteredData.map(x => (
                                <a key={x.name} className="transform hover:scale-105 transition-transform duration-300 ease-in-out h-[120px] group flex flex-col border shadow-lg rounded-xl transition bg-gray-800 hover:bg-gray-850 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href={"/scripts/" + x.name}>
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
        </section>
    );
}
