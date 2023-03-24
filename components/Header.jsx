import Link from "next/link";
import React, { useState } from "react";
import { FaDownload } from "react-icons/fa";
import { BsQuestionCircle } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import Dropdown from "./DropDown";
const Header = ({ drop, setdrop }) => {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-white p-4">
        <div className="flex items-center justify-center flex-shrink-0 text-TextBlue mr-6">
          <img
            src="https://user-images.githubusercontent.com/86917304/224671405-84ddd72b-4592-4ef6-b4b9-48021b23cc4f.png"
            alt="logo"
            width={40}
          />
          <span className="font-semibold text-2xl pl-2 tracking-tight">
            API Setu
          </span>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setdrop(!drop)}
            className="flex items-center px-3 py-2 border rounded text-TextBlue border-teal-400 hover:text-TextBlue hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block lg:ml-24 flex-grow lg:flex lg:items-center lg:w-auto">
          <div
            className={`text-sm lg:flex lg:flex-grow ${
              drop ? "hidden" : null
            } `}
          >
            <Link
              href="#responsive-header"
              className="block mt-4 text-base lg:inline-block lg:mt-0 text-TextBlue border-b-4 rounded-b-md pb-1 px-2 border-textOrange font-bold hover:text-TextBlue mr-6"
            >
              PUBLISH{" "}
            </Link>
            <Link
              href="#responsive-header"
              className="block mt-4 text-lg lg:inline-block lg:mt-0 text-gray-500 hover:text-gray-500 mr-6"
            >
              Consume
            </Link>
          </div>
          <div className="flex justify-start w-[50%]">
            <div className="absolute top-8 flex pl-3 items-center pointer-events-none">
              <svg
                width="16"
                height="16"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.04854 0C7.71881 0 9.23073 0.660156 10.3253 1.72754C11.4199 2.79492 12.0968 4.26941 12.0968 5.89819C12.0968 7.46179 11.4729 8.88293 10.4549 9.93848C10.4734 9.95178 10.4913 9.96655 10.5082 9.98291L14.8626 14.2233C15.0449 14.4001 15.0459 14.688 14.8643 14.866C14.6829 15.0439 14.3877 15.0447 14.2054 14.8678L9.85099 10.6274C9.82333 10.6006 9.79992 10.5713 9.78052 10.5402C8.75242 11.3271 7.45669 11.7965 6.04842 11.7965C4.37815 11.7965 2.86598 11.1364 1.77141 10.069C0.67697 9.00159 0 7.52698 0 5.89819C0 4.26941 0.67697 2.79492 1.77154 1.72754C2.86611 0.660278 4.37827 0 6.04854 0ZM9.64908 2.38708C8.72763 1.48853 7.45468 0.932739 6.04854 0.932739C4.6424 0.932739 3.36933 1.48853 2.44788 2.38708C1.52644 3.28564 0.956496 4.52698 0.956496 5.89819C0.956496 7.26941 1.52644 8.51086 2.44788 9.40942C3.3692 10.308 4.64228 10.8638 6.04854 10.8638C7.45468 10.8638 8.72763 10.308 9.64908 9.40942C10.5705 8.51099 11.1405 7.26953 11.1405 5.89819C11.1405 4.52698 10.5705 3.28564 9.64908 2.38708Z"
                  fill="#9CA3AF"
                />
              </svg>
            </div>
            <input
              className="flex px-5 pl-10 h-10 w-[70%] rounded-md border border-gray-300 outline-none bg-transparent py-2 text-sm placeholder:text-gray-400"
              type="email"
              placeholder="Email"
            ></input>
          </div>
          <div className="hidden lg:flex gap-x-3 justify-center items-center">
            {/* <div>
              <div>
                <FaDownload color="white" size={20} />
              </div>
            </div> */}
            <div>
              <div>
                <IoMdNotificationsOutline color="#9CA3AF" size={25} />
              </div>
            </div>
            {/* <div>
              <div>
                <BsQuestionCircle color="white" size={20} />
              </div>
            </div> */}
            <div>
              <div className="rounded-full text-white bg-textOrange border-2 border-white p-2 px-3 text-lg">
                AC
              </div>
            </div>
            <div className="">
              <Link
                href="#"
                className="inline-block text-sm py-3 leading-none border rounded text-TextBlue border-white mt-4 lg:mt-0"
              >
                <Dropdown main={"XYZ Media"} options={["Profile", "Log Out"]} />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
