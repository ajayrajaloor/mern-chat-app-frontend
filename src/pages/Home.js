import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import { logout, setUser } from '../redux/userSlice'

const Home = () => {
  const user = useSelector(state => state.user )
  const dispatch = useDispatch()
  const navigate = useNavigate()

  console.log('redux user' , user);
  

  const fetchUserDetails = async () =>{
    try {
    const URL = `${process.env.REACT_APP_BACKEND_URL}api/user-details`
      const response = await axios({
        url : URL,
        withCredentials : true
      })

      dispatch(setUser(response.data.data))

      if(response.data.logout){
        dispatch(logout())
        navigate("/email")
      }
    } catch (error) {
      console.log('error',error);
    }
  }

  useEffect(()=>{
    fetchUserDetails()
  },[])
  return (
    <div className='grid lg:grid-cols-[300px,1fr] h-screen max-h-screen'>
      <section className=''>
        sidebar
      </section>

    {/* section component */}
      <section>
        <Outlet/>
      </section>
    </div>
  )
}

export default Home
