import React from "react";

const Headers_Design = () => {
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Header name
              </th>
              <th scope="col" className="px-6 py-3">
                Header value
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b  hover:bg-gray-50">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                  />
                  <label htmlFor="checkbox-table-search-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {/* Apple MacBook Pro 17" */}
                <input
                  type="text"
                  name="tet"
                  id="tet"
                  placeholder="Type Header name"
                  className="placeholder:text-gray-400 py-1 outline-none text-gray-900"
                />
              </th>
              <td className="px-5 py-4">
                <input
                  type="text"
                  name="tet"
                  id="tet"
                  placeholder="Type Header Vaue"
                  className="placeholder:text-gray-400 py-1 outline-none text-gray-900"
                />
              </td>
              <td className="px-5 py-4">
                <input
                  type="text"
                  name="tet"
                  id="tet"
                  placeholder="Type Description"
                  className="placeholder:text-gray-400 py-1 outline-none text-gray-900"
                />
              </td>
            </tr>
            {/* <tr className="bg-white border-b  hover:bg-gray-50">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-2"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                  />
                  <label htmlFor="checkbox-table-search-2" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Microsoft Surface Pro
              </th>
              <td className="px-6 py-4">White</td>
              <td className="px-6 py-4">Laptop PC</td>
            </tr>
            <tr className="bg-white border-b  hover:bg-gray-50">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-3"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                  />
                  <label htmlFor="checkbox-table-search-3" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Magic Mouse 2
              </th>
              <td className="px-6 py-4">Black</td>
              <td className="px-6 py-4">Accessories</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Headers_Design;
