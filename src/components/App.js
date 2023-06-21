import React from "react";
import WordControl  from "./WordControl"
import SignIn from "./SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";



function App() {
  return (
   <Router>
    <Header />
    <Routes>
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/" element={<WordControl />} />
    </Routes>
   </Router>
  );
}

export default App;