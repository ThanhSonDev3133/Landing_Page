import React, { useEffect } from "react";
import "./index.css";
import ScrollButton from "react-scroll-button";
import Roll from "react-reveal/Roll";
import Header from "../../HOCs/Header";
import Banner from "../../Component/Banner";
import Contact from "../../Component/Contact";
import Investor from "../../Component/Investor";
import Footer from "../../HOCs/Footer";
import Product from "../../Component/Product";
export default function Learning_Page() {
  return (
    <div className="home_page" id="home">
      <header>
      <Header/>
      <Banner/>
      </header>
      <div className="body">
        <div className="body_section">
          <div className="section_text">
            <Roll top>
              <h1>“Patience! Sometimes patience is the key to victory.”</h1>
            </Roll>
          </div>
          <div className="section_img">
            <img
              src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
              alt=""
            />
            <Roll top>
              <p>Name</p>
              <p>Function</p>
            </Roll>
          </div>
        </div>
        <Product/>
        <Contact/>
        <Investor/>
      </div>
      <Footer/>
      <div className="scroll-button">
        <ScrollButton
          targetId={"home"}
          behavior={"smooth"}
          buttonBackgroundColor={"#828282"}
          iconType={"arrow-up"}
        />
      </div>
    </div>
  );
}
