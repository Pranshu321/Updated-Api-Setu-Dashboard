import React from 'react'

const check = () => {
  return (
    <div className="w-full bg-white min-h-screen flex flex-col gap-y-2 justify-center items-center">
      <div className="flex items-center justify-center w-1/2">
        <label className="flex flex-col items-center justify-center w-full h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white  hover:bg-gray-100">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              aria-hidden="true"
              className="w-10 h-10 mb-3 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
            <p className="mb-2 text-sm text-gray-500">
              <span>
                Drag and drop files or{" "}
                <span className="font-semibold">browse</span>
              </span>
            </p>
            <p className="text-xs text-gray-500">
              JSON & YAML files (max. 1 MB)
            </p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>
      <div className="flex items-center my-2 justify-between w-1/2">
        <div className="text-sm text-gray-500 ml-16">File Name</div>
        <div className="flex items-center gap-x-10 mr-20">
          <div className="text-sm text-gray-500">Status</div>
          <div className="text-sm text-gray-500">Linting Report</div>
        </div>
      </div>
      <div className="flex flex-col w-1/2 gap-y-3">
        <div className="flex justify-between border-2 border-b-[4px] border-b-textOrange border-gray-200 rounded-md w-full p-3">
          <div className="text-NavColor">cowin_protected_apis.json</div>
          <div className="flex gap-x-20 items-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.11398 9.88634L9.88732 6.11301M9.88732 9.88634L6.11398 6.11301M6.00065 14.6663H10.0007C13.334 14.6663 14.6673 13.333 14.6673 9.99967V5.99967C14.6673 2.66634 13.334 1.33301 10.0007 1.33301H6.00065C2.66732 1.33301 1.33398 2.66634 1.33398 5.99967V9.99967C1.33398 13.333 2.66732 14.6663 6.00065 14.6663Z"
                stroke="#9CA3AF"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-between border-2  border-gray-200 rounded-md w-full p-3">
          <div className="text-NavColor">cowin_protected_apis.json</div>
          <div className="flex gap-x-20 items-center">
            <div>
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
            </div>
            <div className="text-NavColor underline underline-offset-2">
              View
            </div>
            <div>
              <svg
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 3.98634C10.78 3.76634 8.54667 3.65301 6.32 3.65301C5 3.65301 3.68 3.71967 2.36 3.85301L1 3.98634M4.66667 3.31301L4.81333 2.43967C4.92 1.80634 5 1.33301 6.12667 1.33301H7.87333C9 1.33301 9.08667 1.83301 9.18667 2.44634L9.33333 3.31301M11.5667 6.09301L11.1333 12.8063C11.06 13.853 11 14.6663 9.14 14.6663H4.86C3 14.6663 2.94 13.853 2.86667 12.8063L2.43333 6.09301M5.88667 10.9997H8.10667M5.33333 8.33301H8.66667"
                  stroke="#9CA3AF"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex justify-between border-2  border-gray-200 rounded-md w-full p-3">
          <div className="text-NavColor">cowin_protected_apis.json</div>
          <div className="flex gap-x-20 items-center">
            <div>
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
            </div>
            <div className="text-NavColor underline underline-offset-2">
              View
            </div>
            <div>
              <svg
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 3.98634C10.78 3.76634 8.54667 3.65301 6.32 3.65301C5 3.65301 3.68 3.71967 2.36 3.85301L1 3.98634M4.66667 3.31301L4.81333 2.43967C4.92 1.80634 5 1.33301 6.12667 1.33301H7.87333C9 1.33301 9.08667 1.83301 9.18667 2.44634L9.33333 3.31301M11.5667 6.09301L11.1333 12.8063C11.06 13.853 11 14.6663 9.14 14.6663H4.86C3 14.6663 2.94 13.853 2.86667 12.8063L2.43333 6.09301M5.88667 10.9997H8.10667M5.33333 8.33301H8.66667"
                  stroke="#9CA3AF"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default check
