import logo from './logo.svg';
import './App.css';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
import React from 'react'
import {useState} from 'react';

import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import {Login}  from './components/Login';
import {Register} from './components/Register';

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  
  return (
    <div className='App'>
       {
         currentForm == "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
      }
       {/* <Navbar/> */}
       {/* <Login/> */}
       {/* <Dashboard/> */}
       {/* <Profile name={name} email={email}/> */}

     </div>

// {/* <Router>
// <div>  
// <Navbar/>

// <Routes>
//  {/* <Route exact path='/' element={<Home/>}/> */}

//   <Route exact path='/Login' element={<Login/>}/>
//   <Route exact path='/Profile' element={<Profile/>}/>
//   <Route exact path='/Register' element={<Register/>}/>
//   <Route exact path='/Dashboard' element={<Dashboard/>}/>
//   <Route exact path='/' element={<Dashboard/>}/>


  
// </Routes>
// </div>
// </Router> */}




  );
}

export default App;
