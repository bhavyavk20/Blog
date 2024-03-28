import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import './Login.css'
import { toast,ToastContainer } from 'react-toastify';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export const Login = () => {

  const[data2,setData2]=useState('');
  const navigate=useNavigate();


  const handleChange = (event) => {
    setData2({ ...data2, [event.target.name]: event.target.value });
  };


  const handleSubmit =async (event) => {
    event.preventDefault();
    setData2(data2);
    try{
    let response=await axios.post('http://localhost:4005/login',data2)
    console.log(response.data);
    const token=response.data.token;
    console.log(token);
    localStorage.setItem('token',token)
    localStorage.setItem('id',response.data.partner._id)
    if(response)
    {
      // toast.success('Successfully Login');
      navigate('/user')

    }
    else
    {
      toast.error('invalid username or password');
    }
    }
    catch(e)
    {
      toast.error('invalid username or password')
    }
  };
  return (
    <>
      <div className='container'>
        <form action="" className='p-3 w-50 m-auto'>
          <h1 className='login'>Login</h1>
          <input type="text"  onChange={handleChange} name="uname" placeholder='Username'value={data2.uname ? data2.uname : '' } className='form-control mt-3 mb-3' /><br /><br />
          <input type="password"  onChange={handleChange} name='pass' placeholder='Password' value={data2.pass ? data2.pass : '' } className='form-control mt-3 mb-3' /><br /><br />
          <div className="btn-container"> 
            <Button variant="success" className='btn' onClick={handleSubmit}>Login</Button>
          </div>
        </form>
      </div>
      <ToastContainer/>
    </>
  )
}
