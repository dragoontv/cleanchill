"use client";

import React from 'react'
import Link from "next/link";

const Hero = ({ toggleShowLogin }) => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-cnc-gradient">
        <h1 className="text-white text-4xl font-bold">Welcome to Clean N Chill Laundry</h1>
        <p className="text-gray-300 text-2xl my-4">Fast, clean, and affordable laundry services.</p>

        <div className="grid grid-cols-2 gap-8 mt-4 p-4]">
            {/* <Link href="pages/login"> */}
                <button onClick={toggleShowLogin} className="w-32 bg-blue-500 text-white px-6 py-2 rounded-lg shadow">
                Login
                </button>
                <button onClick={toggleShowLogin} className="w-32 bg-blue-500 text-white px-6 py-2 rounded-lg shadow">
                Sign Up
                </button>
            {/* </Link> */}
            <Link href="pages/dashboard">
                <button className="w-32 bg-green-500 text-white px-6 py-2 rounded-lg shadow">
                Service
                </button>
            </Link>
            <Link href="pages/navigation">
                <button className="w-32 bg-green-500 text-white px-6 py-2 rounded-lg shadow">
                Navigation
                </button>
            </Link>
        </div>
  </main>
  )
}

export default Hero