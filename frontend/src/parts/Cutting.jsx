import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
function Cutting() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://gymfreaksbackend.onrender.com/getData")
      .then(Response => {
        setData(Response.data);
        console.log(Response.data);

      })
      .catch(error => {
        // console.log(error);
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <div className=" bg-[url('https://gfitnessonline.com/wp-content/uploads/2020/07/cutting-diet-cover-1024x536.png')] bg-opacity-40 bg-no-repeat bg-cover ">
      <ul className='grid grid-cols-1 md:grid-cols-2 gap-11 p-6 '>
        {data.map(item => (
          <li>
          <div key={item._id} className=' w-full align-middle  text-3xl p-4 bg-black rounded-xl bg-opacity-70 hover:bg-opacity-90  shadow-md  shadow-blue-gray-200 font-semibold '>
            <span className=' text-red-700'>{item.name}: </span>
            <a href={item.link} className='underline text-blue-700' target="_blank">CLICK ME</a>
          </div>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default Cutting