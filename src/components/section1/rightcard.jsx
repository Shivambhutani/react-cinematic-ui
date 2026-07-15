import React from 'react'
import {MoveRight} from "lucide-react"
import Rightcardcontent from './Rightcardcontent'

const rightcard = (props) => {
  return (
    <div className='h-full overflow-hidden relative shrink-0 w-80 bg-red-500 rounded-4xl cursor-pointer transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl'>
      <img className='h-full w-full object-cover' src={props.img} alt="" />
    <Rightcardcontent id ={props.id}tag={props.tag}/>

    </div>
  )
}

export default rightcard
