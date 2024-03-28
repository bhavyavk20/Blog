import React, { useEffect, useState } from 'react'
import './Profile.css'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { adddata } from './CounterSlice';
import { ToastContainer, toast } from 'react-toastify';

export const Profile = () => {
    const id=localStorage.getItem('id')
    console.log(id,'gt');

    const [data, setData] = useState(['']);
    const navigate = useNavigate();
    const [refresh, setRefresh] = useState(false);
    let token = localStorage.getItem('token')
    console.log(token);

    useEffect(() => {
        let fetchdata = async () => {
            try {
                let response = await axios.get(`http://localhost:4005/findauthor/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                console.log(response.data);
                setData(response.data);
            }
            catch (e) {
                console.log(e.response.data.message);
            }
        }
        if (token == null) {
            navigate('/Login')
        }
        else {
            fetchdata()
        }
        fetchdata()
    }, [refresh])
    console.log(data,'kk');

    return (
        <div className='flex-container'>
            <div className='view'>
                    First name: <input type='text'value={data.fname}/><br /><br />
                    Last name: <input type='text'value={data.lname}/><br /><br />
                    Date of birth: <input type='text'value={data.dob}/><br /><br />
                    Gender: <input type='text'value={data.gender}/><br /><br />
                    User name: <input type='text'value={data.uname}/><br /><br /><br />
                     <Link to={`/user/Edit/${data._id}`}><input type='submit' id='btn'value='Edit'/></Link>
                </div>
                
        </div>

    )
}
