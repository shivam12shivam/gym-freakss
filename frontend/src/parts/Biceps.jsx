import React from 'react'
import ApiData from '../apidata/ApiData'

function Biceps() {
  return (
    <div className="bg-[url('https://images.pexels.com/photos/13679977/pexels-photo-13679977.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center bg-no-repeat  p-4 pb-6">
        <ApiData part={"bicep"}/>
    </div>
  )
}

export default Biceps