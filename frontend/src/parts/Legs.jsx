import React from 'react'
import ApiData from '../apidata/ApiData'

function Legs() {
  return (
    <div className="bg-[url('https://images.pexels.com/photos/4162485/pexels-photo-4162485.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover bg-center bg-no-repeat p-4 pb-6">
        <ApiData part={"legs"}/>
    </div>
  )
}

export default Legs