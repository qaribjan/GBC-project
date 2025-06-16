import React from 'react';
import { FaTachometerAlt, FaBox, FaChartLine, FaUser, FaSignOutAlt, FaSearch } from 'react-icons/fa';

const Customer= () => {
  return (
    <div className="flex">
      <div className=" flex-1 min-h-screen bg-gray-100 ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 shadow text-center">
            <h3 className="text-sm font-medium text-gray-500">Total Customers</h3>
            <p className="text-xl font-bold">423</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow text-center">
            <h3 className="text-sm font-medium text-gray-500">New This Month</h3>
            <p className="text-xl font-bold">28</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow text-center">
            <h3 className="text-sm font-medium text-gray-500">Repeat Customers</h3>
            <p className="text-xl font-bold">156</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow text-center">
            <h3 className="text-sm font-medium text-gray-500">Avg. Orders</h3>
            <p className="text-xl font-bold">2.7</p>
          </div>
        </div>

        {/* Customers Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Orders</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total Spent</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Order</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">#CUS-1001</td>
                <td className="px-6 py-4 whitespace-nowrap">John Smith</td>
                <td className="px-6 py-4 whitespace-nowrap">john@example.com</td>
                <td className="px-6 py-4 whitespace-nowrap">5</td>
                <td className="px-6 py-4 whitespace-nowrap">$645.95</td>
                <td className="px-6 py-4 whitespace-nowrap">2023-05-12</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">#CUS-1002</td>
                <td className="px-6 py-4 whitespace-nowrap">Emily Johnson</td>
                <td className="px-6 py-4 whitespace-nowrap">emily@example.com</td>
                <td className="px-6 py-4 whitespace-nowrap">3</td>
                <td className="px-6 py-4 whitespace-nowrap">$329.97</td>
                <td className="px-6 py-4 whitespace-nowrap">2023-05-08</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">#CUS-1003</td>
                <td className="px-6 py-4 whitespace-nowrap">Michael Brown</td>
                <td className="px-6 py-4 whitespace-nowrap">michael@example.com</td>
                <td className="px-6 py-4 whitespace-nowrap">7</td>
                <td className="px-6 py-4 whitespace-nowrap">$1,245.93</td>
                <td className="px-6 py-4 whitespace-nowrap">2023-05-15</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">#CUS-1004</td>
                <td className="px-6 py-4 whitespace-nowrap">Sarah Davis</td>
                <td className="px-6 py-4 whitespace-nowrap">sarah@example.com</td>
                <td className="px-6 py-4 whitespace-nowrap">2</td>
                <td className="px-6 py-4 whitespace-nowrap">$179.98</td>
                <td className="px-6 py-4 whitespace-nowrap">2023-05-10</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">#CUS-1004</td>
                <td className="px-6 py-4 whitespace-nowrap">Sarah Davis</td>
                <td className="px-6 py-4 whitespace-nowrap">sarah@example.com</td>
                <td className="px-6 py-4 whitespace-nowrap">2</td>
                <td className="px-6 py-4 whitespace-nowrap">$179.98</td>
                <td className="px-6 py-4 whitespace-nowrap">2023-05-10</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">#CUS-1004</td>
                <td className="px-6 py-4 whitespace-nowrap">Sarah Davis</td>
                <td className="px-6 py-4 whitespace-nowrap">sarah@example.com</td>
                <td className="px-6 py-4 whitespace-nowrap">2</td>
                <td className="px-6 py-4 whitespace-nowrap">$179.98</td>
                <td className="px-6 py-4 whitespace-nowrap">2023-05-10</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-15">
          
          <div className="flex gap-2">
            <button className="px-3 py-1 border rounded">Previous</button>
            <button className="px-3 py-1 border rounded bg-blue-600 text-white">1</button>
            <button className="px-3 py-1 border rounded">2</button>
            <button className="px-3 py-1 border rounded">3</button>
            <button className="px-3 py-1 border rounded">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;