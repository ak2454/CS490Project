import './Njitlogo.png'
import LoginForm from "./LoginForm";
import React, {useState} from "react";
import './index.css';

const axios = require('axios');
export default function Login() {

    const  adminUser = {
        username: "admin",
        password: "admin123"
    }

    const [ user, setUser] = useState({username: "" })
    const [error, setError] = useState("")

    const Login = details => {
        const inputEmail = details.username;
        const inputPassword = details.password;

        axios.get('http://18.191.4.18:3001/users')
        .then(function (response) {
            console.log(response["data"]);
            for (let i = 0; i< response["data"].length; i++) {
                if (response["data"][i]["email"] == inputEmail && response["data"][i]["password"] == inputPassword) {
                    setUser({
              		username: details.name,
            	    })
                }else{
                    setError("Invalid Email or Password.")
                }
            }
        });
    }



        const Logout = () => {
        console.log("Logout");
        setUser({username: ""})

        }
    return (
        <div className= "Login">
            {(user.username !== "") ? (
                <div className={"welcome"}>
                    <h2>Welcome, <span>{user.username}</span></h2>
                    <button onClick={Logout}>Logout</button>
                </div>
            ):(
                <LoginForm Login={Login} error={error}/>

            )}
        </div>

    )}
