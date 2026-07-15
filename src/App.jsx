import React from 'react'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'
import Footer from './components/footer/footer'
const App = () => {

  const users = [
    {img :'https://plus.unsplash.com/premium_photo-1661475766070-6d7bd1850267?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro :'',
      tag:'Satisfied'},

    {img :'https://images.unsplash.com/photo-1648412868424-9bee5023a257?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro :'',
      tag:'underserved'},

    {img :'https://plus.unsplash.com/premium_photo-1771840857245-b80a57877839?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro :'',
      tag:'underbanked'},

      {img :'https://plus.unsplash.com/premium_photo-1661754641511-e6918377c24b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwOHx8fGVufDB8fHx8fA%3D%3D',
      intro :'',
      tag:'underWork'}
  ]
  return (
    <div>
    <Section1 users = {users}/>
    <Section2 />
    <Footer />

    </div>
  )
}

export default App
