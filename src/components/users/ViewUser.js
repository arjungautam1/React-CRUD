import React,{useState,useEffect}from 'react';
import {Link,useParams} from "react-router-dom";
import axios from "axios";


const ViewUser = () => {

    const [user,setUser]=useState(
        {
            "name":"",
            "username":"",
            "email":"",
        }
    );
    const {id}=useParams()

    useEffect(()=>{
        loadUser()
        }
    )

    const loadUser=async ()=>{
        const res=await axios.get(`http://localhost:3001/users/${id}`)
            setUser(res.data);
    }

    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className ="col-md-6 offset-md-3 border border-primary rounded p-4 mt-2 shadow">

                    <h2 className={"text-center m-4"}>User Details</h2>

                    <div className="card"  >
                        <div className="card-header">
                            Details of User Id : {user.id}
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><b>Name</b> : {user.name}</li>
                            <li className="list-group-item"><b>UserName</b> : {user.username}</li>
                            <li className="list-group-item"><b>Email</b> : {user.email}</li>
                        </ul>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default ViewUser;