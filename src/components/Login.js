import React from "react";
import {  useNavigate,  } from "react-router-dom";
import { Form , Alert} from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useState } from "react";
import { Link } from "react-router-dom";

import { UserUserAuth } from "../context/UserAuthContext";

const Login =()=>{

    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const {logIn, googleSign} = UserUserAuth();
    const [error, setError]= useState("")
    const  navigate = useNavigate();

    const handleOnsubmit = async(e)=>{
        e.preventDefault();
        setError("");
        try {
            await logIn(email, password);
            navigate("/home")
        }catch(err){

            setError(err.message)
            
        }
    }
  const handleGoogle=async (e)=>{
    e.preventDefault();


    try{
        await googleSign();
        navigate("/home");

    }catch(err){
        setError(err.message)

    }

  }
    return(

        <>
        <div className="card" style={{width:'300px', margin:'auto' , marginTop:'150px', padding:'10px', backgroundImage: 'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)'}}>
            <h2 className="mb-3"> Login</h2>
            {error && <Alert variant="danger">{error}</Alert>}

            <Form onSubmit={handleOnsubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email "  onChange={(e)=>setEmail(e.target.value)}></Form.Control>
                </Form.Group>


           
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password "  onChange={(e)=>setPassword(e.target.value)}></Form.Control>
                </Form.Group>

           

            <div className="d-grid gap-2">
                <Button variant ="primary" type="submit">
                    Login
                </Button>
            </div>
            </Form>


            <hr/>
            <h4 style={{textAlign:'center'}}>or</h4>
           <div>
            <GoogleButton className="g-btn" type="dark" onClick={handleGoogle}/>
           </div>

           <div className="p-4 box mt-3 text-center">
            Don't Have an account? <Link to="/"> Signup</Link>
           </div>

        </div>
        
        
        
        </>

    )
}

export default Login;