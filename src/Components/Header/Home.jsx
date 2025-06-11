import React from 'react'
import Homeslider from './Homeslider';
import Slider from './Slider';

function Home() {
  return (
    <>

      <section>
        <div className='container flex items-center'>
          <div className="part1 w-[75%]">
     <Homeslider/>
          </div>
        </div>
      </section>
      <Slider/>
   

        

     
    </>
   
  )
}

export default Home
