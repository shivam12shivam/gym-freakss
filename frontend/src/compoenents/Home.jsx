import { Carousel } from "@material-tailwind/react";
import Buttont from '../buttont/Buttont';
import { useEffect, React } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { motion } from "framer-motion"
import { useSelector } from "react-redux";

function Home() {
  const authStatus = useSelector(state => state.auth.status)
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  useEffect(() => {
    const verifyCookie = async () => {
      if(authStatus===false){
        navigate("/login");
      }
    };
    verifyCookie();
    // navigate("/");
  }, [cookies.token, navigate, removeCookie]);

  return (
    <div className=' bg-gradient-to-r from-blue-900 to-indigo-900'>

      <div>
        <Carousel transition={{ duration: 1 }} autoplay={true} loop={true}
          className="rounded-xl overflow-hidden h-96"
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                    }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          <img
            src="https://www.wewishes.com/wp-content/uploads/2020/07/Gym-Quotes-1.jpg"
            alt="image 1"
            className="object-fill h-full w-full rounded-md"
          />
          <img
            src="https://staticg.sportskeeda.com/editor/2022/10/31dcd-16652377189175-1920.jpg"
            alt="image 2"
            className="object-fill h-full w-full rounded-md"
          />
          <img
            src="https://www.wewishes.com/wp-content/uploads/2020/07/Gym-Quotes-9.jpg"
            alt="image 3"
            className="object-fill h-full w-full rounded-md"
          />
        </Carousel>
      </div>

      <div className='text-5xl w-auto m-20 my-24 m p-5 text-white shadow-black shadow-lg bg-indigo-800' style={{ fontFamily: "fantasy" }}>
        <h1>Ready to conquer? Pick a part. Let's crush those fitness goals!</h1>
      </div>

      <div className='grid grid-cols-3 gap-4 gap-y-20 overflow-hidden m-4'>

        <div className="bg-[url('https://cdn.shopify.com/s/files/1/1633/7705/files/chest_workout_routines_480x480.jpg?v=1682419018')] w-full h-[250px] bg-center bg-no-repeat bg-cover mb-8 md:bg-cover md:h-[250px] flex items-center justify-center rounded-3xl opacity-80 hover:opacity-100 hover:shadow-white hover:shadow-md">
          <Buttont name={"CHEST"} address={"/chest"} />
        </div>


        <div className="bg-[url('https://th.bing.com/th/id/R.7b250cc51effcb6b59884a180e2df1aa?rik=zGWwZmqpF3xwhg&riu=http%3a%2f%2fwww.bodybuilding.com%2fimages%2f2016%2faugust%2f5-best-shoulder-workouts-for-mass-an-intermediate-guide-2.jpg&ehk=Z5jrf3xXB65B9e%2fClbEFvHGlVocZhJ3dbKY14j%2fft%2fk%3d&risl=&pid=ImgRaw&r=0')] w-full h-[250px] sm:bg-center bg-center-bottom bg-no-repeat bg-cover mb-8 md:bg-cover md:h-[250px] flex items-center justify-center rounded-3xl opacity-80 hover:opacity-100 hover:shadow-white hover:shadow-md">
          <Buttont name={"SHOULDERS"} address={"/shoulders"} />
        </div>

        <div className="bg-[url('https://th.bing.com/th/id/R.f753b98b39813c68acf563c4c8cbeb21?rik=IfXs%2bjF6asVHwg&riu=http%3a%2f%2fwww.blogmedicine.org%2fwp-content%2fuploads%2f2017%2f12%2fUntitled-2.jpg&ehk=Nqjvlf6SQk1LXIVYbTubla2exKmqc92WoWm59H1ZDd8%3d&risl=&pid=ImgRaw&r=0')] object-fill sm:bg-center bg-left-bottom bg-no-repeat bg-cover w-full h-[250px]  mb-8 md:bg-cover  md:h-[250px]  flex items-center  justify-center rounded-3xl opacity-80 hover:opacity-100 hover:shadow-white hover:shadow-md">
          <Buttont name={"BACK"} address={"/back"} />
        </div>

        <div className="bg-[url('https://i.ytimg.com/vi/Vr49IR4EOkY/maxresdefault.jpg')] w-auto h-[250px] sm:bg-center bg-center-bottom bg-no-repeat bg-cover mb-8 md:bg-cover md:h-[250px] flex items-center justify-center rounded-3xl opacity-80 hover:opacity-100 hover:shadow-white hover:shadow-md">
          <Buttont name={"BICEPS"} address={"/biceps"} />
        </div>

        <div className="bg-[url('https://shreddedbrothers.com/uploads/blogs/ckeditor/files/triceps_2.jpg')] w-full h-[250px] sm:bg-center bg-center-bottom bg-no-repeat bg-cover mb-8 md:bg-cover md:h-[250px] lg:bg-cover flex items-center justify-center rounded-3xl opacity-80 hover:opacity-100 hover:shadow-white hover:shadow-md">
          <Buttont name={"TRICEPS"} address={"/triceps"} />
        </div>

        <div className="bg-[url('https://i.pinimg.com/736x/1e/a4/6c/1ea46c4334a78cf06f82944930405bc2.jpg')] w-full h-[250px] sm:bg-center bg-center-bottom bg-no-repeat bg-cover mb-8 md:bg-cover md:h-[250px] flex items-center justify-center rounded-3xl opacity-80 hover:opacity-100 hover:shadow-white hover:shadow-md">
          <Buttont name={"LEGS"} address={"/legs"} />
        </div>

      </div>

      <div className='grid grid-cols-2 mt-16 p-4 overflow-hidden gap-12'>
        <div className="bg-[url('https://www.diabetes.co.uk/wp-content/uploads/2019/01/iStock-528072248-scaled.jpg')] w-full h-[250px] sm:bg-right bg-center-bottom md:h-[250px] bg-cover bg-no-repeat flex items-center justify-center rounded-3xl opacity-80 hover:opacity-100 hover:shadow-white hover:shadow-md">
          <Buttont name={"BMI"} address={"/bmi"} />
        </div>
        <div className="bg-[url('https://www.gannett-cdn.com/presto/2019/03/18/PBUR/6a666f26-46e1-4e3a-86cd-2487847e50ee-GettyImages-951377636.jpg?crop=723,404,x0,y0&width=3200&height=1680&fit=bounds')] w-full h-[250px] bg-center-bottom bg-no-repeat bg-cover mb-8 md:bg-cover md:h-[250px] flex items-center justify-center rounded-3xl opacity-80 hover:opacity-100 hover:shadow-white hover:shadow-md">
          <Buttont name={"DIET"} address={"/diet"} />
        </div>
      </div>


    </div>
  )
}

export default Home
