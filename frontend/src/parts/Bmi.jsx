import { React, useState } from 'react'
import { Card, Input, Button, Typography } from "@material-tailwind/react";
// import { useNavigate } from 'react-router-dom';
function Bmi() {
    // const navigate = useNavigate();
    const [bmi, setbmi] = useState({
        weight: "",
        height: "",
    });
    const { weight, height } = bmi;

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setbmi({
            ...bmi,
            [name]: value,
        });

    };

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        let op = weight / (height * height);
        console.log(op);
        if (op > 0 && op < 18.5) {
            alert("YOU ARE UNDERWEIGHT");
            
            // e.stopPropagation();
            // return (
            //     <div className=' bg-black h-5 w-21'>
            //         <h1>askmskmasmk</h1>
            //         {/* <img src="https://cdn.shopify.com/s/files/1/1876/4703/articles/shutterstock_314285390_1600x.jpg?v=1592851467" alt="" /> */}
            //     </div>
            // )

        }
        else if (op >= 18.5 && op < 25) {
            alert("YOU ARE PERFECTLY FIT, ON THE WAY TO BECOME SAM SULEK");
            // return (
            //     <img src="https://fitnessvolt.com/wp-content/uploads/2022/09/Chris-Bumstead-front-double-biceps-750x928.jpg" alt="" />
            // )

        }
        else {
            alert("YOU ARE OVERWEIGHT");
            // return (
            //     <img src="https://thumbs.dreamstime.com/z/woman-standing-weighing-scale-indicating-overweight-close-up-woman-s-feet-weighing-scale-indicating-overweight-white-149388459.jpg" alt="" srcset="" />
            // )

        }
        setbmi({
            weight: "",
            height: "",
        })

    }


    return (
        <div className='bg-[url("https://th.bing.com/th/id/OIP.6WQa1d4pmRBjn3luEk8wYgAAAA?w=460&h=307&rs=1&pid=ImgDetMain")]  p-20 h-auto w-auto flex justify-center mx-auto'>

            <Card className=' m-9 p-4 bg-[url("https://th.bing.com/th/id/OIP.aDwpz1G2pOXKZQfZpeachwHaE8?w=768&h=512&rs=1&pid=ImgDetMain")] hover:brightness-110 bg-cover bg-no-repeat ' color="transparent" shadow={false}>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleOnSubmit}>
                    <div className="mb-1 flex flex-col gap-6">
                        <Typography variant="h6" color="black" className="-mb-3 font-bold">
                            Your Height
                        </Typography>
                        <Input
                            name="height"
                            size="lg"
                            label='Height'
                            color='white'
                            value={height}
                            type='number'
                            onChange={handleOnChange}
                            placeholder="Enter Your Height in metres"
                            className="!border-t-blue-gray-900  focus:!border-t-gray-900"

                        />
                        <Typography variant="h6" color="black" className="-mb-3 font-bold">
                            Your Weight
                        </Typography>
                        <Input
                            name="weight"
                            size="lg"
                            label='Weight'
                            color='white'
                            value={weight}
                            onChange={handleOnChange}
                            type='number'
                            placeholder="Enter Your Weight in Kg"
                            className=" !border-t-blue-gray-900 focus:!border-t-gray-900"

                        />

                    </div>

                    <Button type="submit" className="mt-6 hover:animate-pulse" fullWidth size='lg'>
                        Submit
                    </Button>

                </form>
            </Card>
        </div>
    )
}

export default Bmi