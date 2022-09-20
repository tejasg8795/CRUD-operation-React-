import React, {useState, useEffect} from 'react'
import {NavLink, Link} from 'react-router-dom'

import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';

const ViewUser =()=>{
    const [ViewUser, setViewUser] = useState({
        name : "",
        username : "",
        email : "",
        phone : "",
        website : ""

    });

    const {id} = useParams()

    useEffect(()=>{
        loadUser();
    },[])

    const loadUser = async () =>{
        const res =await axios.get(`http://localhost:3003/users/${id}`)
        setViewUser(res.data)
    }
    return(
        <div className="container py-4">
            <Link className="btn btn-primary" to="/">back to home</Link>
            <h1 className="display-4">User id:{id}</h1>
            <hr/>
            <ul className="list-group w-50">
                <li className="list-group-item">name: {ViewUser.name}</li>
                <li className="list-group-item">username: {ViewUser.username}</li>
                <li className="list-group-item">email: {ViewUser.email}</li>
                <li className="list-group-item">phone: {ViewUser.phone}</li>
                <li className="list-group-item">website: {ViewUser.website}</li>

            </ul>
        </div>
    )
}
export default ViewUser;