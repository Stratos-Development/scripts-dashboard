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
          <div className="max-w-[104rem]  mx-auto">
            <div className="max-w-[85rem] pt-10  overflow-auto mx-auto px-4 sm:px-6 lg:px-8 ">
              <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center ">
                <div>
                  <div className="contents ">
                    <h1 className="contents text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white drop-shadow-xl shadow-black">Scripts made by <span className="text-purple-600">Stratos Tech</span></h1>
                  </div>
                  <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">Redefining Horizons, Inspiring Innovation.</p>

                  <div className="mt-7 grid gap-3 w-full sm:inline-flex">
                    <a href="/scripts" className="drop-shadow-xl shadow-black py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#1f97ee] text-white hover:bg-[#1771b3] disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                      Docker Scripts
                      <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                    </a>
                    <a href="/scripts" className="drop-shadow-xl shadow-black py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#3c4549] text-white hover:bg-[#2d3437] disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                      Bash Scripts
                      <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                    </a>
                  </div>


                </div>
                <div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }} className="w-full relative ms-4">
                  <Image className="w-full rounded-md" width={500} height={500} src={stratos} alt="Image Description" />
                </div>
              </div>
            </div>
            {/* <h1 id="stratos-simple-scripts" className='text-4xl bold text-center'>Stratos Simple Scripts</h1>
            <hr />
            <h2 id="overview" className='text-3xl bold'>Overview</h2>
            <hr />
            <p>Stratos Simple Scripts is a collection of Docker Compose files and Linux shell scripts developed by Stratos Tech. These scripts are designed to simplify common tasks related to deployment, configuration, and management of applications and services in Dockerized environments. Whether you&#39;re setting up development environments, deploying applications, or managing infrastructure, Stratos Simple Scripts aims to streamline these processes and improve efficiency.</p>
            <h2 id="features" className='text-3xl bold'>Features</h2>
            <hr />
            <ul>
              <li><strong>Docker Compose Files:</strong> Includes a variety of Docker Compose files for different use cases, such as deploying applications, setting up development environments, and managing infrastructure.</li>
              <li><strong>Shell Scripts:</strong> Provides a set of Linux shell scripts for automating tasks like environment setup, service management, and system configuration.</li>
              <li><strong>Modularity:</strong> Each script and Docker Compose file is designed to be modular and reusable, allowing for easy customization and adaptation to specific project requirements.</li>
              <li><strong>Compatibility:</strong> Compatible with a wide range of Linux distributions and Docker environments, ensuring flexibility and ease of integration into existing workflows.</li>
            </ul> */}
          </div>
        </div>

      </div>

    </section>
  )
}
