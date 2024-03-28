import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaDelete, FaEdit, FaTrash} from 'react-icons/fa'

export const Explore = () => {
    const id = localStorage.getItem('id');
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [refresh,setRefresh]=useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:4005/viewpost/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setData(response.data);
            } catch (error) {
                setError(error.response.data.message || 'Error fetching data');
            }
        };
        fetchData();
    }, [id, token,refresh]);

    let handleDelete=async(id)=>{
        console.log(id);
        setRefresh(!refresh)
        let response=await axios.delete(`http://localhost:4005/delete/${id}`)
        console.log(response);
        console.log(refresh);
        window.location.reload();
      }


    return (
        <>
            {error && <p>{error}</p>}

            <div className='flex-container'>
            {data.map((item)=>(
                <div className="flex-item-left">
                    <img src={`http://localhost:4005/uploads/${item.image}`}/>
                    <h2>{item.title}</h2>
                    <a className='author'><b>{item.author}:</b></a>
                    <time>{item.datetime}</time>
                    <p className='summary'>{item.description}</p>
                    <div >
                    <FaEdit id='icon'/> <FaTrash onClick={()=>{
                        handleDelete(item._id)
                    }}/>
                    </div>
                </div>
                 ))}
            </div>

        </>
    );
};
