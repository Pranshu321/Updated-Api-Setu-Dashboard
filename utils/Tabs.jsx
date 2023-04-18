import React from "react";

const Tabs = () => {
  return (
    <div>
      <ul className="flex flex-wrap gap-x-5 text-sm font-medium text-center text-gray-500 border-b border-gray-200">
        <li className="mr-2">
          <a
            href="#"
            aria-current="page"
            className="inline-block p-4 text-NavColor border-b-2 border-textOrange  rounded-t-lg active"
          >
            Documentation
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50"
          >
            Authentication
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50"
          >
            History
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50"
          >
            Options
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Tabs;
