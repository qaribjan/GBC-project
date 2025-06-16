import React from 'react'
import { FaTachometerAlt, FaBox, FaChartLine, FaUser, FaSignOutAlt, FaArrowLeft } from 'react-icons/fa';
function Addproduct() {
  return (
    <div>
         <div className=" flex-1 min-h-screen bg-gray-100 ">
        <div className="flex items-center mb-6">
          <button className="mr-4 text-blue-600">
            <FaArrowLeft size={20} />
          </button>
          <h1 className="text-2xl font-bold">Add New Product</h1>
        </div>

        {/* Product Form */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Product Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter product name"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Description</label>
                <textarea 
                  className="w-full px-4 py-2 border rounded-lg"
                  rows="4"
                  placeholder="Enter product description"
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Price ($)</label>
                <input 
                  type="number" 
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="0.00"
                />
              </div>
            </div>

            {/* Right Column */}
            <div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Category</label>
                <select className="w-full px-4 py-2 border rounded-lg">
                  <option>Select category</option>
                  <option>Electronics</option>
                  <option>Clothing</option>
                  <option>Home & Kitchen</option>
                  <option>Beauty</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Stock Quantity</label>
                <input 
                  type="number" 
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="0"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Product Images</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                  <p className="text-gray-500 mb-2">Drag & drop images here or click to browse</p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                    Upload Images
                  </button>
                </div>
                <div className="flex mt-2">
                  <div className="w-16 h-16 bg-gray-200 rounded mr-2"></div>
                  <div className="w-16 h-16 bg-gray-200 rounded mr-2"></div>
                  <div className="w-16 h-16 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex justify-end mt-6">
            <button className="px-6 py-2 border rounded-lg mr-4">Cancel</button>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg">Save Product</button>
          </div>
        </div>

        {/* Product Preview */}
        <div className="bg-white rounded-lg shadow p-6 mt-6">
          <h2 className="text-xl font-semibold mb-4">Product Preview</h2>
          <div className="flex">
            <div className="w-48 h-48 bg-gray-200 rounded-lg mr-6"></div>
            <div>
              <h3 className="text-lg font-medium">Product Name</h3>
              <p className="text-gray-600 mb-2">$0.00</p>
              <p className="text-gray-500">Category: Not selected</p>
              <p className="text-gray-500">Stock: 0 available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Addproduct
