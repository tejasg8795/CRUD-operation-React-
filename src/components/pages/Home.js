import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import {Link} from 'react-router-dom';
import axios from 'axios';
const Home = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        // console.log('hello world')
        loadUsers()
    }, [])

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3003/users")
        // console.log(result)
        setUsers(result.data.reverse())

        
    }

    const deleteUser = async id =>{
        await axios.delete("http://localhost:3003/users/" + id)
        loadUsers()
    }
    return (
        <>
        <div className="py-4">
            <h1>Home page</h1>
            <Table striped bordered hover className="table_1">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user,index) =>(
                            <tr>
                                <th scope='row'>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link class="btn btn-primary btn_2" to={`/users/${user.id}`}>View</Link>
                                    <Link class="btn btn-outline-primary btn_2" to={`/users/edit/${user.id}`}> Edit</Link>
                                    <button class="btn btn-danger btn_2" onClick={() => deleteUser(user.id)}> Delete</button>

                                    
                                </td>

                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            </div>
        </>
    )
}
export default Home;