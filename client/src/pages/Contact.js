import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs';

const Contact = () => {
  return (
    <>
      <div className="flex flex-col p-4 w-full h-full">
        <div className="flex m-auto pt-3">
          <h1 className="font-bold text-4xl text-slate-900 mb-5 my-10 mx-10">
            contact us
          </h1>
        </div>

        <div className="flex justify-center items-center">
          <p className="font-medium text-slate-900 mb-5 mx-10 ">
            we focus on <span className="text-red-500">health</span> and
            betterment of society, thats the reason we are working day and
            night. with this new emerging world, people are so much greedy for
            money that they cant even think how
            <span className="text-yellow-600"> harmful chemical</span> are
            damaging our lives and leading us to death. still some people uses{" "}
            <span className="text-yellow-600">chemicals</span> to grow fruits
            and vegetables. we use proper{" "}
            <span className="text-red-500">organic</span> method to grow our
            fruits and vegetables. if you have any query regarding our services,
            you can <span className="text-blue-900">contact</span> to below
            given contacts
          </p>
        </div>
      </div>

      <div className="">
        <div className=" flex px-12">
          {/* card 1 */}
          <div className="w-full  max-w-sm p-10 mt-10 mb-10 ml-10 bg-white border border-gray-200 rounded-lg shadow-lg drop-shadow-lg dark:bg-white dark:border-gray-700">
            <div className="flex flex-col items-center pb-2">
              <div className="w-24 h-24 flex justify-center items-center rounded-full shadow-lg mb-5">
                <BsFillTelephoneFill className="text-2xl rounded-full " />
              </div>
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-gray-900">
                Tele Phone
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-600">
                (007) 095-6890
              </span>
              
            </div>
          </div>
          {/* card 2 */}
          <div className="w-full  max-w-sm p-10 mt-10 mb-10 ml-10 bg-white border border-gray-200 rounded-lg shadow-lg drop-shadow-lg dark:bg-white dark:border-gray-700">
            <div className="flex flex-col items-center pb-2">
              <div className="w-24 h-24 flex justify-center items-center rounded-full shadow-lg mb-5">
                <BsFillTelephoneFill className="text-2xl  rounded-full " />
              </div>
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-gray-900">
                Email
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-600">
                Saurashtraorganicshop@gmail.com
              </span>
              
            </div>
          </div>
          {/* card 3 */}
          <div className="w-full  max-w-sm p-10 mt-10 mb-10 ml-10 bg-white border border-gray-200 rounded-lg shadow-lg drop-shadow-lg dark:bg-white dark:border-gray-700">
            <div className="flex flex-col items-center pb-2">
              <div className="w-24 h-24 flex justify-center items-center rounded-full shadow-lg mb-5">
                <BsFillTelephoneFill className="text-2xl  rounded-full " />
              </div>
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-gray-900">
                Address
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-600">
                13420 - AV Road, Vallabh Vidyanagar, Anand
              </span>
              
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
}

export default Contact
