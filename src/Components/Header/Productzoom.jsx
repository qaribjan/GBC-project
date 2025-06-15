import React from 'react';

function Productzoom() {
  return (
    <div className="w-[300px] h-[330px] overflow-hidden"> {/* overflow-hidden zaruri hai */}
         <img 
          src="https://5.imimg.com/data5/SELLER/Default/2022/9/NT/RY/VA/142262681/photoshoot-with-indian-model-500x500.jpg" 
          className='w-full h-full object-cover rounded-t-md transform transition-transform duration-500 group-hover:scale-110' 
          alt="Product" 
        />
    </div>
  );
}

export default Productzoom;

