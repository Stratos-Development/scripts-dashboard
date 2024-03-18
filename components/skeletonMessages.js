import React from 'react'

export default function Skeleton({ number }) {
    return (
        <div className="flex flex-col flex-auto h-full p-6">
            <div
                className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-900 h-full p-4"
            >
                <div className="flex flex-col h-full overflow-x-auto mb-4">
                    <div className="flex flex-col h-full">
                        <div className="grid grid-cols-12 gap-y-2">
                            {Array(number).fill(0).map((el, index) => (
                                <div key={index} className={`${index % 2 == 0 ? "col-start-6 col-end-13" : "col-start-1 col-end-8"}  p-3 rounded-lg`}>
                                    <div className={`${index % 2 == 0 ? "flex items-center justify-start flex-row-reverse" : "flex flex-row items-center"}`}>
                                        <div
                                            className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                                        >
                                            <div className='flex flex-col gap-2 w-9/12'>
                                                <span className='w-11/12 bg-gray-300 h-2 rounded-full animate-pulse'></span>
                                            </div>
                                        </div>
                                        <div
                                            className={`${index % 2 == 0 ? "relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl text-black" : "relative ml-3 text-sm bg-gray-800 py-2 px-4 shadow rounded-xl"}`}
                                        >
                                            <div className='flex flex-col gap-2 w-9/12'>
                                                <span className='w-11/12 bg-gray-300 h-2 rounded-full animate-pulse'></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <form >
                    <div
                        className="flex flex-row items-center h-16 rounded-xl bg-gray-900 w-full px-4"
                    >
                        <div className="flex-grow ml-4">
                            <div className="relative w-full">
                                <input
                                    type="text"
                                    name='message'
                                    className="flex w-full border rounded-xl focus:outline-none bg-gray-800 focus:border-indigo-300 pl-4 h-10"
                                />
                            </div>
                        </div>
                        <div className="ml-4">
                            <button type='submit'
                                className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
                            >
                                <span>Send</span>
                                <span className="ml-2">
                                    <svg
                                        className="w-4 h-4 transform rotate-45 -mt-px"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                        ></path>
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}