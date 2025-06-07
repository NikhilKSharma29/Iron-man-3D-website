import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Circle from './components/Circle'
import Model from './components/Model'
import Text from './components/Text'
import Ftr from './components/Ftr'
const App = () => {
  return (
    <>
      <div className='app-container'>
        <Navbar />
        <Circle />
        <Text />
        <Ftr />
      </div>
      <div className="model-container">
        <Model />
      </div>
    </>
  )
}

export default App
