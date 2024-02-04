import { Card, CardHeader, CardBody, Typography} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
export function DietCard({ info ,path ,link}) {
    let navigate=useNavigate();

    return (

        <Card
            onClick={(e)=>{
                e.preventDefault();
                navigate(path);
            }}
            shadow={true}
            className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center hover:shadow-2xl opacity-90 hover:cursor-pointer hover:shadow-light-green-900 hover:opacity-100 hover:font-extrabold"
        >
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://i.pinimg.com/originals/d9/f4/e5/d9f4e583e99e6b1247090591813a3660.jpg')] bg-contain"
            >
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
            </CardHeader>
            <CardBody className="relative py-14 px-6 md:px-12">
                <Typography
                    variant="h1"
                    color="white"
                    className="mb-12 font-bold leading-[1.5]"
                >
                    {info}
                </Typography>


            </CardBody>
        </Card>
    );
}