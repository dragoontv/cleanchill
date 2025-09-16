"use client";

import React, { useState } from "react";

import Hero from "@/components/Hero/Hero";
import ShowLogin from "@/components/UI/ShowLogin";

// const bgImage = {
//   width: "100%",
//   height: "100%",
//   backgroundImage: "url('Assets/bgImage.png')",
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   backgroundRepeat: "no-repeat",
//   filter: "blur(6px)"
// }

export default function LandingPage() {
  const [showLogin, setShowLogin] = React.useState(false);

  const toggleShowLogin = () => {
    setShowLogin((prev) => !prev);
  };

  return (
    <>
      <main>
        <Hero toggleShowLogin={toggleShowLogin} />
      </main>

      {/*  Show Login Popup */}
      <ShowLogin showLogin={showLogin} toggleShowLogin={toggleShowLogin} />
    </>
  );
}
