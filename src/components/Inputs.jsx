import React from 'react';
import { UilSearch, UiLocationPoint } from "@iconscout/react-unicons";

function Inputs() {
  return (
    <div className='d-flex flex-row justify-center my-6'>
      <div className='d-flex flex-row w-3/4 items-center justify-center space-x-4'></div>
      <input type="text" className='text-xl font-light p-2 w-full focus:outline-none' />
    </div>
  )
}

export default Inputs