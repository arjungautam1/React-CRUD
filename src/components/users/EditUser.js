import React, { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate,useParams } from 'react-router-dom';

const EditUser = () => {
    let navigate=useNavigate();
    const {id}=useParams()
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
    });

    const { name, username, email } = user;
    const onInputChange = (e) => {
        setUser({...user,[e.target.name]:e.target.value})
    };

    useEffect(()=>{
        loadUser();
    },[])

    const onSubmit=async (e)=>{
        e.preventDefault()
        await axios.put(`http://localhost:3001/users/${id}`,user)
        navigate("/")
    }

    const loadUser = async () => {
        const result=await axios.get(`http://localhost:3001/users/${id}`)
        setUser(result.data)

    }

    return (
        <div className={"container"}>
            <div className={"row "}>
                <div
                    className={
                        "col-md-6 offset-md-3 border border-primary rounded p-4 mt-2 shadow "
                    }
                >
                    <h2 className={"text-center m-4"}>Register User</h2>
                    <form onSubmit={e=>onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder={"Enter your Name"}
                                name={"name"}
                                value={name}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>{" "}
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                User Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder={"Enter your Username"}
                                name={"username"}
                                value={username}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>{" "}
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder={"Enter your email address"}
                                name={"email"}
                                value={email}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditUser;
