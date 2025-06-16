import React from 'react';
import { FaTachometerAlt, FaBox, FaChartLine, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Analytics = () => {
  return (
    <div className="flex">


      {/* Main Content */}
      <div className=" flex-1 min-h-screen bg-gray-100 ">
        <h1 className="text-2xl font-bold mb-6">Sales Analytics</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 shadow text-center">
            <h3 className="text-sm font-medium text-gray-500">Total Revenue</h3>
            <p className="text-xl font-bold">$8,940</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow text-center">
            <h3 className="text-sm font-medium text-gray-500">Total Orders</h3>
            <p className="text-xl font-bold">325</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow text-center">
            <h3 className="text-sm font-medium text-gray-500">Avg. Order Value</h3>
            <p className="text-xl font-bold">$27.51</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow text-center">
            <h3 className="text-sm font-medium text-gray-500">Conversion Rate</h3>
            <p className="text-xl font-bold">3.2%</p>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Sales Trend Chart */}
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold mb-4">Sales Trend (Last 6 Months)</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={[
                  { name: 'Jan', sales: 400 },
                  { name: 'Feb', sales: 700 },
                  { name: 'Mar', sales: 1000 },
                  { name: 'Apr', sales: 800 },
                  { name: 'May', sales: 1300 },
                  { name: 'Jun', sales: 900 }
                ]}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="sales" stroke="#6366f1" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Revenue by Category */}
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold mb-4">Revenue by Category</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={[
                  { name: 'Electronics', value: 4200 },
                  { name: 'Clothing', value: 2800 },
                  { name: 'Home', value: 1900 },
                  { name: 'Other', value: 900 }
                ]}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#6366f1" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Top Products Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <h2 className="text-lg font-semibold p-4">Top Selling Products</h2>
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Sales</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Revenue</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Premium Headphones</td>
                <td className="px-6 py-4 whitespace-nowrap">Electronics</td>
                <td className="px-6 py-4 whitespace-nowrap">215</td>
                <td className="px-6 py-4 whitespace-nowrap">$4,299.85</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Wireless Keyboard</td>
                <td className="px-6 py-4 whitespace-nowrap">Electronics</td>
                <td className="px-6 py-4 whitespace-nowrap">189</td>
                <td className="px-6 py-4 whitespace-nowrap">$1,700.91</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Cotton T-Shirt</td>
                <td className="px-6 py-4 whitespace-nowrap">Clothing</td>
                <td className="px-6 py-4 whitespace-nowrap">156</td>
                <td className="px-6 py-4 whitespace-nowrap">$1,399.44</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Analytics;