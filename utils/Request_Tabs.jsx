import React from "react";

const Request_Tabs = () => {
  return (
    <div>
      <div>
        <ul className="flex flex-wrap gap-x-5 text-sm font-medium text-center text-gray-500 border-b border-gray-200">
          <li className="mr-2">
            <a
              href="#"
              aria-current="page"
              className="inline-block p-2 text-NavColor border-b-2 border-textOrange rounded-t-lg active"
            >
              Response Body
            </a>
          </li>
          <li className="mr-2">
            <a
              href="#"
              className="inline-block p-2 rounded-t-lg hover:text-gray-600 hover:bg-gray-50"
            >
              Documentation
            </a>
          </li>
          <li className="mr-2">
            <a
              href="#"
              className="inline-block p-2 rounded-t-lg hover:text-gray-600 hover:bg-gray-50"
            >
              Headers
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Request_Tabs;
