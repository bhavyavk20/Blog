import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios, { formToJSON } from 'axios'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import './Reg.css'
export const Reg = () => {
  const [data, setData] = useState('');
  const [submit, setSubmit] = useState('');
  const navigate = useNavigate()

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handlesubmit = async (event) => {
    event.preventDefault();
    if (data.fname && data.lname && data.dob && data.gender && data.profession !== 'select one' && data.uname && data.pass) {
      setData(data);
      console.log(data);
      let response = await axios.post('http://localhost:4005/register', data)
      console.log(response);
      navigate('/Login')
      // toast.success('Successfully Registered')
    }
    else {
      toast.error('Please fill all the field');
    }
  }

  return (
    <>
      <div className='container'>
        <Form action="" className="p-3 w-50 m-auto">
          <h1 className='reg'>Sign up</h1>
          <input
            type="text"
            onChange={handleChange}
            name="fname"
            className="form-control mt-3 mb-3"
            placeholder="First name"
            value={data.fname ? data.fname : ''}
          /><br /><br />
          <input
            type="text"
            onChange={handleChange}
            name="lname"
            className="form-control mt-3 mb-3"
            placeholder="Last name"
            value={data.lname ? data.lname : ''}

          /><br /><br />
          <input
            type="date"
            onChange={handleChange}
            name="dob"
            className="form-control mt-3 mb-3"
            value={data.dob ? data.dob : ''}

          /><br /><br />
          {['Male', 'Female', 'Others'].map((label, index) => (
            <Form.Check
              key={index}
              label={label}
              name="gender"
              type="radio"
              value={label.toLowerCase()}
              onChange={handleChange}
              id={`inline-radio-${index}`}
            />
          ))}
          <input
            type="text"
            onChange={handleChange}
            name="uname"
            className="form-control mt-3 mb-3"
            placeholder="Username"
            value={data.uname ? data.uname : ''}

          /><br /><br />
          <input
            type="password"
            onChange={handleChange}
            name="pass"
            className="form-control mt-3 mb-3"
            placeholder="Password"
            value={data.pass ? data.pass : ''}

          /><br /><br />
          <div className="btn-container">
            <Button variant="success" className='btn' onClick={handlesubmit}>Sign up</Button>
          </div>
        </Form>
      </div>
      <ToastContainer />
    </>
  )
}
