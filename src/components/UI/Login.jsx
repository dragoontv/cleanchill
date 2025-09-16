"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash, FaLinkedinIn } from "react-icons/fa";

const AuthPopup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="p-6">
      {/* Bubble Switcher */}
      <div className="relative flex w-full bg-white/10 backdrop-blur-md rounded-full p-1 mb-6">
      <motion.div
        layout
        className="absolute top-0 left-0 w-1/2 h-full bg-white/20 rounded-full"
        initial={false}
        animate={{
          x: isLogin ? "0%" : "calc(100% - 100%)",
          opacity: 1,
          scale: 1,
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />

        <button
          onClick={() => setIsLogin(true)}
          className={`relative z-10 w-1/2 py-2 text-center font-semibold transition-colors ${
            isLogin ? "text-white" : "text-gray-300"
          }`}
        >
          Login
        </button>
        <button
          onClick={() => setIsLogin(false)}
          className={`relative z-10 w-1/2 py-2 text-center font-semibold transition-colors ${
            !isLogin ? "text-white" : "text-gray-300"
          }`}
        >
          Register
        </button>
      </div>

      {/* Animated Form Container */}
      <motion.div
        key={isLogin ? "login" : "register"}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
      >
        <form className="flex flex-col gap-3">
          {!isLogin && (
            <div>
              <label htmlFor="username" className="input-label">
                Username
              </label>
              <input id="username" type="text" className="input" />
            </div>
          )}

          <div>
            <label htmlFor="email" className="input-label">
              Email
            </label>
            <input id="email" type="email" className="input" />
          </div>

          <div>
            <label htmlFor="password" className="input-label">
              Password
            </label>
            <div className="relative">
              <input
                className="input pr-8"
                id="password"
                type={showPassword ? "text" : "password"}
              />
              {showPassword ? (
                <FaEye
                  className="text-white absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <FaEyeSlash
                  className="text-white absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>
          </div>

          {!isLogin && (
            <div>
              <label htmlFor="confirmPassword" className="input-label">
                Confirm Password
              </label>
              <input id="confirmPassword" type="password" className="input" />
            </div>
          )}
        </form>

        {/* Submit */}
        <button className="primary-btn mt-4 w-full">
          {isLogin ? "Login" : "Register"}
        </button>

        {/* Social Auth */}
        <p className="text-center text-white text-sm my-3">
          or {isLogin ? "login" : "register"} with
        </p>
        <div className="flex gap-6 justify-center">
          <div className="bg-white w-9 h-9 rounded-full flex items-center justify-center shadow-custom-inset hover:scale-110 transition-all duration-300">
            <FcGoogle className="text-3xl" />
          </div>
          <div className="bg-blue-600 w-9 h-9 rounded-full flex items-center justify-center shadow-custom-inset hover:scale-110 transition-all duration-300">
            <FaLinkedinIn className="text-2xl text-white" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthPopup;
