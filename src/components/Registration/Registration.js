import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
const Registration = () => {
  const navigate = useNavigate()
  const [email,setEmail] = useState('')
  const [pass,setPass] = useState('')
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const SubmitRegisterAcc = (e) =>{
      e.preventDefault();
      createUserWithEmailAndPassword(email,pass);
  }

   const handleEmailInput = (e) => {
     setEmail(e.target.value);
   };
   const handlePasswordInput = (e) => {
     setPass(e.target.value);
   };

   const handleNavigateLoginPage = () =>{
     navigate('/login');
   }
  return (
    <div className='login-container'>
      <div className='login-section'>
        <h4>Create an account</h4>
        <form onSubmit={SubmitRegisterAcc}>
          <div className='form-control'>
            <label htmlFor='fName'>First name</label>
            <input  type='text' name='fName' />
          </div>
          <div className='form-control'>
            <label htmlFor='lName'>Last name</label>
            <input  type='text' name='lName' />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Username or Email</label>
            <input onBlur={handleEmailInput}  type='text' name='email' />
          </div>
          <div className='form-control'>
            <label htmlFor='password'>Password</label>
            <input onBlur={handlePasswordInput} type='password' name='password' />
          </div>
          <div className='form-control'>
            <label htmlFor='cPassword'>Confirm password</label>
            <input  type='password' name='cPassword' />
          </div>
          <button className='login'>Register</button>
          <div className='create-acc'>
            <p>
              Already have an account?
              <button onClick={handleNavigateLoginPage} className='forget-password'>
                Login
              </button>
            </p>
          </div>
        </form>
      </div>
      <div className='or'>
        <hr />
        <p>or</p>
        <hr />
      </div>
    </div>
  );
};

export default Registration;
