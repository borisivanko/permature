import React, {useRef, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useAuth} from '../contexts/AuthContext';
import logo from '../assets/logo.svg';

const Signup = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const {signup} = useAuth();

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push('/');
    } catch {
      console.log();
    }
  };

  return (
    <>
      <header>
        <img src={logo} alt=''/>
      </header>
      <main>
        <div className='card-wrapper'>
          <form className='card' onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            {error && <div className='error'>{error}</div>}
            <div className='form-control'>
              <h3>E-Mail</h3>
              <input
                type='email'
                ref={emailRef}
                placeholder='example@example.com'
                required
              />
            </div>
            <div className='form-control'>
              <h3>Password</h3>
              <input
                type='password'
                ref={passwordRef}
                placeholder='******'
                required
              />
            </div>
            <div className='form-control'>
              <h3>Confirm Password</h3>
              <input
                type='password'
                ref={passwordConfirmRef}
                placeholder='******'
                required
              />
            </div>
            <div className='button-wrapper'>
              <button disabled={loading} type='submit'>
                Sign Up
              </button>
            </div>
          </form>
        </div>
        <p className='redirect'>
          Already have an account? <Link to='/login'>Log In</Link>
        </p>
      </main>
    </>
  );
};

export default Signup;
