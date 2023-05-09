import Link from "next/link";
import React, { useState } from "react";
import { TbTransform } from "react-icons/tb";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const LeftStepper = ({ setNextPage }) => {
  const [Subdrop, setSubdrop] = useState(false);
  const [drop, setdrop] = useState(false);
  return (
    <div className="flex flex-col">
      <div className="bg-[#E1F0FB] text-NavColor font-semibold p-3 mt-4 ml-4 rounded-md">
        Publishing steps
      </div>
      {/* <div className="bg-[#E5F0E0] flex items-center gap-x-3 text-sm text-[#52A62B] font-semibold p-3 mt-4 ml-4 rounded-md">
        <span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 0.5C3.86 0.5 0.5 3.86 0.5 8C0.5 12.14 3.86 15.5 8 15.5C12.14 15.5 15.5 12.14 15.5 8C15.5 3.86 12.14 0.5 8 0.5ZM5.9675 11.2175L3.275 8.525C2.9825 8.2325 2.9825 7.76 3.275 7.4675C3.5675 7.175 4.04 7.175 4.3325 7.4675L6.5 9.6275L11.66 4.4675C11.9525 4.175 12.425 4.175 12.7175 4.4675C13.01 4.76 13.01 5.2325 12.7175 5.525L7.025 11.2175C6.74 11.51 6.26 11.51 5.9675 11.2175Z"
              fill="#52A62B"
            />
          </svg>
        </span>
        6 requisites passed
        <span>
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5575 0.442383L5 3.87738L8.4425 0.442383L9.5 1.49988L5 5.99988L0.5 1.49988L1.5575 0.442383Z"
              fill="#52A62B"
            />
          </svg>
        </span>
      </div> */}

      {/* <div class="text-NavColor ml-3 cursor-pointer border-2 flex justify-center items-center py-1 gap-x-2 mt-3 border-NavColor rounded-md font-bold">
        <span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.94402 12.7948H10.1537V14.2603L10.9375 16.0001H10.6003L9.30731 14.7002H8.71355L8.2396 16.0001H7.77606L7.47788 14.7002H6.94012L5.64194 16.0001H5.16017L5.94272 14.2603L5.94402 12.7948ZM0.151055 11.4578L4.20053 5.34801V12.229H0.0130346C-0.0247259 11.9468 0.019545 11.6579 0.151055 11.4578ZM7.59246 0.229336C7.81642 -0.108552 8.20965 -0.0674756 8.46746 0.320765C11.8711 5.45799 10.8841 6.2623 10.8841 12.2303H5.17319C5.17319 6.23845 4.1758 5.38644 7.59246 0.229336ZM11.8568 5.43414L15.7878 11.3664C15.9505 11.6102 16.0208 11.9362 15.9948 12.229H11.8568V5.43414Z"
              fill="#09314D"
            />
          </svg>
        </span>
        <span>Publish</span>
      </div>

      <div class="bg-gray-200 text-sm text-[#6B7280] py-2 px-4 rounded-md mt-3 ml-3 flex items-center justify-center">
        Current: v1.0.0
      </div> */}
      <ul
        className="relative m-0 w-full list-none overflow-hidden p-0 transition-[height] duration-200 ease-in-out"
        data-te-stepper-init=""
        data-te-stepper-type="vertical"
      >
        <li
          onClick={() => setNextPage(1)}
          className="relative h-12 after:absolute after:left-[2.45rem] after:top-[3.6rem] after:mt-px after:h-[calc(100%-0.45rem)] after:w-px after:bg-[#e0e0e0] after:content-['']"
        >
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

        <li
          onClick={() => setNextPage(2)}
          className="relative h-12 after:absolute after:left-[2.45rem] after:top-[3.6rem] after:mt-px after:h-[calc(100%-0.45rem)] after:w-px after:bg-[#e0e0e0] after:content-['']"
        >
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

        <li
          onClick={() => setNextPage(3)}
          className="relative h-12 after:absolute after:left-[2.45rem] after:top-[3.6rem] after:mt-px after:h-[calc(100%-0.45rem)] after:w-px after:bg-[#e0e0e0] after:content-['']"
        >
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
        <li
          onClick={() => setNextPage(4)}
          className="relative h-14 after:absolute after:left-[2.45rem] after:top-[3.6rem] after:mt-px after:h-[calc(100%-0.45rem)] after:w-px after:bg-[#e0e0e0] after:content-['']"
        >
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
        <li
          onClick={() => setNextPage(6)}
          className="relative h-12 after:absolute after:left-[2.45rem] after:top-[3.6rem] after:mt-px after:h-[calc(100%-0.45rem)] after:w-px after:bg-[#e0e0e0] after:content-['']"
        >
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
        <li
          onClick={() => setNextPage(7)}
          data-te-stepper-step-ref=""
          className="relative h-fit"
        >
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
      <div className="border-t mt-3 border-gray-300 ml-3">
        <div className="flex justify-between items-center mt-4">
          <input
            className="hidden lg:flex px-5 pl-1 h-8 w-[60%] rounded-md border border-gray-300 outline-none bg-transparent py-1 text-xs placeholder:text-gray-400"
            type="email"
            placeholder="Email"
          ></input>
          <div className="flex items-center gap-x-2">
            <div>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 6H10.5M6 10.5V1.5"
                  stroke="#9CA3AF"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.25 5.25H15.75"
                  stroke="#9CA3AF"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M4.5 9H13.5"
                  stroke="#9CA3AF"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M7.5 12.75H10.5"
                  stroke="#9CA3AF"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <Link
          href="#"
          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-NavColor pr-6"
          onClick={() => setdrop(!drop)}
        >
          <div className="flex justify-between w-full">
            <span className="ml-2 text-NavColor font-semibold text-sm tracking-wide truncate">
              Co-WIN Protected APIs
            </span>
            <span className="inline-flex justify-center items-center">
              {!drop ? (
                <MdKeyboardArrowDown size={20} />
              ) : (
                <MdKeyboardArrowUp size={20} />
              )}
            </span>
          </div>
        </Link>
        <div
          className={`${
            !drop ? "hidden" : null
          } flex flex-col gap-y-2 my-3 justify-center items-start pl-9 text-gray-600 hover:text-gray-800`}
        >
          <div
            className="flex justify-between w-[90%] cursor-pointer"
            onClick={() => setSubdrop(!Subdrop)}
          >
            <span className="ml-2 font-bold text-NavColor text-sm tracking-wide truncate">
              v1.0.0
            </span>
            <span className="inline-flex justify-center items-center">
              {!Subdrop ? (
                <MdKeyboardArrowDown size={20} />
              ) : (
                <MdKeyboardArrowUp size={20} />
              )}
            </span>
          </div>
          <div
            className={`${
              !Subdrop ? "hidden" : null
            } flex flex-col pl-5 justify-center items-start text-gray-600 hover:text-gray-800`}
          >
            <div className="flex justify-center items-center gap-x-1">
              <span className="ml-1 text-sm tracking-wide truncate">
                Endpoint 01
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftStepper;
