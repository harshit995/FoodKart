import React from 'react';
import { Link } from "react-router-dom";
import "../styles/Registerstyles.css"
import { Button, Checkbox, Form, Input } from 'antd';

const Register = () => {

  

  const onfinishHandler=(value)=>{
    console.log(value)
  }
  return (
   <>
    <div className="form-container ">
        <Form layout="vertical" onFinish={ onfinishHandler} className='card p-4'>
        <h3 className='text-center'>Register Form</h3>
        <Form.Item label="Name" name="name">
          <Input type='text' required/>
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input type='email' required/>
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input type='password' required/>
        </Form.Item>
        <Link to='/login' className='m-2'>Already User login</Link>
        <button className="btn btn-primary" type='submit'>Register</button>
</Form>
        

    </div>
   </>
  )
}

export default Register