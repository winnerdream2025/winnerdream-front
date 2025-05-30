import React from 'react';
import Navbar from '../components/Navbar';

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="pt-4">
        {children}
      </main>
    </>
  );
}

export default MainLayout;

