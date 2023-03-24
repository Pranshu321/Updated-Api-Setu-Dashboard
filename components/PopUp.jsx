import React from "react";
import { GrClose } from "react-icons/gr";

const PopUp = () => {
    return (
        <div>
            <div className="max-w-sm h-96 my-20 ml-20 w-[70%] lg:max-w-full lg:flex">
                <div
                    className="h-48 lg:h-auto lg:w-72 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                    style={{
                        backgroundImage:
                            'url("https://v1.tailwindcss.com/img/card-top.jpg")',
                    }}
                    title="Woman holding a mug"
                ></div>
                <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8 flex flex-col gap-y-3">
                        <div className="text-[#FF8000] font-semibold flex flex-row justify-between text-4xl mb-2">
                            <div>
                                Ready to get <br /> empowered?
                            </div>
                            <div>
                                <GrClose size={25} className="cursor-pointer" color="#09314D" />
                            </div>
                        </div>
                        <p className="text-[#00314D] text-base">
                            <p className="font-bold text-sm mb-3">Welcome to API Setu!</p>
                            In this dashboard, you have the ability to
                            consume, publish, and manage APIs with ease. Whether you're
                            looking to use APIs for your own projects or share your own APIs
                            with others, this dashboard provides you with all the tools you
                            need to get started.
                        </p>
                        <div className="flex items-center justify-center mt-8">
                            <button class="bg-[#FF8000] hover:bg-[#f89838] text-white font-bold py-2 px-8 rounded-md">
                                Let's go
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopUp;
