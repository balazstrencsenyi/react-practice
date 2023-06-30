import React, { useState } from "react";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavbarClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
        <h1>Portfolio</h1>
      <div className="navbar">
        <ul>
          <li id={"topLi"}onClick={() => handleNavbarClick("home")}>Home</li>
          <li className={"liEl"} onClick={() => handleNavbarClick("about-us")}>About us</li>
          <li className={"liEl"} onClick={() => handleNavbarClick("team")}>Team</li>
          <li className={"liEl"} onClick={() => handleNavbarClick("past-works")}>Past Works</li>
          <li className={"liEl"} onClick={() => handleNavbarClick("blog")}>Blog</li>
          <li className={"liEl"} onClick={() => handleNavbarClick("careers")}>Careers</li>
          <li id={"bottomLi"} onClick={() => handleNavbarClick("contact-us")}>Contact</li>
        </ul>
      </div>
      <div className={currentPage === "home" ? "content" : "hidden"}>
        <h2>Home</h2>
        <p>My name is Wishversum</p>
      </div>
      <div className={currentPage === "about-us" ? "content" : "hidden"}>
        <h2>about us</h2>
        <p>My projects</p>
      </div>
      <div className={currentPage === "team" ? "content" : "hidden"}>
        <h2>team</h2>
        <p>About me</p>
      </div>
      <div className={currentPage === "past-works" ? "content" : "hidden"}>
        <h2>past works</h2>
        <p>Contact me</p>
      </div>
       <div className={currentPage === "blog" ? "content" : "hidden"}>
        <h2>blog</h2>
        <p>Contact me</p>
      </div>
       <div className={currentPage === "careers" ? "content" : "hidden"}>
        <h2>Careers</h2>
        <p>Contact me</p>
      </div>
       <div className={currentPage === "contact-us" ? "content" : "hidden"}>
        <h2>Contact us</h2>
        <p>Contact me</p>
      </div>
    </div>
  );
}

export default App;
