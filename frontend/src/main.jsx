import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './store/store.js'
import  {Provider}  from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './compoenents/Home.jsx'
import { ThemeProvider } from "@material-tailwind/react";
import {Login,Signup, AuthLayout,Chest, Shoulders,Back, Biceps, Triceps, Legs, Bmi, Diet, Bulking, Cutting} from './index.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>
       
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        ),
      },
      {
        path:"/chest",
        element:<Chest/>
      },
      {
        path:"/shoulders",
        element:<Shoulders/>
      },
      {
        path:"/back",
        element:<Back/>
      },
      {
        path:"/biceps",
        element:<Biceps/>
      },
      {
        path:"/triceps",
        element:<Triceps/>
      },
      {
        path:"/legs",
        element:<Legs/>
      },
      {
        path:"/bmi",
        element:<Bmi/>
      },
      {
        path:'/diet',
        element:<Diet/>
      },
      {
        path:'/diet/bulking',
        element:<Bulking/>
      },
      {
        path:'/diet/cutting',
        element:<Cutting/>
      }

    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
