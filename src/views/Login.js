import React, {useRef, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useAuth} from '../contexts/AuthContext';
import logo from '../assets/logo.svg';

const Login = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();

  const {login} = useAuth();

  const history = useHistory();

  const handleSumbit = async (e) => {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push('/');
    } catch (error) {
      setError('Failed to log in');
    }

    setLoading(false);
  };

  return (
    <>
      <header>
        <img src={logo} alt=''/>
      </header>
      <main>
        <div className='card-wrapper'>
          <form className='card' onSubmit={handleSumbit}>
            <h2>Log In</h2>
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
            <div className='button-wrapper'>
              <button disabled={loading} type='submit'>
                Log In
              </button>
            </div>
          </form>
        </div>
        <p className='redirect'>
          Need an account? <Link to='/signup'>Sign Up</Link>
        </p>
      </main>
    </>
  );
};

export default Login;
