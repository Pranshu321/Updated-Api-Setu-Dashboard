import React from 'react'
import { FcInfo } from 'react-icons/fc';

const FileUploader = () => {
    return (
        <div className='flex justify-center'>
            <div className='flex flex-col w-[95%]'>

                <div className='text-2xl text-center lg:text-left font-semibold text-[#1D4379]'>
                    Bulk Team Import
                </div>
                <div className='flex lg:flex-row flex-col items-center mt-5 gap-y-2 justify-center lg:justify-start gap-x-2'>
                    <div className='flex gap-x-2 items-center'>
                        <div class="w-56 h-10">
                            <button class="bg-gray-200 text-gray-300 font-bold cursor-pointer py-2 px-4 w-full inline-flex items-center">
                                <svg fill="rgb(209 213 219)" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" />
                                </svg>
                                <span class="ml-2">Import from github</span>
                            </button>
                            <input
                                class="cursor-pointer relative block py-2 px-4 w-full opacity-0 -top-10"
                                type="file"
                            />
                        </div>
                        <FcInfo size={25} />
                    </div>
                    <div className='flex gap-x-2 items-center'>
                        <div class="w-56 h-10">
                            <button class="bg-gray-200 text-gray-300 font-bold cursor-pointer py-2 px-4 w-full inline-flex items-center">
                                <svg fill="rgb(209 213 219)" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" />
                                </svg>
                                <span class="ml-2">Import from CSV</span>
                            </button>
                            <input
                                class="cursor-pointer relative block py-2 px-4 w-full opacity-0 -top-10"
                                type="file"
                            />
                        </div>
                        <FcInfo size={25} />
                    </div>
                    <div className='text-[#5EB0EC] lg:ml-7'>
                        Download CSV Template
                    </div>

                </div>
                <div className='mt-2 flex items-center gap-x-9 border-t-2 border-gray-100 pt-2'>
                    <div>
                        <FcInfo size={20} />
                    </div>
                    <div className='text-sm text-gray-600'>
                        A credit card is required for this feature. Update in <span className='text-[#5EB0EC]'>Billing & Payment Settings</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FileUploader
