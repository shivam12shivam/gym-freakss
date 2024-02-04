import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

export function BackgroundBlogCard({ name, more }) {
    return (

        <Card className="mt-7 h-60 w-auto bg-gradient-to-r from-indigo-200 to-indigo-700 hover:brightness-105 ">
            {/* <div className=" grid grid-rows-2 "> */}
            <CardBody>

                <Typography variant="h4" color="white" className="mb-2">
                    {name}
                </Typography>
            </CardBody>
            <a href={more} target="_blank">
                {/* <div> */}
                <CardFooter className=" flex justify-center">
                    <Button className=" hover:text-lg hover:bg-transparent hover:shadow-md hover:shadow-green-600">Read More</Button>
                </CardFooter>
                {/* </div> */}
            </a>

            {/* </div> */}
        </Card>
    );
}