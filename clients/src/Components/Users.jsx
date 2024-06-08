import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState([{
        Name: "Ovi",
        Email: "ovi@gmail.com",
        Age: 25
    }])


    useEffect(() =>{
        axios.get('http://localhost:3001')
        .then(result => setUsers(result.data))
        .catch(err => console.log(err))
    },[])
     return (
        <div>
            <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
                <div className=' bg-white rounded p-3'>
                    <table className='table'>
                        <Link to="/create"  className='btn btn-success'>Add +</Link>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Age</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                               users.map((user) =>{
                               return <tr>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                    <Link to={`/update/${user._id}`}  className='btn btn-success'>Edit</Link>
                                    <td><button className='btn btn-danger'>Delete</button></td>
                                </tr>
                               }) 
                            }
                        </tbody>
                    </table>
                </div>

            </div>
            
        </div>
    );
};

export default Users;