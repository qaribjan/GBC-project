import React from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { FaBox, FaChartLine, FaUser, FaSignOutAlt } from 'react-icons/fa';

const Sidebar2 = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 h-screen bg-white shadow-lg p-5 fixed">
        <h2 className="text-xl font-bold mb-10 text-blue-600">Seller Panel</h2>
        <ul className="space-y-4 text-gray-700">
          <li className={`flex items-center gap-2 p-2 rounded cursor-pointer ${isActive('/selleradmin/products') ? 'bg-blue-100 text-blue-600' : ''}`}>
            <Link to="/selleradmin/products" className="flex items-center gap-2"><FaBox /> Products</Link>
          </li>
          <li className={`flex items-center gap-2 p-2 rounded cursor-pointer ${isActive('/selleradmin/analytics') ? 'bg-blue-100 text-blue-600' : ''}`}>
            <Link to="/selleradmin/analytics" className="flex items-center gap-2"><FaChartLine /> Analytics</Link>
          </li>
          <li className={`flex items-center gap-2 p-2 rounded cursor-pointer ${isActive('/selleradmin/customers') ? 'bg-blue-100 text-blue-600' : ''}`}>
            <Link to="/selleradmin/customers" className="flex items-center gap-2"><FaUser /> Customers</Link>
          </li>
          <li className="flex items-center gap-2 cursor-pointer text-red-500"><FaSignOutAlt /> Logout</li>
        </ul>
      </div>

      {/* Page Content */}
      <div className="ml-64 w-full p-4 bg-gray-100 min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar2;
