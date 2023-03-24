import React from 'react'
import TableComponent from './TableComponent'

const Table = () => {
    return (
        <div className='flex justify-center'>
            <div className='flex flex-col w-[95%]'>
                <div className='text-2xl text-center lg:text-left font-semibold text-[#1D4379]'>
                    Manage Teammates
                </div>
                <div className='relative my-2 flex w-full lg:w-96 flex-wrap items-stretch'>
                    <input
                        type="search"
                        class="relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="button-addon1" />
                    <button
                        class="relative z-[2] flex items-center rounded-r bg-primary px-3 py-2.5 text-xs font-medium uppercase leading-tight text-white transition duration-150 ease-in-out hover:bg-primary-700 focus:outline-none focus:ring-0 active:bg-primary-800 border border-solid border-neutral-300"
                        type="button"
                        id="button-addon1"
                        data-te-ripple-init
                        data-te-ripple-color="light">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="#8C8C8C"
                            class="h-5 w-5">
                            <path
                                fill-rule="evenodd"
                                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
                <div>
                    <TableComponent />
                </div>
            </div>
        </div>
    )
}

export default Table
