import React from "react";

const Tabs = ({ NextPage , setContent , setNext }) => {
  return (
    <div>
      <ul className="flex flex-wrap gap-x-5 text-sm font-medium text-center text-gray-500 border-b border-gray-200">
        <li className="mr-2" onClick={()=>{setContent("Documentation");  }}>
          <a
            href="#"
            aria-current="page"
            className="inline-block p-2 text-NavColor border-b-2 border-textOrange  rounded-t-lg active"
          >
            Documentation
          </a>
        </li>
        <li className="mr-2" onClick={()=>{setContent("Authentication"); }}>
          <a
            href="#"
            className="inline-block p-2 rounded-t-lg hover:text-gray-600 hover:bg-gray-50"
          >
            Authentication
          </a>
        </li>

        {NextPage < 4 ? (
          <li className="mr-2">
            <a
              href="#"
              className="inline-block p-2 rounded-t-lg hover:text-gray-600 hover:bg-gray-50"
            >
              History
            </a>
          </li>
        ) : (
          <div className="flex gap-x-5" onClick={()=>{setContent("Headers"); setNext(6); }}>
            <li className="mr-2">
              <a
                href="#"
                className="inline-block p-2 rounded-t-lg hover:text-gray-600 hover:bg-gray-50"
              >
                Headers
              </a>
            </li>
            <li className="mr-2" onClick={()=> setContent("Requests") }>
              <a
                href="#"
                className="inline-block p-2 rounded-t-lg hover:text-gray-600 hover:bg-gray-50"
              >
                Request Body
              </a>
            </li>
          </div>
        )}
        <li className="mr-2">
          <a
            href="#"
            className="inline-block p-2 rounded-t-lg hover:text-gray-600 hover:bg-gray-50"
          >
            Options
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Tabs;
