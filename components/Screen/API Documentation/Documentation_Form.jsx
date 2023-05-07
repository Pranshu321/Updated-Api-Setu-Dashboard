import React, { useEffect, useState } from "react";

export default function Documentation_Form({ setContent, Endpoint }) {
  useEffect(() => {
    setContent("Documentation");
  }, []);
  return (
    <>
      <div className="bg-white px-3 lg:px-5 border-2 border-gray-200 rounded-lg pb-5">
        <div className="h-[70vh]">
          <div className="space-y-3 h-[90%]">
            <div className="border-gray-900/10 pb-5">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-full">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-500"
                  >
                    Name
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm sm:max-w-full">
                      <input
                        type="text"
                        name="username"
                        id="username"
                        className="block flex-1 outline-none border-2 border-gray-100 rounded-md bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        placeholder="janesmith"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6 text-gray-500"
                  >
                    Summary
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="about"
                      name="about"
                      rows={3}
                      className="block w-full rounded-md outline-none px-4 border-2 border-gray-100 text-gray-900 shadow-sm placeholder:text-gray-400 sm:py-1.5 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-500"
            >
              Discard Changes
            </button>
            <button
              type="submit"
              className="rounded-md px-4 bg-gray-400 lg:px-10 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save & Proceed
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
