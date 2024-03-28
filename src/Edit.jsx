import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react'
import { Link,useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { adddata } from './CounterSlice';
import { ToastContainer, toast } from 'react-toastify';

export const Edit = () => {

    const [viewdata, setViewData] = useState('')
    const { id } = useParams()
    useEffect(() => {
        const fetchData = async () => {
            let response = await axios.get(`http://localhost:4005/findauthor/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(response.data);
            setViewData(response.data);
            setData(response.data);
        }
        fetchData()
    }, [])
    console.log('hghj', viewdata);

    const [data, setData] = useState('');
    const [submit, setSubmit] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate()
    let token = localStorage.getItem('token')
    console.log(token);
    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };
    console.log('hjhuiyu', viewdata);
    const handlesubmit = async (event) => {
        event.preventDefault();
        // try {
            let response = await axios.put(`http://localhost:4005/update/${id}`, data);
            setData(response.data);
            if (response.data) {
                toast.success('Profile updated successfully');
        
            }
             else {
                toast.error('Failed to update profile');
            }
        // } catch (error) {
        //     console.error('Error:', error);
        //     toast.error('An error occurred');
        // }
    };
    
    console.log(data);

    return (
        <>
            <div className='container'>
                <Form action="" className="p-3 w-50 m-auto" >
                    <h1 className='reg'>Edit Profile</h1>
                    <input
                        type="text"
                        onChange={handleChange}
                        name="fname"
                        className="form-control mt-3 mb-3"
                        value={data.fname}
                    /><br /><br />
                    <input
                        type="text"
                        onChange={handleChange}
                        name="lname"
                        className="form-control mt-3 mb-3"
                        value={data.lname}

                    /><br /><br />
                    <input
                        type="date"
                        onChange={handleChange}
                        name="dob"
                        className="form-control mt-3 mb-3"

                        value={data.dob}

                    /><br /><br />
                    {/* {['Male', 'Female', 'Others'].map((label, index) => (
                        <Form.Check
                            key={index}
                            label={label}
                            name="gender"
                            type="radio"
                            value={label.toLowerCase()}
                            
                            onChange={handleChange}
                            id={`inline-radio-${index}`}
                        />
                    ))} */}

                    <div className="btn-container">
                    <Button variant="success" className='btn' onClick={handlesubmit}>Update</Button>
                    </div>
                </Form>
            </div>
            <ToastContainer/>

        </>
    )
}
