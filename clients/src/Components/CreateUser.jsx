import React, { useState } from 'react';
import axios, { Axios } from 'axios'
import { useNavigate } from 'react-router-dom';


const CreateUser = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const navigate = useNavigate()


    const Submit  = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/createUser", {name, email, age})
        .then(result => {
            navigate('/')
        })
        .catch(err => console.log(err))
    }

    return (

    

        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={Submit}>
                    <h2>Add One</h2>
                    <div className='mb-2'>
                        <label htmlFor="">Name</label>
                        <input onChange={(e) => setName(e.target.value)} className='form-control' type="text" name="" id="" placeholder='Enter name'/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Email</label>
                        <input onChange={(e) => setEmail(e.target.value)} className='form-control' type="email" name="" id="" placeholder='Enter email'/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Age</label>
                        <input onChange={(e) => setAge(e.target.value)} className='form-control' type="number" name="" id="" placeholder='Enter age'/>
                    </div>

                    <button className='btn btn-success'>Submit</button>
                </form>

            </div>
              
        </div>
    );
};

export default CreateUser;