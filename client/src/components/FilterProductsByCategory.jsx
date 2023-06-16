import React from 'react'
import {CiForkAndKnife} from 'react-icons/ci'

const FilterProductsByCategory = ({category,onClick,isActive}) => {
  return (
    <>
      <div onClick={onClick}>
        <div className={`text-4xl p-7 bg-pink-800 rounded-full cursor-pointer `}>
          <CiForkAndKnife />
        </div>
        <p className='text-center font-medium my-1 capitalize '>{category}</p>
      </div>
    </>
  );
}

export default FilterProductsByCategory
