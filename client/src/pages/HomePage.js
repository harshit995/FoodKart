import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getuserfunc } from '../services/Apis';

// import axios from 'axios';
// axios.defaults.withCredentials = true;

const HomePage = () => {

  const navigate = useNavigate();
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");

  //login user data
  const getUserdata = async () => {

    const response = await getuserfunc();
    console.log(response)

    if (response.status !== 200) {
      navigate('/login')
    }
  }

  useEffect(() => {
    getUserdata();
  }, [])
  return (
    <div>
      <h1>Home Page</h1>
      <NavLink to='/about' className='m-2'>about</NavLink>
    </div>
  )
}

export default HomePage