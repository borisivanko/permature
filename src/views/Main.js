import React from 'react';
import Navbar from '../components/Navbar';
import Feed from '../components/Feed';

const Main = () => {
  return (
    <>
      <Navbar/>
      <main>
        <Feed/>
      </main>
    </>
  );
};

export default Main;
