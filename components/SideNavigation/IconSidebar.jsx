import React, { useState } from "react";
import Link from "next/link";
import {
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineCheckCircle,
  AiOutlineClose,
} from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { TbTransform } from "react-icons/tb";
import { SlQuestion } from "react-icons/sl";
import { SlMagnifier } from "react-icons/sl";
import { CgLogOut } from "react-icons/cg";
import { SiMoleculer } from "react-icons/si";
import { BsArrowRepeat } from "react-icons/bs";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import {
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
  MdMoney,
} from "react-icons/md";

const IconSidebar = ({ navOpen }) => {
  const [drop, setdrop] = useState(false);
  const [drop2, setdrop2] = useState(false);
  const [drop3, setdrop3] = useState(false);
  const [drop4, setdrop4] = useState(false);
  const [Subdrop, setSubdrop] = useState(false);
  const [side, setside] = useState(true);
  return (
    <div>
      <button
        className="lg:hidden inline-flex items-center p-2 mt-3 ml-3 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        onClick={() => setside(!side)}
      >
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>
      <div
        className={`${
          side ? "hidden" : null
        } min-h-screen lg:flex z-50 flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800`}
      >
        <div
          className={`absolute flex flex-col ${
            !navOpen ? "top-52" : "top-20"
          } left-0 w-16 bg-white h-full border-r`}
        >
          <div className="lg:hidden flex justify-end pr-4 pt-3">
            <span onClick={() => setside(!side)}>
              <AiOutlineClose
                className="font-semibold"
                size={20}
                color="#000"
              />
            </span>
          </div>
          <div className="overflow-y-auto overflow-x-hidden flex-grow">
            <div className="flex flex-col justify-between h-full pb-5">
              <div>
                <ul className="flex flex-col gap-y-2 py-4 space-y-1">
                  <div>
                    <Link
                      href="#"
                      className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-NavColor pr-6"
                    >
                      <span className="inline-flex justify-center items-center ml-4">
                        <AiOutlineHome size={20} />
                      </span>
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="#"
                      className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-NavColor pr-6"
                      onClick={() => setdrop(!drop)}
                    >
                      <span className="inline-flex justify-center items-center ml-4">
                        <TbTransform size={20} />
                      </span>
                    </Link>
                  </div>
                  <li onClick={() => setdrop2(!drop2)}>
                    <Link
                      href="#"
                      className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-NavColor pr-6"
                    >
                      <span className="inline-flex justify-center items-center ml-4">
                        <SiMoleculer size={20} />
                      </span>
                    </Link>
                  </li>
                  <li onClick={() => setdrop3(!drop3)}>
                    <Link
                      href="#"
                      className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-NavColor pr-6"
                    >
                      <span className="inline-flex justify-center items-center ml-4">
                        <SlMagnifier size={20} />
                      </span>
                    </Link>
                  </li>
                  <div className="border-t border-gray-300 mx-3"></div>
                  <li onClick={() => setdrop4(!drop4)}>
                    <Link
                      href="#"
                      className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-NavColor pr-6"
                    >
                      <span className="inline-flex justify-center items-center ml-4">
                        <MdMoney size={20} />
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-y-4 justify-center items-center">
                <div>
                  <CiSettings color="#4b5563" size={25} />
                </div>
                <div>
                  <SlQuestion color="#4b5563" size={20} />
                </div>
                <div>
                  <CgLogOut color="#4b5563" size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconSidebar;
