import { useState, React } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'
import { useDispatch } from 'react-redux'
import { Button ,Input } from '@material-tailwind/react'
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
 
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "top-left",
      closeOnClick: true,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "https://gymfreaksbackend.onrender.com/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );

      console.log(data);
      const { success, message } = data;

      if (success) {
        handleSuccess(message);
        dispatch(login(data));
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }

    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });

  };



  
  return (
    <div
      className="flex items-center justify-center py-20 bg-[url('https://images.pexels.com/photos/4162451/pexels-photo-4162451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-no-repeat  bg-center"
    >
      <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-11 pb-16 border border-black/10`}>
        {/* <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo/>
          </span>
        </div> */}
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        {/* {error && <p className="text-red-600 mt-8 text-center">{error}</p>} */}
        <form onSubmit={handleSubmit} className='mt-8'>
          <div className='space-y-5'>
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              name='email'
              value={email}
              onChange={handleOnChange}
            />
            <Input
              label="Password: "
              type="password"
              placeholder="Enter your password"
              name='password'
              value={password}
              onChange={handleOnChange}
            />
            <Button
              type="submit"
              className="w-full"
            >Sign in</Button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  )
}

export default Login