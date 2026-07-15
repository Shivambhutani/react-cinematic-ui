import React from 'react'
import Rightcard from './rightcard'


const rightcontent = (props) => {

  return (
    <div id='right' className='h-full flex overflow-x-auto flex-nowrap gap-10 p-4 w-2/3 '>
       {props.users.map(function(elem,idx){
        return <Rightcard key={idx} id={idx} img={elem.img}  tag={elem.tag}/>
       })}
       
    </div>
  )
}

export default rightcontent
