import { useDispatch } from 'react-redux'
import { logout } from '../store/authSlice'
import { useNavigate } from 'react-router-dom'
import  Cookies  from 'js-cookie';

function LogoutBtn() {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const logoutHandler = () => {

    dispatch(logout());
    navigate("/signup");
    Cookies.remove('token');
  }
  return (
    <button
      className=' text-white text-lg inline-bock px-6 py-2 duration-200 hover:bg-blue-100 hover:text-black rounded-full'
      onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn