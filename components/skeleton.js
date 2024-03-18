import React from 'react'

export default function Skeleton({ number, values }) {
    return (
        Array(number).fill(0).map((el, index) => (
            <tr key={index}>
                {Array(values).fill(0).map((el, index) => (
                    <td key={index} className="p-4 border-b border-blue-gray-50">
                        <div className='flex flex-col gap-2 w-9/12'>
                            <span className='w-11/12 bg-gray-300 h-2 rounded-full animate-pulse'></span>
                        </div>
                    </td>
                ))}
            </tr>
        ))
    )
}