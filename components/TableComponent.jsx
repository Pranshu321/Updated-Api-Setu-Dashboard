import React from 'react'
import { AiOutlineUserAdd } from 'react-icons/ai';

const TableComponent = () => {
    const add = [1, 2, 3];
    return (
        <div>
            <div className="lg:ml-0 -ml-4 relative overflow-x-auto border-2 border-solid border-gray-100 sm:rounded-lg my-10">
                <table className="w-full text-sm text-left text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-all" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                                    {/* <label htmlFor="checkbox-all" className="sr-only">checkbox</label> */}
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">

                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email Address
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Username
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                # Of Teams
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Roles
                            </th>
                            <th scope="col" className="px-6 py-3">

                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            add.map((item, idx) => (

                                <tr key={idx} className="bg-white border-b hover:bg-gray-50 ">
                                    <td className="w-4 p-4">
                                        <div className="flex items-center">
                                            <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                                            <label htmlFor="checkbox-table-1" className="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        <AiOutlineUserAdd size={25} />
                                    </th>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        Ankur Sarkar
                                    </th>
                                    <td className="px-6 py-4">
                                        ankur96
                                    </td>
                                    <td className="px-6 py-4">
                                        ankur96
                                    </td>
                                    <td className="px-6 py-4">
                                        1
                                    </td>
                                    <td className="px-6 py-4">
                                        Admin
                                    </td>
                                    <td className="px-6 py-4 flex gap-x-2">
                                        <a href="#" className="font-medium text-blue-600 hover:underline">Edit</a>
                                        <a href="#" className="font-medium text-blue-600 hover:underline">Delete</a>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TableComponent
