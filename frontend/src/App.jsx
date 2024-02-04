import React, { useState, useEffect } from 'react'
import './App.css'
import Footer from './permanent/Footer'
import Header from './permanent/Header'
import { useCookies } from 'react-cookie'
import { useNavigate, Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout, login } from './store/authSlice'
import axios from 'axios'

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
        return;
      }
      const { data } = await axios.post(
        "https://gymfreaksbackend.onrender.com",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      if (!status) {
        // Assuming dispatch(logout()) handles logout action properly
        dispatch(logout());
        removeCookie("token");
        navigate("/login");
      } else {
        // Assuming dispatch(login({ data })) handles login action properly
        dispatch(login({ data }));
      }
    };
    verifyCookie();
    // navigate("/");
  }, [cookies, navigate, removeCookie]);


  return (
    <div className='absolute inset-0 dark:bg-slate-800 overflow-clip h-fit  w-screen flex flex-wrap content-between bg-gray-400'>
      <div className=' w-full'>
        {/* <div
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            right: 0,
            backgroundColor: "green"
          }}
        > */}
        <Header />
        {/* </div> */}

        <main className=''>
          <Outlet />
        </main>

        <div
          style={{
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: "green"
          }}
        >
          <Footer />
        </div>

      </div>
    </div>


  )

}

export default App
