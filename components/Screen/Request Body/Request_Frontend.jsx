import React, { useEffect } from "react";
import Request_Tabs from "../../../utils/Request_Tabs";

const Request_Frontend = ({ setContent }) => {
  useEffect(() => {
    setContent("Requests");
  }, []);
  return (
    <div>
      <div className="bg-white px-3 lg:px-5 border-2 border-gray-200 rounded-lg pb-5">
        <div className="h-full">
          <div className="space-y-3 h-[90%]">
            <div className="w-full">
              <div className="flex flex-col gap-y-4 p-2 pt-5">
                <div className="flex gap-x-5">
                  <div className="flex gap-x-2 items-center">
                    <div className="text-sm text-gray-500">Raw</div>
                    <div>
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="gray"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex gap-x-1 items-center">
                    <div className="text-sm text-gray-500">Json</div>
                    <div>
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="gray"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <textarea
                    name="summary"
                    id="summary"
                    cols="20"
                    rows="10"
                    className="w-[18rem] mr-3 lg:mr-0 lg:w-full outline-none border-2 p-3 rounded-md border-gray-300"
                  ></textarea>
                </div>
              </div>
              <div className="flex flex-col gap-y-4 p-2 pt-5">
                <div>
                  <Request_Tabs />
                </div>
                <div>
                  <div className="flex justify-between">
                    <div className="flex gap-x-4">
                      <div className="flex gap-x-2 items-center">
                        <div className="text-sm text-gray-500">Pretty</div>
                        <div>
                          <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="gray"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="flex gap-x-1 items-center">
                        <div className="text-sm text-gray-500">Json</div>
                        <div>
                          <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="gray"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-x-2">
                      <div>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.75 0.25H1.75C0.9175 0.25 0.25 0.925 0.25 1.75V12.25C0.25 13.075 0.9175 13.75 1.75 13.75H12.25C13.075 13.75 13.75 13.075 13.75 12.25V3.25L10.75 0.25ZM7 12.25C5.755 12.25 4.75 11.245 4.75 10C4.75 8.755 5.755 7.75 7 7.75C8.245 7.75 9.25 8.755 9.25 10C9.25 11.245 8.245 12.25 7 12.25ZM9.25 4.75H1.75V1.75H9.25V4.75Z"
                            fill="#9CA3AF"
                          />
                        </svg>
                      </div>
                      <div>
                        <svg
                          width="12"
                          height="14"
                          viewBox="0 0 12 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.5 12.25C1.5 13.075 2.175 13.75 3 13.75H9C9.825 13.75 10.5 13.075 10.5 12.25V3.25H1.5V12.25ZM11.25 1H8.625L7.875 0.25H4.125L3.375 1H0.75V2.5H11.25V1Z"
                            fill="#9CA3AF"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <textarea
                    name="summary"
                    id="summary"
                    cols="20"
                    rows="10"
                    className="w-[18rem] lg:w-full outline-none border-2 p-3 mt-2 rounded-md border-gray-300"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between mx-3 items-center">
            <div className="text-xs">
              Your API is ready, do you want to publish it right now?
            </div>
            <div className="flex gap-x-2">
              <div class="bg-transparent text-NavColor font-semibold py-2 px-6 cursor-pointer border border-NavColor  rounded">
                No
              </div>
              <div class="bg-NavColor text-white cursor-pointer font-bold py-2 px-6 rounded">
                Yes
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Request_Frontend;
