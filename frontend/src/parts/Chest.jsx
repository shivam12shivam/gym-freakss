import React from 'react'
import ApiData from '../apidata/ApiData'

function Chest() {
  return (
    <div className="bg-[url('https://cdn.shopify.com/s/files/1/0005/5335/3267/files/chest_1_large.jpg?v=1559814921')] bg-cover bg-no-repeat bg-center p-4 pb-6">
        <ApiData part={"chest"}/>
    </div>
  )
}

export default Chest