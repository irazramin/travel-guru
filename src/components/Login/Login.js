import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const createNewAccount = () => {
    navigate('/registration');
  };

  const submitLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, pass);
    navigate('/home')
  };
  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordInput = (e) => {
    setPass(e.target.value);
  };
  return (
    <div className='login-container'>
      <div className='login-section'>
        <h4>Login</h4>
        <form onSubmit={submitLogin}>
          <div className='form-control'>
            <label htmlFor='email'>Username or Email</label>
            <input onBlur={handleEmailInput} type='text' name='email' />
          </div>
          <div className='form-control'>
            <label htmlFor='password'>Password</label>
            <input
              onBlur={handlePasswordInput}
              type='password'
              name='password'
            />
          </div>
          <div className='rem-forget'>
            <div className='form-control remember'>
              <input type='checkbox' name='rememberme' />
              <label htmlFor='rememberme'>Remember Me</label>
            </div>
            <button className='forget-password'>Forget password?</button>
          </div>
          <button className='login'>Login</button>
          <div className='create-acc'>
            <p>
              Don’t have an account?{' '}
              <button onClick={createNewAccount} className='forget-password'>
                {' '}
                Create an account
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

export default Login;
