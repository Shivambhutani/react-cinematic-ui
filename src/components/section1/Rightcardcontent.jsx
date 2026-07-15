import React from 'react'
import { MoveRight } from "lucide-react"
function Rightcardcontent(props) {
  return (
    <div>
      <div className='absolute p-8 flex flex-col justify-between top-0 left-0 h-full w-full'>
<h2 className='bg-white rounded-full h-14 w-14 font-semibold flex  justify-center items-center text-2xl'>{props.id+1}</h2>
<div>
  <p className='font-bold text-white mb-10 leading-relaxed '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga asperiores voluptates corrupti laborum quod? Facere?</p>


<div className='justify-between flex'>
  <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full '>{props.tag}</button>
  <button className='bg-blue-600 text-white font-medium px-3 py-2 rounded-full '><MoveRight /></button>
</div>
</div>
    </div>
    </div>
  )
}

export default Rightcardcontent
