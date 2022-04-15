import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
const Login = () => {
  const navigate = useNavigate()
  const createNewAccount = () =>{
    navigate('/registration');
  }
  return (
    <div className='login-container'>
      <div className='login-section'>
        <h4>Login</h4>
        <form>
          <div className='form-control'>
            <label htmlFor='email'>Username or Email</label>
            <input type='text' name='email' />
          </div>
          <div className='form-control'>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' />
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
              <button onClick={createNewAccount} className='forget-password'> Create an account</button>
            </p>
          </div>
        </form>
      </div>
      <div className="or">
        <hr />
        <p>or</p>
        <hr />
      </div>
    </div>
  );
}

export default Login