import React from 'react'
import ApiData from '../apidata/ApiData'

function Triceps() {
  return (
    <div className="bg-[url('https://images.pexels.com/photos/4761779/pexels-photo-4761779.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover bg-center bg-no-repeat p-4 pb-6">
        <ApiData part={"tricep"}/>
    </div>
  )
}

export default Triceps