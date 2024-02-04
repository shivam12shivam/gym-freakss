import { Link, useNavigate } from 'react-router-dom'
import { Input, Button } from '@material-tailwind/react'
import axios from "axios"
import { ToastContainer, toast } from "react-toastify";
import { useState ,React } from 'react';
import { login } from '../store/authSlice'
import 'react-toastify/dist/ReactToastify.css';

function Signup() {

  const naviagte = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "top-left",
      closeOnClick: true,
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
        "http://localhost:3000/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        dispatch(login(data));
        setTimeout(() => {
          naviagte("/");
        }, 1000);
      }
      else {
        handleError(message);
      }

    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  }

  return (
    <div className="flex items-center justify-center py-16 bg-[url('https://images.pexels.com/photos/4162451/pexels-photo-4162451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-no-repeat  bg-center">
      <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-12 border border-black/10`}>
        <div className="mb-2 flex justify-center">

        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
        <p className="mt-2 text-center text-base text-black/60">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>
        {/* {error && <p className="text-red-600 mt-8 text-center">{error}</p>} */}

        <form onSubmit={handleSubmit}>
          <div className='space-y-5'>
            <Input
              label="Full Name: "
              name="username"
              value={username}
              placeholder="Enter your full name"
              onChange={handleOnChange}
            />
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              name="email"
              value={email}
              onChange={handleOnChange}
            />
            <Input
              label="Password: "
              type="password"
              placeholder="Enter your password"
              name="password"
              value={password}
              onChange={handleOnChange}

            />
            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </div>
        </form>
        <ToastContainer />
      </div>

    </div>
  )
}

export default Signup