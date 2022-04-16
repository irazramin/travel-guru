import React from 'react';

const Registration = () => {
  return (
    <div className='login-container'>
      <div className='login-section'>
        <h4>Create an account</h4>
        <form>
          <div className='form-control'>
            <label htmlFor='fName'>First name</label>
            <input type='text' name='fName' />
          </div>
          <div className='form-control'>
            <label htmlFor='lName'>Last name</label>
            <input type='text' name='lName' />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Username or Email</label>
            <input type='text' name='email' />
          </div>
          <div className='form-control'>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' />
          </div>
          <div className='form-control'>
            <label htmlFor='cPassword'>Confirm password</label>
            <input type='password' name='cPassword' />
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
              <button className='forget-password'> Create an account</button>
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
}

export default Registration