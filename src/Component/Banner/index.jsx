import React from 'react'
import { Zoom } from "react-reveal";
import img1 from "../../assets/img/Background-header.png";
import banner_md from '../../assets/img/banner_md.png'
export default function Banner() {
  return (
    <div className="header_banner">
    <div className="banner_img">
      <div className="banner_left"></div>
      <div className="banner_right">
        <span></span>
        <img src={img1} className="img_first" alt="" />
        <img src={banner_md} alt="" />
      </div>
    </div>
    <div className="banner_text">
      <div className="text-wellcome">
        <Zoom top>
          <h1>Welcome to</h1>
          <h1>VitaOrga</h1>
        </Zoom>
      </div>
      <div className="text_info">
        <Zoom bottom>
          <p>
            We partner with scientists, engineers and operators to build
            deeptech startups that slash emissions, remove carbon, and
            cool the planet.
          </p>
        </Zoom>
      </div>
      <Zoom bottom>
        <button className="btn ">
          Apply now <i class="fa fa-long-arrow-alt-right"></i>
        </button>
      </Zoom>
    </div>
  </div>
  )
}
