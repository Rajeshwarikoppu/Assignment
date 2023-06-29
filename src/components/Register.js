import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
 const history=useNavigate()

    const [user,setUser]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try {
            await axios.post("http://localhost:8000/register",{
                user,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    alert("User already exists")
                 
                }
                else if(res.data="notexist"){
                      history("/home",{state:{id:user}})

                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })
        } catch (e) {
            console.log(e)
        }
    }
  return (
    <div className="login">
     <h1>Register</h1>

     <form action='POST'>
        <input type='user' onChange={(e)=>{setUser(e.target.value)}} placeholder='Username' name='' id='' />
        <input type='password' onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' name='' id='' />

        <input type='submit' onClick={submit}/>
     
     </form>

     <br/>
     <p>OR</p>
     <br />
     <Link to='/'>Login Page</Link>
    </div>
  );
}

export default Register;