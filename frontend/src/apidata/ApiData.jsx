import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BackgroundBlogCard } from '../cards/BackgroundBlogCard'
import { useId } from 'react'

function ApiData({part}) {
    const [userdata, setuserdata] = useState([])
    useEffect(() => {
        axios.get(`https://api.algobook.info/v1/gym/categories/${part}`)
            .then((Response) => {
                console.log(Response);
                setuserdata(Response.data.exercises);
            })
    }, [])
    
    const id=useId();
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4'>
            {userdata.map((data) => {
                return(
                    // <div className=''>
                        <BackgroundBlogCard name={data.name} more={data.infoLink}/>
                    // {/* </div> */}
                )


            })}
        </div>
    )
}


export default ApiData