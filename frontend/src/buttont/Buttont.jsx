import React from 'react'
import { Button } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';
function Buttont({name,address}) {
    let navigate=useNavigate();
    return (
        <div>
            <Button onClick={()=>navigate(address)}  color='teal' className=" bg-red-900 hover:bg-red-600 rounded-full sm:text-sm lg:text-lg lg:px-12 lg:py-5 hover:shadow-red-500/40 hover:shadow-2xl" size='lg'>
            {name}
            </Button>
        </div>
    )
}

export default Buttont