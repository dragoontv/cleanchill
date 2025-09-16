"use client";

import React, { useRef, useEffect, useState } from 'react';
import { motion } from "framer-motion";

import Login from './Login';
import SignUp from './SignUp';

const ShowLogin = ({ showLogin, toggleShowLogin }) => {
  
  const [showSignUp, setShowSignUp] = useState(false);
  
  const handleSignUp = () => {
    setShowSignUp(!showSignUp);
  };
  const showLoginRef = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (e.target === showLoginRef.current) {
        toggleShowLogin();
      }
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [toggleShowLogin]);


  return (
    <>
      {showLogin && (
        <div ref={showLoginRef} className="fixed top-0 left-0 w-full h-full z-50 overflow-y-auto">
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-[90%] sm:w-auto'>
            <motion.div className="rounded-2xl bg-white/10 backdrop-blur-md shadow-custom-inset sm:w-[600px] md:w-[380px]" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}>
              {showSignUp ? (
                <SignUp handleSignUp={handleSignUp} />
              ) : (
                <Login handleSignUp={handleSignUp} />
              )}
            </motion.div>
          </div>
        </div>
      )}
    </>
  )

}

export default ShowLogin