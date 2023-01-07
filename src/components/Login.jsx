import React from 'react';
import {useState} from 'react';
import './Login.css'
// import Register from './components/Register'
//import axios from 'axios';
//import {Link} from 'react-router-dom'

export const Login = (props) => {
//     const [currentForm, setCurrentForm] = useState('login');
//   const toggleForm = (formName) => {
//     setCurrentForm(formName);
//   } 


    const [email,setEmail] = useState ('');
    const [password,setPassword] = useState ('');
     

    const handleSubmit =(e) =>{
        e.preventDefault();
        
        // axios
        //    .post("https://reqres.in/api/login"  ,{
        //       email:email.email,
        //       password:password.password
        //    })
        //    .then((res) =>localStorage.setItem('token',res.data.token))
        //    .catch((err) => console.error(err));
    };
   

    return (
        <div>
        
            
        <div className='auth-form-container '>
            <h2>Login</h2>
        <form className='login-form' onSubmit={handleSubmit}>
            <label htmlFor='email'>Email</label>
            <input value={email} onChange={(e)=>setEmail({...email,email: e.target.email})} type='email' id='email' />
            <label htmlFor='password'>Password</label>
            <input value={password} onChange={(e)=>setPassword({...password,password: e.target.password})} type='password' id='password' />
            <button className='link-btn' type='submit'>Log in</button>
            </form>
        </div>
            
        
        <button onClick={() => props.onFormSwitch('register')}>Dont  have an account register here</button>

        {/* currentForm == "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/> */}
        </div>
    )
}