import React from 'react'
import Roll from "react-reveal/Roll";

import product1 from "../../assets/img/product1.png";
import product2 from "../../assets/img/product2.png";
import product3 from "../../assets/img/product3.png";
export default function Product() {
  return (
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
  )
}
