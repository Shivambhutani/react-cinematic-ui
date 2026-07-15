import React from 'react'
import Navbar from './navbar'
import Page1content from './page1content'

const section1 = (props) => {
  console.log(props)
  return (
    <div className='main-h-screen w-full bg--800'>
   <Navbar />
<Page1content users={props.users} />
    </div>
  )
}

export default section1
