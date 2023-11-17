import React, { useState } from "react";
import "./css/Header.css";
import "./css/NavBar.css";
import Row from "./Row";
import Block from "./Block";

import banner from "../images/banner.png";
import amazon from "../images/amazon.png";
import banner2 from "../images/banner2.png";
import image13 from "../images/image13.png";
import image14 from "../images/image14.png";
import image15 from "../images/image15.png";
import image16 from "../images/image16.png";
import image17 from "../images/image17.png";

import formimg from "../images/formimg.png";
import logo from "../images/logo.png";
import Login from "../images/Login.png";
import Vector from "../images/Vector.png";
import Card from "../images/Card.png";
import content from "../images/content.png";
import Phone from "../images/Phone.png";
import f2 from "../images/f2.png";
import f22 from "../images/f22.png";
import f23 from "../images/f23.png";
// import f24 from "../images/f24.png";
import f1 from "../images/f1.png";
import a from "../images/a.png";



















const Homepage = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleGrabNow = (blockTitle) => {
    // Handle the "Grab Now" button click for the specific block
    console.log(`Grab Now clicked for ${blockTitle}`);
  };

  const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
    // Add more rows as needed
  ];
  return (
    <div style={{width:"1440px",margin:"auto"}}>
      {/* Header */}
      <header>
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <input type="text" className="search-box" placeholder="Search For brand, category, coupan" />
        <button
          className="auth-button"
          onClick={() => setLoggedIn(!isLoggedIn)}
        >
          {isLoggedIn ? "Logout" : "Login/Signup"}
        </button>
      </header>

      {/* Navigation */}
      <nav>
        <div className="nav11" >
        <a href="#" className="nav-link">
          Home
        </a>
        <a href="#" className="nav-link">
          Deals
        </a>
        <a href="#" className="nav-link">
          Coupon
        </a>
        <a href="#" className="nav-link">
          Stores
        </a>
        <a href="#" className="nav-link">
          Contact us
        </a>
        </div>
      </nav>

      <div className="banner">
        <img src={banner} alt="Banner" />
      </div>

      <Row>
        <Block
          title="Upto 60% off on Summer Appliances"
          logoSrc={amazon}
          onClick={() => handleGrabNow("Block 1")}
        />
        <Block
          title="Upto 60% off on Summer Appliances"
          logoSrc={amazon}
          onClick={() => handleGrabNow("Block 2")}
        />

        <Block
          title="Upto 60% off on Summer Appliances"
          logoSrc={amazon}
          onClick={() => handleGrabNow("Block 1")}
        />
        <Block
          title="Upto 60% off on Summer Appliances"
          logoSrc={amazon}
          onClick={() => handleGrabNow("Block 2")}
        />
        {/* Add more blocks as needed */}
      </Row>
      {/* Content goes here */}

      <div>
        <p className="heading">Deals Of The Day</p>

        <div className="flexdivs">
          <div className="block1">
            <div className="b1">
              <img src={amazon} alt="title" />
              <p className="b11">Amazon</p>
            </div>
            <div className="b2">
              <p className="b22">Flat 30% Off</p>
              <button className="button">Grab Now</button>
            </div>
          </div>

          <div className="block1">
            <div className="b1">
              <img src={amazon} alt="title" />
              <p className="b11">Amazon</p>
            </div>
            <div className="b2">
              <p className="b22">Flat 30% Off</p>
              <button className="button">Grab Now</button>
            </div>
          </div>
          <div className="block1">
            <div className="b1">
              <img src={amazon} alt="title" />
              <p className="b11">Amazon</p>
            </div>
            <div className="b2">
              <p className="b22">Flat 30% Off</p>
              <button className="button">Grab Now</button>
            </div>
          </div>

          <div className="block1">
            <div className="b1">
              <img src={amazon} alt="title" />
              <p className="b11">Amazon</p>
            </div>
            <div className="b2">
              <p className="b22">Flat 30% Off</p>
              <button className="button">Grab Now</button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <img className="banner2" src={banner2} alt="banner1" />
      </div>

      <div>
      <p className="heading1">Popular Membership</p>

      <div>
        <div className="flex2">
            <div>
                <img src={image14} alt="img" />
            </div>
            <div>
                <img src={image13} alt="img" />
            </div>
        </div>
        <div className="flex2">
            <div>
                <img src={image15} alt="img" />
            </div>
            <div>
                <img src={image16} alt="img" />
            </div>
        </div>
      </div>
      </div>

      <div className="div3">
        <div>
            <img className="input1" src={formimg} alt="img"  />
        </div>

        <div className="div33"> 
        <h2 className="title4" >Subscribe to our NewsLetter</h2>

        <p className="title3">Be the first to get exclusive offers
ands the latest news</p>

<input className="input2" type="text" placeholder="Enter your email address" />
<br></br><br></br>
<button className="button">SUBSCRIBE</button>

        </div>

      </div>

<div>
<p className="heading1">How It Works?</p>
</div>

     <div className="flex4" >

     
     

      <div className="h1">
        <img className="logo5" src={Login} alt="img1"/>
        <p className="title5">Signup</p>
        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there</p>
      </div>

      <div className="h1">
        <img className="logo5" src={Vector} alt="img1"/>
        <p className="title5">Choose coupan</p>
        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there</p>
      </div>

      <div className="h1">
        <img className="logo5" src={Card} alt="img1"/>
        <p className="title5">Grab Coupan</p>
        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there</p>
      </div>

      
      </div>

      <div className="banner4">
        <div>
        <img src={content}  alt="img"/>
        </div>
        <div>
        <img src={Phone}  alt="img"/>

        </div>
      </div>

      <div className="banner6">
        <div className="ban1">
         <img src={image17} alt="img" />
        </div>

        <div className="ban2">
        <p className="title7" >Popular Categories</p>

        <div>
        {/* <table> */}
      {/* <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          {/* Add more columns as needed */}
        {/* </tr>
      </thead> */} 
      {/* <tbody>
        {data.map((row) => (
          <tr key={row.id} style={{border:"1px solid black"}} >
            <td >{row.id}</td>
            <td>{row.name}</td>
            <td>{row.email}</td>
            {/* Add more cells as needed */}
          {/* </tr>
        ))}
      </tbody>
    </table> */} 

    <img src={a} alt="" />
        </div>
        </div>
      </div>

      <div className="footer" >
      <div>
            <img src={f1} alt="" />
        </div>
        <div>
            <img src={f2} alt="" />
        </div>
        <div>
            <img src={f22} alt="" />
        </div>
        <div>
            <img src={f23} alt="" />
        </div>
        
      </div>

      {/* ... */}
    </div>
  );
};

export default Homepage;
