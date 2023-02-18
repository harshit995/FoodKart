import React, { useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Registerstyles.css"
import { Form, Input } from 'antd';
import { loginfunc } from '../services/Apis';

const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const loginUser = async (e) => {
    e.preventDefault();
    const data = new FormData();

    data.append("email", email)
    data.append("password", password)

    const response = await loginfunc(data);
    console.log(response)
    if (response.status === 200) {
      setEmail("")
      setPassword("")
      navigate('/')
    }
  }

  return (
    <>
      <div className="form-container ">
        <Form layout="vertical" className='card shadow p-4'>
          <h3 className='text-center'>Login Form</h3>

          <Form.Item label="Email" name="email">
            <Input type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type='password' value={password}
              onChange={(e) => setPassword(e.target.value)} required />
          </Form.Item>
          <NavLink to='/register' className='m-2'>Create User</NavLink>
          <button className="btn btn-primary" value="Log In"
            onClick={loginUser} type='submit'>Register</button>
        </Form>


      </div>
    </>
  )
}

export default Login