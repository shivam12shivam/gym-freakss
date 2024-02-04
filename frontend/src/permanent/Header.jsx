import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Container from '../container/Container'
import Logo from '../Logo/Logo.jsx'
import LogoutBtn from './LogoutBtn.jsx';

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },

  ]

  return (
    <header className='py-3 shadow-inner shadow-white bg-black'>
      <Container>
        <nav className='flex'>
          <div className='mr-4 p-2'>
            <Link to='/'>
              <Logo/>
            </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className=' text-white text-lg inline-bock px-6 py-2 duration-200 hover:bg-blue-100  rounded-full hover:text-black'
                  >{item.name}</button>
                </li>
              ) : null
            )}
            {authStatus &&(
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header