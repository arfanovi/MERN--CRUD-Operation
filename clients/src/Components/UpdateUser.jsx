import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom"
import axios from 'axios'


const UpdateUser = () => {
    const {id} = useParams()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const navigate = useNavigate()

    useEffect(() =>{
        axios.get('http://localhost:3001/getUser', id)
        .then(result => console.log(result))
        .catch(err => console.log(err))
    },[])

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form action="">
                <h2>Update</h2>
                <div className='mb-2'>
                    <label htmlFor="">Name</label>
                    <input className='form-control' type="text" name="" id="" placeholder='Enter name'/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Email</label>
                    <input className='form-control' type="email" name="" id="" placeholder='Enter email'/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Age</label>
                    <input className='form-control' type="number" name="" id="" placeholder='Enter age'/>
                </div>

                <button className='btn btn-success'>Update</button>
            </form>

        </div>
          
    </div>
    );
};

export default UpdateUser;