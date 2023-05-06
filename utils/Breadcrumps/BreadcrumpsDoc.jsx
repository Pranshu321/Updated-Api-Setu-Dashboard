import React from "react";
import Breadcrumps from "./Breadcrumps";

const BreadcrumpsDoc = () => {
  return (
    <div>
      <div className="rounded-lg bg-transparent pb-5">
        <ul className="flex items-center">
          <li className="flex items-center">
            <a
              href="javascript:void(0)"
              className="hover:text-primary text-base font-semibold text-NavColor"
            >
              My New App
            </a>
            <span className="px-3">
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.455 8.96004L4.715 5.70004C5.1 5.31504 5.1 4.68504 4.715 4.30004L1.455 1.04004"
                  stroke="#374151"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </li>
          <li className="flex items-center">
            <a
              href="javascript:void(0)"
              className="text-gray-400 hover:text-primary text-base font-semibold"
            >
              New Collection
            </a>
            <span className="px-3">
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.455 8.96004L4.715 5.70004C5.1 5.31504 5.1 4.68504 4.715 4.30004L1.455 1.04004"
                  stroke="#374151"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </li>
          <li className="text-gray-400 text-base font-semibold">
            Authentication
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BreadcrumpsDoc;
