import React, { useState } from "react";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-screen flex flex-col items-center bg-gray-200">
      <Navbar />
      <Landing />
    </div>
  );
}

export default App;
