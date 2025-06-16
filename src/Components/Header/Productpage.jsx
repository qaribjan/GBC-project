import React from 'react';
import { FaBox, FaSearch, FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProductsPage = () => {
  return (
    <div className="flex">
      

      {/* Main Content */}
      <div className=" flex-1 min-h-screen bg-gray-100 ">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Product Management</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2">
            {/* <FaPlus /> <Link  to={"selleradmin/addproduct"}>Add Product</Link>  */}
            <Link to="/selleradmin/addproduct">Add Product</Link>

          </button>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search products..." 
                className="pl-10 pr-4 py-2 w-full border rounded-lg"
              />
            </div>
            <select className="border rounded-lg px-4 py-2">
              <option>All Categories</option>
              <option>Electronics</option>
              <option>Clothing</option>
              <option>Home</option>
            </select>
          </div>
        </div>

        {/* Products Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs  text-gray-500  font-[600] uppercase">ID</th>
                <th className="px-6 py-3 text-left text-xs  text-gray-500 font-[500] uppercase">Product Name</th>
                <th className="px-6 py-3 text-left text-xs  text-gray-500 font-[500] uppercase">Price</th>
                <th className="px-6 py-3 text-left text-xs  text-gray-500 font-[500] uppercase">Stock</th>
                <th className="px-6 py-3 text-left text-xs  text-gray-500 font-[500] uppercase">Category</th>
                <th className="px-6 py-3 text-left text-xs  text-gray-500  font-[500] uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {/* Product 1 */}
              <tr>
                <td className="px-6 py-4 whitespace-nowrap  text-[14px]">1</td>
                <td className="px-6 py-4 whitespace-nowrap text-[14px]">Premium Headphones</td>
                <td className="px-6 py-4 whitespace-nowrap text-[14px]">$199.99</td>
                <td className="px-6 py-4 whitespace-nowrap text-[14px]">45</td>
                <td className="px-6 py-4 whitespace-nowrap text-[14px]">Electronics</td>
                <td className="px-6 py-4 whitespace-nowrap text-[14px] flex gap-2">
                  <button className="text-blue-600 hover:text-blue-800">
                    <FaEdit />
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    <FaTrash />
                  </button>
                </td>
              </tr>
              
              {/* Product 2 */}
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-[14px] ">2</td>
                <td className="px-6 py-4 whitespace-nowrap text-[14px]">Wireless Keyboard</td>
                <td className="px-6 py-4 whitespace-nowrap text-[14px]">$89.99</td>
                <td className="px-6 py-4 whitespace-nowrap text-[14px]">32</td>
                <td className="px-6 py-4 whitespace-nowrap text-[14px]">Electronics</td>
                <td className="px-6 py-4 whitespace-nowrap text-[14px] flex gap-2">
                  <button className="text-blue-600 hover:text-blue-800">
                    <FaEdit />
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    <FaTrash />
                  </button>
                </td>
              </tr>
              
              {/* Product 3 */}
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-[14px] ">3</td>
                <td className="px-6 py-4 whitespace-nowrap text-[14px]">Smart Watch</td>
                <td className="px-6 py-4 whitespace-nowrap text-[14px]">$249.99</td>
                <td className="px-6 py-4 whitespace-nowrap text-[14px]">18</td>
                <td className="px-6 py-4 whitespace-nowrap text-[14px]">Electronics</td>
                <td className="px-6 py-4 whitespace-nowrap text-[14px] flex gap-2">
                  <button className="text-blue-600 hover:text-blue-800">
                    <FaEdit />
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    <FaTrash />
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-[14px] ">3</td>
                <td className="px-6 py-4 whitespace-nowrap text-[14px]">Smart Watch</td>
                <td className="px-6 py-4 whitespace-nowrap text-[14px]">$249.99</td>
                <td className="px-6 py-4 whitespace-nowrap text-[14px]">18</td>
                <td className="px-6 py-4 whitespace-nowrap text-[14px]">Electronics</td>
                <td className="px-6 py-4 whitespace-nowrap text-[14px] flex gap-2">
                  <button className="text-blue-600 hover:text-blue-800">
                    <FaEdit />
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    <FaTrash />
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-[14px] ">3</td>
                <td className="px-6 py-4 whitespace-nowrap text-[14px]">Smart Watch</td>
                <td className="px-6 py-4 whitespace-nowrap text-[14px]">$249.99</td>
                <td className="px-6 py-4 whitespace-nowrap text-[14px]">18</td>
                <td className="px-6 py-4 whitespace-nowrap text-[14px]">Electronics</td>
                <td className="px-6 py-4 whitespace-nowrap text-[14px] flex gap-2">
                  <button className="text-blue-600 hover:text-blue-800">
                    <FaEdit />
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-10">
          {/* <div>Showing 1 to 3 of 5 products</div> */}
          <div className="flex gap-6 ">
            <button className="px-3 py-1 border rounded">Previous</button>
            <button className="px-3 py-1 border rounded bg-blue-600 text-white">1</button>
            <button className="px-3 py-1 border rounded">2</button>
            <button className="px-3 py-1 border rounded">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;