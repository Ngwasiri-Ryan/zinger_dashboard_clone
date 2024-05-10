'use client';

import Link from 'next/link';
import styles from '../styles/login.css'
import { useState } from 'react';
import { FaCircleUser, FaLock } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineSmartphone } from "react-icons/md";
import { FaCity } from "react-icons/fa";

const Rgister = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber , setPhoneNumber] = useState('');
  const [country , setCountry] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Add login logic here
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>

    
        <label className='login-label'>Username:</label>
        <div className='input-holder'>
          <input type="text" className='login-input' value={username} onChange={(e) => setUsername(e.target.value)} />
          <div className='icon'>
          <FaCircleUser className='icon-style'/>
          </div>
        </div>
        <br />

    
       <label className='loginLabel'>Password:</label>
       <div className='input-holder'>
        <input type="password" className='login-input' value={password} onChange={(e) => setPassword(e.target.value)} />
        <div className='icon'>
        <FaLock className='icon-style' />
        </div>
      </div>
        <br />

        <label className='loginLabel'>Email</label>
       <div className='input-holder'>
        <input type="email" className='login-input' value={email} onChange={(e) => setEmail(e.target.value)} />
        <div className='icon'>
        <MdOutlineEmail className='icon-style'/>
        </div>
      </div>
        <br />


        <label className='loginLabel'>Phone Number</label>
       <div className='input-holder'>
        <input type="text" className='login-input' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        <div className='icon'>
        <MdOutlineSmartphone className='icon-style'/>
        </div>
      </div>
        <br />

        <label className='loginLabel'>Country</label>
       <div className='input-holder'>
        <input type="country" className='login-input' value={country} onChange={(e) => setCountry(e.target.value)} />
        <div className='icon'>
        <FaCity className='icon-style'/>
        </div>
      </div>
        <br />

        <button type="submit" className='login-button'>Register</button>
        <br />
        <Link href="./Login.js">
          <div className='register-link'>Don't have an account? Login</div>
        </Link>
        </form>
    </div>
  );
};

export default Register;