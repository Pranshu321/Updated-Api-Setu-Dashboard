import Link from "next/link";
import React from "react";

const LeftStepper = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-[#E1F0FB] text-NavColor font-semibold p-3 mt-4 ml-4 rounded-md">
        Publishing steps
      </div>
      <ul
        className="relative m-0 w-full list-none overflow-hidden p-0 transition-[height] duration-200 ease-in-out"
        data-te-stepper-init=""
        data-te-stepper-type="vertical"
      >
        {/*First item*/}
        <li className="relative h-12 after:absolute after:left-[2.45rem] after:top-[3.6rem] after:mt-px after:h-[calc(100%-0.45rem)] after:w-px after:bg-[#e0e0e0] after:content-['']">
          <div className="flex cursor-pointer items-center p-6 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-['']  focus:outline-none">
            <span className="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
              1
            </span>
            <span className="text-NavColor font-semibold text-xs flex justify-center items-center gap-x-2 after:absolute after:flex after:text-[0.8rem] after:content-[data-content] ">
              API Overview
              <span className="mt-1">
                <svg
                  width="7"
                  height="10"
                  viewBox="0 0 5 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.0108337 6.6775L2.6825 4L0.0108335 1.3225L0.833333 0.5L4.33333 4L0.833334 7.5L0.0108337 6.6775Z"
                    fill="#09314D"
                  />
                </svg>
              </span>
            </span>
          </div>
        </li>
        {/*Second item*/}
        <li className="relative h-12 after:absolute after:left-[2.45rem] after:top-[3.6rem] after:mt-px after:h-[calc(100%-0.45rem)] after:w-px after:bg-[#e0e0e0] after:content-['']">
          <div className="flex cursor-pointer items-center p-6 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-['']  focus:outline-none">
            <span className="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
              2
            </span>
            <span className="text-NavColor text-xs font-semibold flex justify-center items-center gap-x-2 after:absolute after:flex after:text-[0.8rem] after:content-[data-content] ">
              API Documentation
              <span className="mt-1">
                <svg
                  width="7"
                  height="10"
                  viewBox="0 0 5 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.0108337 6.6775L2.6825 4L0.0108335 1.3225L0.833333 0.5L4.33333 4L0.833334 7.5L0.0108337 6.6775Z"
                    fill="#09314D"
                  />
                </svg>
              </span>
            </span>
          </div>
        </li>
        {/*Third item*/}
        <li className="relative h-12 after:absolute after:left-[2.45rem] after:top-[3.6rem] after:mt-px after:h-[calc(100%-0.45rem)] after:w-px after:bg-[#e0e0e0] after:content-['']">
          <div className="flex cursor-pointer items-center p-6 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-['']  focus:outline-none">
            <span className="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
              3
            </span>
            <span className="text-NavColor font-semibold flex justify-center items-center gap-x-2 text-xs after:absolute after:flex after:text-[0.8rem] after:content-[data-content] ">
              Authentication
              <span className="mt-1">
                <svg
                  width="7"
                  height="10"
                  viewBox="0 0 5 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.0108337 6.6775L2.6825 4L0.0108335 1.3225L0.833333 0.5L4.33333 4L0.833334 7.5L0.0108337 6.6775Z"
                    fill="#09314D"
                  />
                </svg>
              </span>
            </span>
          </div>
        </li>
        <li className="relative h-14 after:absolute after:left-[2.45rem] after:top-[3.6rem] after:mt-px after:h-[calc(100%-0.45rem)] after:w-px after:bg-[#e0e0e0] after:content-['']">
          <div className="flex cursor-pointer items-center p-6 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-['']  focus:outline-none">
            <span className="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
              4
            </span>
            <span className="text-NavColor font-semibold flex justify-center items-center text-xs after:absolute after:flex after:text-[0.8rem] after:content-[data-content] ">
              Endpoint Documentation
              <span className="-mt-4">
                <svg
                  width="7"
                  height="10"
                  viewBox="0 0 5 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.0108337 6.6775L2.6825 4L0.0108335 1.3225L0.833333 0.5L4.33333 4L0.833334 7.5L0.0108337 6.6775Z"
                    fill="#09314D"
                  />
                </svg>
              </span>
            </span>
          </div>
        </li>
        <li className="relative h-12 after:absolute after:left-[2.45rem] after:top-[3.6rem] after:mt-px after:h-[calc(100%-0.45rem)] after:w-px after:bg-[#e0e0e0] after:content-['']">
          <div className="flex cursor-pointer items-center p-6 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-['']  focus:outline-none">
            <span className="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
              5
            </span>
            <span className="text-NavColor flex justify-center items-center gap-x-2 font-semibold text-xs after:absolute after:flex after:text-[0.8rem] after:content-[data-content] ">
              Headers
              <span className="mt-1">
                <svg
                  width="7"
                  height="10"
                  viewBox="0 0 5 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.0108337 6.6775L2.6825 4L0.0108335 1.3225L0.833333 0.5L4.33333 4L0.833334 7.5L0.0108337 6.6775Z"
                    fill="#09314D"
                  />
                </svg>
              </span>
            </span>
          </div>
        </li>
        <li data-te-stepper-step-ref="" className="relative h-fit">
          <div className="flex cursor-pointer items-center p-6 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-['']  focus:outline-none">
            <span className="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
              6
            </span>
            <span className="text-NavColor flex justify-center items-center font-semibold text-xs after:absolute after:flex after:text-[0.8rem] after:content-[data-content] ">
              Request & Response Body
              <span className="-mt-4">
                <svg
                  width="7"
                  height="10"
                  viewBox="0 0 5 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.0108337 6.6775L2.6825 4L0.0108335 1.3225L0.833333 0.5L4.33333 4L0.833334 7.5L0.0108337 6.6775Z"
                    fill="#09314D"
                  />
                </svg>
              </span>
            </span>
          </div>
        </li>
      </ul>
      <div className="border-t border-gray-300 ml-3">
        <Link
          href="#"
          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-200 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-NavColor pr-6"
        >
          <span className="ml-2 text-base text-NavColor font-semibold tracking-wide truncate">
            Listing Page
          </span>
        </Link>
      </div>
    </div>
  );
};

export default LeftStepper;
