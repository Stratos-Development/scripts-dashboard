import React from 'react'

export default function Skeleton({ number }) {
    return (
        Array(number).fill(0).map((el, index) => (
            <div key={index} className='flex flex-col gap-2 w-full'>
                <h1 className='w-full bg-gray-300 h-4 rounded-full animate-pulse'>                                </h1>
            </div>
        ))
    )
}