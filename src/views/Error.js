import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../components/Navbar';

const Error = () => {
  return (
    <>
      <Navbar/>
      <main className='error-page'>
        <div>
          <h1>404</h1>
          <h2>Sorry, page not found</h2>
          <Link to='/'>Home Page</Link>
        </div>
      </main>
    </>
  );
};

export default Error;
