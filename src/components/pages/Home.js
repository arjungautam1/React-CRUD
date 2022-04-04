import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const Home = () => {

    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers()
    }, [])


    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3001/users")
        setUser(result.data.reverse())
    }
    return (
        <div className='container'>
            <div className='py-4'>
                <table className="table border shadow">
                    <thead >
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users.map((user, index) => (
                            <tr>
                                <th scope={"row"}>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link className="btn btn-primary mx-2"  exact to="/view">View</Link>
                                    <Link className="btn btn-outline-primary mx-2"  exact to="/view">Edit</Link>
                                    <Link className="btn btn-danger"  exact to="/delete">Delete</Link>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home;