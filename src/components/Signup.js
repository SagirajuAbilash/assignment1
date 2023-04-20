import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { Alert, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { UserUserAuth } from "../context/UserAuthContext";


const Signup =()=>{

    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const {signUp} = UserUserAuth();
    const [error, setError]= useState("")
    const  navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError("");
        try {
            await signUp(email, password);
            navigate("/login")
        }catch(err){

            setError(err.message)
            
        }
    }

    console.log(error);
    return(

        <>

       
            
                
        <div className="card" style={{width:'300px', margin:'auto' , marginTop:'150px', padding:'10px ', backgroundImage: 'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)'}}>
            <h2 className="mb-3"> Signup</h2>
            {error && <Alert variant="danger">{error}</Alert>}


            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email " onChange={(e)=>setEmail(e.target.value)}></Form.Control>
                </Form.Group>


           
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password "   onChange={(e)=>setPassword(e.target.value)}></Form.Control>
                </Form.Group>

           

            <div className="d-grid gap-2">
                <Button variant ="primary" type="submit">
                    Sign Up
                </Button>
            </div>
            </Form>


            <hr/>
        
           <div className="p-4 box mt-3 text-center">
            Already Have an account? <a href="/login"> Login </a>
           </div>

        </div>
        
       

        
        
       
        
        </>

    )
}

export default Signup;