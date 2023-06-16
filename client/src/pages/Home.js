import React from 'react'
import CarouselCard from '../components/Carousel';
import { useNavigate } from 'react-router-dom';
import {GiFruitBowl} from 'react-icons/gi'


const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      {/* <h1>home page</h1> */}
      <CarouselCard />

      {/* why us box */}
      <div className=" p-1">
        <h2 className="font-bold text-4xl text-slate-900 mb-5 my-10 mx-10">
          why buy from us?
        </h2>

        <div className=" flex">
          {/* card 1 */}
          <div className="w-full  max-w-sm p-10 mt-10 mb-10 ml-10 bg-white border border-gray-200 rounded-lg shadow-lg drop-shadow-lg dark:bg-white dark:border-gray-700">
            <div className="flex flex-col items-center pb-6">
              <div className="w-24 h-24 flex justify-center rounded-full shadow-lg">
                <GiFruitBowl className="w-20 h-20 rounded-full " />
              </div>
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-gray-900">
                Fresh Fruits & vegetables
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-600">
                we use organic farming and sell fresh products only
              </span>
              <div className="flex mt-2 space-x-3 md:mt-2"></div>
            </div>
          </div>
          {/* card 2 */}
          <div className="w-full  max-w-sm p-10 mt-10 mb-10 ml-10 bg-white border border-gray-200 rounded-lg shadow-lg drop-shadow-lg dark:bg-white dark:border-gray-700">
            <div className="flex flex-col items-center pb-6">
              <div className="w-24 h-24 flex justify-center rounded-full shadow-lg">
                <GiFruitBowl className="w-20 h-20 rounded-full " />
              </div>
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-gray-900">
                Chemical Less
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-600">
                we use traditional farming techniques, without use of chemicals
              </span>
              <div className="flex mt-2 space-x-3 md:mt-2"></div>
            </div>
          </div>
          {/* card 3 */}
          <div className="w-full  max-w-sm p-10 mt-10 mb-10 ml-10 bg-white border border-gray-200 rounded-lg shadow-lg drop-shadow-lg dark:bg-white dark:border-gray-700">
            <div className="flex flex-col items-center pb-6">
              <div className="w-24 h-24 flex justify-center rounded-full shadow-lg">
                <GiFruitBowl className="w-20 h-20 rounded-full " />
              </div>
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-gray-900">
                Fast Delivery
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-600">
                we deliver fruits and vegetables without any delivery charge within radius of 5KM
              </span>
              <div className="flex mt-2 space-x-3 md:mt-2"></div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>

      <div className="p-1 mb-10">
        <h2 className="font-bold text-4xl text-slate-900 mb-5 my-10 mx-10">
          How we grow our vegetables and fruits?
        </h2>

        <div className=" flex">
          {/* card 1 */}
          <div className="w-full  max-w-sm p-10 mt-10 mb-10 ml-10 bg-white border border-gray-200 rounded-lg shadow-lg drop-shadow-lg dark:bg-white dark:border-gray-700">
            <div className="flex flex-col items-center pb-2">
              <div className="w-24 h-24 flex justify-center rounded-full shadow-lg">
                <GiFruitBowl className="w-20 h-20 rounded-full " />
              </div>
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-gray-900">
                Traditional Farming 
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-600">
                We use traditional farming techniques to grow our fruits and vegetables
              </span>
              <div className="flex mt-2 space-x-3 md:mt-2"></div>
            </div>
          </div>
          {/* card 2 */}
          <div className="w-full  max-w-sm p-10 mt-10 mb-10 ml-10 bg-white border border-gray-200 rounded-lg shadow-lg drop-shadow-lg dark:bg-white dark:border-gray-700">
            <div className="flex flex-col items-center pb-2">
              <div className="w-24 h-24 flex justify-center rounded-full shadow-lg">
                <GiFruitBowl className="w-20 h-20 rounded-full " />
              </div>
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-gray-900">
                Organic Fertilizers
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-600">
                we use organic waste and animal waste to make our organic fertilizers 
              </span>
              <div className="flex mt-2 space-x-3 md:mt-2"></div>
            </div>
          </div>
          {/* card 3 */}
          <div className="w-full  max-w-sm p-10 mt-10 mb-10 ml-10 bg-white border border-gray-200 rounded-lg shadow-lg drop-shadow-lg dark:bg-white dark:border-gray-700">
            <div className="flex flex-col items-center pb-2">
              <div className="w-24 h-24 flex justify-center rounded-full shadow-lg">
                <GiFruitBowl className="w-20 h-20 rounded-full " />
              </div>
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-gray-900">
                No Chemical
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-600">
                Instead of spraying chemicals on plants, we use gardening techniques and plant variety of plans to control pest's.
              </span>
              <div className="flex mt-2 space-x-3 md:mt-2"></div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>

      <div className=" p-1 mt-10 mb-10">
        <h2 className="font-bold text-4xl text-slate-900 mb-1 my-1 mx-10">
          what we sell?
        </h2>

        {/* --------------------------------------------------------------------------- */}

        <div className=" flex">
          {/* card 1 */}
          <div className="w-full  max-w-sm p-6 mt-10 mb-10 ml-10 bg-white border border-gray-200 rounded-lg shadow-lg drop-shadow-lg dark:bg-white dark:border-gray-700">
            <div className="flex flex-col items-center ">
              <div className="w-24 h-24 flex justify-center rounded-full shadow-lg">
                <GiFruitBowl className="w-20 h-20 rounded-full " />
              </div>
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-gray-900">
                Fresh Vegetables
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-600">
                we sell fresh vegetables, grown with traditional organic farming techniques.
              </span>
              <div className="flex mt-2 space-x-3 md:mt-2"></div>
            </div>
          </div>

          {/* card 2 */}
          <div className="w-full  max-w-sm p-6 mt-10 mb-10 ml-10 bg-white border border-gray-200 rounded-lg shadow-lg drop-shadow-lg dark:bg-white dark:border-gray-700">
            <div className="flex flex-col items-center ">
              <div className="w-24 h-24 flex justify-center rounded-full shadow-lg">
                <GiFruitBowl className="w-20 h-20 rounded-full " />
              </div>
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-gray-900">
                Fresh Fruits
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-600">
                we sell fresh fruits, grown with traditional organic farming techniques.
              </span>
              <div className="flex mt-2 space-x-3 md:mt-2"></div>
            </div>
          </div>

          {/* card 3 */}
          <div className="w-full  max-w-sm p-6 mt-10 mb-10 ml-10 bg-white border border-gray-200 rounded-lg shadow-lg drop-shadow-lg dark:bg-white dark:border-gray-700">
            <div className="flex flex-col items-center ">
              <div className="w-24 h-24 flex justify-center rounded-full shadow-lg">
                <GiFruitBowl className="w-20 h-20 rounded-full " />
              </div>
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-gray-900">
                Fresh Fruit Juices
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-600">
                We use our own grown fresh fruits, and make its juice with man power, hand grinded fruit juice, fresh and delicious
              </span>
              <div className="flex mt-2 space-x-3 md:mt-2"></div>
            </div>
          </div>

          {/* card 4 */}
          <div className="w-full  max-w-sm p-6 mt-10 mb-10 ml-10 bg-white border border-gray-200 rounded-lg shadow-lg drop-shadow-lg dark:bg-white dark:border-gray-700">
            <div className="flex flex-col items-center ">
              <div className="w-24 h-24 flex justify-center rounded-full shadow-lg">
                <GiFruitBowl className="w-20 h-20 rounded-full " />
              </div>
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-gray-900">
                Icecreams
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-600">
                we make cream from fresh milk, use fresh fruit pulp for icecream flavours and organic cocoa powder for thick shakes
              </span>
              <div className="flex mt-2 space-x-3 md:mt-2"></div>
            </div>
          </div>
        </div>
        {/*  */}

        <button
          className=" bg-blue-600 text-white p-2 rounded hover:bg-blue-900 ml-10"
          onClick={() => navigate("/all-products")}
        >
          Check our products
        </button>
      </div>
    </>
  );
}

export default Home
