import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import './Post.css'
import { Await, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

export const Post = () => {
    const[data,setData]=useState('');
    const navigate=useNavigate();
    


    const handleChange=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }

    const handleImageChange = (event) => {
        setData({ ...data, image: event.target.files[0] }); 
      }
    
// const handleSubmit=async (event)=>{

//   event.preventDefault();
//   const userid=localStorage.getItem('id')
//   // if(data.title && data.author && data.datetime && data.description &&data.image)
  
//   {
//     setData(data);
//     console.log(data);
//     let response= await axios.post('http://localhost:4005/insertblog',{...data,user:userid})
//     console.log(response);
//     navigate('/user/Explore')
//   }
//   else
//   {
//     toast.error("Invalid");
//   }
// }
    

const handleSubmit =async()=>{
  const userid=localStorage.getItem('id')
  let newdata=new FormData()
  newdata.append('title',data.title)
  newdata.append('author',data.author)
  newdata.append('datetime',data.datetime)
  newdata.append('description',data.description)
  newdata.append('image',data.image)
  newdata.append('userid',userid)
  let response= await axios.post('http://localhost:4005/insertblog',newdata)
   console.log(response);
   navigate('/user/Explore')
}
console.log('data',data);

  return (
    <>
      <div className='container'>
      <div>
      <h2 className='post'>Create Post</h2>
        <Form>
          <Form.Group className="mb-5 mt-5" controlId="exampleForm.ControlInput1" >
            <Form.Control type="text" rows={3} placeholder='Title' onChange={handleChange} name='title' />
          </Form.Group><br/>

          <Form.Group className="mb-5 mt-5" controlId="exampleForm.ControlInput1" >
            <Form.Control type="text" rows={3} placeholder='Author' onChange={handleChange} name='author' />
          </Form.Group><br/>
          <Form.Group className="mb-5 mt-5" controlId="exampleForm.ControlInput1" >
            <Form.Control type="text" rows={3} placeholder='Date and Time' onChange={handleChange} name='datetime' />
          </Form.Group><br/>
          
          <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows={3} placeholder='Description'onChange={handleChange} name='description' />
          </Form.Group><br/>

          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload photos: </Form.Label>
            <Form.Control type="file" name='image'
            onChange={handleImageChange} accept=".jpg, .jpeg, .png"/>
          </Form.Group>
        </Form><br />
        <div className='btn-container'>
        <button className='button' onClick={handleSubmit}>Submit</button>
         </div>
 </div>
 </div>
<ToastContainer/>
    </>
  )
}


