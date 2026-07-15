import React from 'react'
import Aroowtext from './Aroowtext'
import Herotext from './herotext'
const leftcontent = () => {
  return (
    <div className='h-full w-1/3 flex flex-col justify-between  '>
      
      <Herotext />
      <Aroowtext />
    </div>
  )
}

export default leftcontent
