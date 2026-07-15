import React from 'react'
import Slider from './slider'

const Section2 = () => {
    const images = [  {
    img: "https://plus.unsplash.com/premium_photo-1661582120130-03b9bdc47a75?w=600&auto=format&fit=crop&q=60",
    title: "Web Development",
    description: "We create modern and scalable websites for businesses."
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1683836722608-60ab4d1b58e5?w=600&auto=format&fit=crop&q=60",
    title: "Digital Services",
    description: "Professional solutions to grow your online presence."
  },
  {
    img: "https://images.unsplash.com/photo-1762328862557-e0a36587cd3c?w=600&auto=format&fit=crop&q=60",
    title: "Data Solutions",
    description: "Powerful data management and analytics services."
  }];
  return (
    <div className='h-screen w-full bg-gray-400'>
      
    <Slider images={images} />

    </div>
  )
}

export default Section2
