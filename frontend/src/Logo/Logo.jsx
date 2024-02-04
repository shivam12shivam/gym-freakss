import React from 'react'
import logo from '../images/logo.png'

function Logo() {
  return (
    <div className=' -rotate-12 rounded-full' >
      <img className='h-7' src={logo} alt="Gym-Freaks" />
    </div>
  )
}

export default Logo