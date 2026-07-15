import React from 'react'
import Leftcontent from './leftcontent'
import Rightcontent from './rightcontent'
const page1content = (props) => {
  return (
    <div className='pb-16 pt-6 flex gap-10 justify-between item-center  h-[90vh]  px-18'>
        <Leftcontent />
        <Rightcontent users ={props.users} />
        

    </div>
  )
}

export default page1content
