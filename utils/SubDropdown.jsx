import Link from "next/link";
import React, { useState } from "react";

const SubDropdown = ({ main, options }) => {
  const [drop, setdrop] = useState(true);
  return (
    <div onMouseOver={() => setdrop(false)} className="flex flex-col">
      <div className="relative inline-block text-left">
        <div>
          <button
            type="button"
            className="text-NavColor hover:bg-gray-50 text-[16px] border-b border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:p-0 font-medium flex items-center justify-between w-full md:w-auto"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            {main}
            <svg
              className="-mr-1 ml-1 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div
            hidden={drop}
            onMouseOut={() => setdrop(true)}
            className="absolute -left-12 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
          >
            <div className="py-1" role="none">
              {options.map((item, idx) => (
                <Link
                  key={idx + 1}
                  href="#"
                  className="text-black hover:bg-[#FF9100] hover:text-white mx-2 my-2 rounded-lg block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-0"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubDropdown;
