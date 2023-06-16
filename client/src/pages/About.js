import React from 'react'
import logosrc from '../assest/men.jpg'

const About = () => {
  return (
    <>
      <h1 className="flex justify-center pt-3 font-bold text-4xl text-slate-900  my-2 mx-10">
        about page
      </h1>
      <div className="flex px-10">
        <div className="h-full w-[400px] p-5 bg-white  rounded-full ">
          <img src={logosrc} alt="logo" className="rounded-full" />
        </div>

        <div className="w-[700px]">
          <div className="flex flex-col h-full">
            <h1 className="font-bold text-5xl text-slate-900 mb-5 my-10 mx-10">
              We at <span className='text-blue-900'> Saurashtra</span>, deliver
              <span className="text-red-500"> Vegetables</span> and{" "}
              <span className="text-red-500">Fruits</span> directly from{" "}
              <span className="text-yellow-500">Farm</span> to Your{" "}
              <span className="text-yellow-500">Home</span>, We Believe in{" "}
              <span className="text-red-500">Freshness,Fitness and Health</span>
              . We sell <span className="text-red-500">Organic</span>, Fresh and
              Healthy Products
            </h1>
            {/* <div className="flex bg-slate-200 rounded-full w-[300px] mb-5 ml-10">
              <p className="mb-5 mr-2 ">Bike Delivery at your Doorstep</p>
              <GiDutchBike className="text-3xl" />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default About
