import Layout from "@/components/layout";
import React from "react";
import "./leadgeneration.css";
import H4 from "@/components/Typography/H4";
import SecondSecBox from "@/components/Second-Section Box/Second-sec-box";
import H2 from "@/components/Typography/H2";
import Para from "@/components/Typography/Para";
import { FiCheck } from "react-icons/fi";
import H1 from "@/components/Typography/H1";
import H5 from "@/components/Typography/H5";
import H6 from "@/components/Typography/H6";
// import api from "../../../../public/video/api.mp4"

const Index = () => {
  const SecondBox = [
    {
      id: 1,
      title: "Losing leads due to slow responses.",
    },
    {
      id: 2,
      title: "Overwhelmed by too many leads and not enough follow-ups.",
    },
    {
      id: 3,
      title: 
        "Frustrated with outdated sales processes or limited AI tool"
      
    },
    {
      id: 4,
      title: "Trouble delivering personalized experiences for prospect.",
    },
    {
      id: 5,
      title: 
        "Difficulty maintaining quality conversations across time zones."
    },
    {
      id: 6,
      title: "Struggling to scale without skyrocketing costs.",
    },
  ];
  return (
    <Layout>
      {/* shahbaz */}
      <section>
        <div className="main-wrapper text-white">
          <div className="container-fluid">
            <div className="row pt-5 row1">
              <div className="col-lg-6 col-md-6 col-sm-12 colum1">
                <div className="figure1">
                  <figure>
                    <img src="/images/4IR-logo-main.png" className="bannerImg1" width="200px" />
                  </figure>
                </div>
                <H2
                  title="Supercharge your Sales Teams with "
                  breakpoint={true}
                  spanTitle="AI-Driven Solutions."
                />
                <Para
                  title="Say goodbye to the stress of sales teams and hello to human-like AI that works 24/7."
                  className="py-4 bannerpara"
                />
                <div className="my-3 bannerSpandiv d-flex justify-content-around">
                  <span className="bannerSpan">
                    <FiCheck className="primary" /> No complex Software
                  </span>
                  <span className="bannerSpan">
                    <FiCheck className="primary" /> Easy-integration
                  </span>
                  <span className="bannerSpan">
                    <FiCheck className="primary" /> 24/7 Availability
                  </span>
                </div>
                <div className="banner-btn pt-3">
                  <button href="#" className="btn-1 fs-2">
                    Book a free Demo
                  </button>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-end align-items-center customScreen">
                <div className="figure2 mt-4">
                  {/* <iframe src={api} width={678} height={500}></iframe> */}

                  <figure>
                    <img
                      className='bannerImg2'
                      src="/images/man-in-frame.png"
                      alt="lead generation image"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Azan */}

      <section className="second-sec">
        <div className="second-sec-wrapper py-5">
          <div className="container">
            <div className="second-sec-content">
              <div className="second-sec-heading d-flex justify-content-center mb-4">
                <H4
                  title="Sales can be tough — especially when you're juggling a mountain of leads, customer expectations, and an ever-changing market. If you're feeling the pressure, you're not alone. Many businesses face challenges that slow down growth and drain resources."
                  className="text-white text-capitalize text-center"
                />
              </div>
              <div className="row d-flex align-items-center justify-content-center  ">
                <SecondSecBox SecondBox={SecondBox} />
              </div>
              <div className="second-sec-des d-flex justify-content-center flex-column  align-items-center">
                <H6
                  title="Are these common sales challenges holding your business back?"
                  className="text-white fs-2 mb-4"
                />
                <button className="btn-1 fs-2  px-5 ">
                  It’s time to make a change
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* anila */}
      {/* <section>
        <div className="sec-three-wrapper">
          <div className="container">
            <div className="sec-three-content align-items-center justify-content-center">
              <H1
                title="introducing"
                breakpoint={true}
                spanTitle=" ai talk assist"
                className="text-uppercase text-white text-center "
              />
              <div>
                <H5
                  title="The Revolutionary Voice AI Platform "
                  className={"text-center text-white mt-5 "}
                />
              </div>
              <p className="text-center fs-1 mt-5">
                Transform your sales process in just two days—no long wait
                times, hassle
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </Layout>
  );
};

export default Index;
