import React, { useEffect } from "react";
import img from "../../assets/img/logoVitaorga.png";
import img1 from "../../assets/img/Background-header.png";
import "./index.css";
import product1 from "../../assets/img/product1.png";
import product2 from "../../assets/img/product2.png";
import product3 from "../../assets/img/product3.png";
import icon from "../../assets/img/icon.png";
import ScrollButton from "react-scroll-button";
import Roll from "react-reveal/Roll";
import { Zoom } from "react-reveal";
export default function Learning_Page() {
  return (
    <div className="home_page" id="home">
      <header>
        <div className="header-fixed">
          <div className="header_top">
            <div className="header_left">
              <img src={img} alt="" />
            </div>
            <div className="header_right">
              <button className="btn ">
                Apply now <i class="fa fa-long-arrow-alt-right"></i>
              </button>
              <button className="btn btn_align_justify">
              <i class="fa fa-align-justify"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="header_banner">
          <div className="banner_img">
            <div className="banner_left"></div>
            <div className="banner_right">
              <span></span>
              <img src={img1} alt="" />
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
        <div className="body_content">
          <div className="content_section content_section_first">
            <div className="content_params content_params_md">
              <div className="body_text">
                <Roll top>
                  <h2>Why do we use it?</h2>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </Roll>
              </div>
            </div>
            <div className="content_params ">
              <div className="body_text">
                <div className="text text-change">
                  <Roll top>
                    <h2>Why do we use it?</h2>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </Roll>
                </div>
                <img src={product1} alt="" />
              </div>
            </div>
          </div>
          <div className="content_section content_section_second">
            <div className="content_params content_params_padding_second ">
              <div className="body_text ">
                <div className="text text_change_second textChange">
                  <Roll top>
                    <h2>Why do we use it?</h2>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </Roll>
                </div>
                <img src={product2} alt="" />
              </div>
            </div>
            <div className="content_params content_params_padding_second ">
              <div className="body_text ">
                <div className="text textChange">
                  <Roll top>
                    <h2>Why do we use it?</h2>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </Roll>
                </div>
              </div>
            </div>
            <div className="content_params  content_params_padding_second_none">
              <div className="body_text text_change_md">
                <div className="text textChange">
                  <Roll top>
                    <h2>Why do we use it?</h2>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </Roll>
                </div>
              </div>
            </div>
            <div className="content_params  content_params_padding_second_none">
              <div className="body_text">
                <div className="text text_change_second textChange">
                  <Roll top>
                    <h2>Why do we use it?</h2>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </Roll>
                </div>
                <img src={product2} alt="" />
              </div>
            </div>
          </div>
          <div className="content_section content_section_third">
            <div className="content_params content_params_padding_third">
              <div className="body_text params_third_md">
                <div className="text textChange">
                  <Roll top>
                    <h2>Why do we use it?</h2>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </Roll>
                </div>
              </div>
            </div>
            <div className="content_params content_params_padding_third ">
              <div className="body_text">
                <div className="text text-change text_change_params">
                  <Roll top>
                    <h2>Why do we use it?</h2>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </Roll>
                </div>
                <img src={product3} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="body_icon">
          <div className="icon_img">
            <img src={icon} alt="" />
          </div>
          <div className="icon_form">
            <div className="form_text">
              <Roll top>
                <h2>Join 2,000+ subscribers</h2>
                <p>Stay in the loop with everything you need to know.</p>
              </Roll>
            </div>
            <div className="form_contact">
              <div className="form-group">
                <Roll top>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                  <button className="btn btn-success"> Subcribe</button>
                </Roll>
              </div>
              <Roll top>
                <p>We care about your data in our privacy policy</p>
              </Roll>
            </div>
          </div>
        </div>
        <div className="body_ourStore container-fluid">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 our_text">
              <Roll top>
                <p>Our locations</p>
                <h2>Visit our stores</h2>
                <p>Find us at these locations</p>
              </Roll>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="text_name">
                <Roll top>
                  <h3>Melbourne</h3>
                  <p>100 Flinders Street</p>
                  <p>Melbourne VIC 3000 AU</p>
                </Roll>
              </div>
              <div className="text_name">
                <Roll top>
                  <h3>Melbourne</h3>
                  <p>100 Flinders Street</p>
                  <p>Melbourne VIC 3000 AU</p>
                </Roll>
              </div>
              <div className="text_name">
                <Roll top>
                  <h3>Melbourne</h3>
                  <p>100 Flinders Street</p>
                  <p>Melbourne VIC 3000 AU</p>
                </Roll>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="text_name">
                <Roll top>
                  <h3>Melbourne</h3>
                  <p>100 Flinders Street</p>
                  <p>Melbourne VIC 3000 AU</p>
                </Roll>
              </div>
              <div className="text_name">
                <Roll top>
                  <h3>Melbourne</h3>
                  <p>100 Flinders Street</p>
                  <p>Melbourne VIC 3000 AU</p>
                </Roll>
              </div>
              <div className="text_name">
                <Roll top>
                  <h3>Melbourne</h3>
                  <p>100 Flinders Street</p>
                  <p>Melbourne VIC 3000 AU</p>
                </Roll>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer_vitao">
          <div className="footer_left">
            <div className="img_logo">
              <img src={img} alt="" />
            </div>
          </div>
          <div className="text">
            <Roll top>
              <p>© 2077 VitaOrga. All rights reserved.</p>
            </Roll>
          </div>
        </div>
      </footer>
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
