import React, { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Registerstyles.css"
import { Form, Input } from 'antd';
import { registerfunc } from '../services/Apis';

const Register = () => {

  let navigate = useNavigate();
  const [inputdata, setInputData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const setInputValue = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputdata, [name]: value })
  }


  const submitUserData = async (e) => {
    e.preventDefault();

    const { name, email, password } = inputdata;
    const data = new FormData();
    data.append("name", name)
    data.append("email", email)
    data.append("password", password)

    const response = await registerfunc(data);
    console.log(response)

    if (response.status === 200) {
      setInputData({
        ...inputdata,
        name: "",
        email: "",
        password: "",
      });
      navigate('/login')
    } else {
      console.log("error")
    }

  }
  return (
    <>
      <div className="form-container ">
        <Form layout="vertical" className='card shadow p-4'>
          <h3 className='text-center'>Register Form</h3>
          <Form.Item label="Name">
            <Input type='text' name="name" value={inputdata.name} onChange={setInputValue} required />
          </Form.Item>
          <Form.Item label="Email">
            <Input type='email' name="email" value={inputdata.email} onChange={setInputValue} required />
          </Form.Item>
          <Form.Item label="Password" >
            <Input type='password' name="password" value={inputdata.password} onChange={setInputValue} required />
          </Form.Item>
          <NavLink to='/login' className='m-2'>Already User login</NavLink>
          <button onClick={submitUserData} className="btn btn-primary" type='submit'>Register</button>
        </Form>


      </div>
    </>
  )
}

export default Register