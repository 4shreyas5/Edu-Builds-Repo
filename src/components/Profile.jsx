import React,{useState} from 'react'
import './Profile.css'
import profileImage from './profileImage.png'
import profileB from './profileB.png'

function Profile() {
    const [name,setName]=useState('Name');
    const [email,setEmail]=useState('Email');

  return (
    <div className='profilecard'>
        <img src={profileB} class="img-fluid " alt="..."/>
    <div className='card  ml-5 mr-5 '>
        <div className='upper-container'>
            <div className='image-container'>
                <img src={profileImage} alt='...' height="100px" width="100px"/>
            </div>
        </div>
        <div className='lower-container'>
            <h3>{name}</h3>
            <h3>{email}</h3>
        </div>
      
    </div>
    </div>
  )
}

export default Profile
