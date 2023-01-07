
import React from 'react';
import './Login.css'
import {useState} from 'react';

export const Register = (props) => {
    const [name,setName] = useState ('');
    const [email,setEmail] = useState ('');
    const [password,setPassword] = useState ('');
    
    const handleSubmit =(e) =>{
        e.preventDefault();
        console.log(name);
    }
    return (
        <div>
        
            <div className='auth-form-container '>
                <h2>Register</h2>
            <form className='register-form' onSubmit={handleSubmit}>
            <label htmlFor='name'>Name</label>
            <input value={name} type='text' id='name' />
            <label htmlFor='email'>Email</label>
            <input value={email} type='email' id='email' />
            <label htmlFor='password'>Password</label>
            <input value={password} type='password' id='password' />
            <button className='link-btn' type='submit'>log in</button>
            </form>
            </div> 
        
        <button onClick={() => props.onFormSwitch('login')}>Already have an account Login here</button>
        </div>
    )
}