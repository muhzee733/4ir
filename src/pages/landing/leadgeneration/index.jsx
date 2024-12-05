import Layout from "@/components/layout";
import React from "react";
import "./leadgeneration.css";
import SecondSecBox from "@/components/Second-Section Box/Second-sec-box";
import Para from "@/components/Typography/Para";
import { FiCheck } from "react-icons/fi";
import H1 from "@/components/Typography/H1";
import H3 from "@/components/Typography/H3";
import H5 from "@/components/Typography/H5";
import H6 from "@/components/Typography/H6";
import H2 from "@/components/Typography/H2";
import Accordian from "@/components/Accordian/Accordian";
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
      title: "Frustrated with outdated sales processes or limited AI tool",
    },
    {
      id: 4,
      title: "Trouble delivering personalized experiences for prospect.",
    },
    {
      id: 5,
      title: "Difficulty maintaining quality conversations across time zones.",
    },
    {
      id: 6,
      title: "Struggling to scale without skyrocketing costs.",
    },
  ];
  // const Accordian=[
  //   {
  //     id: 1,
  //     accordianid: "headingOne",


  //   }
  // ]
  return (
    <Layout>
      {/* shahbaz */}
      <section>
        <div className="main-wrapper">
          <div className="container-fluid">
            <div className="row row1">
              <div className="col-lg-6 col-md-6 col-sm-12 colum1">
                <div className="figure1 d-flex customScreen">
                  <figure>
                    <img
                      src="/images/4IR-logo-main.png"
                      className="bannerImg1"
                    />
                  </figure>
                </div>
                <H1
                  title="Supercharge Your Sales Teams With "
                  breakpoint={true}
                  spanTitle="AI-Driven Solutions."
                />
                <Para
                  title="Say goodbye to the stress of sales teams and hello to human-like AI that works 24/7."
                  className="bannerpara"
                />
                <div className="my-4 bannerSpandiv d-flex justify-content-between">
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
                <div className="banner-btn">
                  <button href="#" className="btn-1">
                    Book a free Demo
                  </button>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-end align-items-center customScreen">
                <div className="figure2 mt-5">
                  <figure>
                    <img
                      className="bannerImg2"
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

      <section className="section2">
        <div className="second2-wrapper">
          <div className="container">
            <div className="row">
              <div className="section2heading d-flex justify-content-center">
                <H5
                  title="Sales can be tough — especially when you're juggling a mountain of leads, customer expectations, and an ever-changing market. If you're feeling the pressure, you're not alone. Many businesses face challenges that slow down growth and drain resources."
                  className="text-capitalize text-center"
                />
              </div>
            </div>

            <div className="row section2center">
              <SecondSecBox SecondBox={SecondBox} />
            </div>

            <div className="section2bottom">
              <H6
                title="Are these common sales challenges holding your business back?"
                className="section2h6"
              />
              <button className="btn-1 ">It’s Time To Make A Change</button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="section3-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="section3-span1 text-white text-uppercase text-center">
                  introducing
                </div>
                <div className="section3-span1 primary text-uppercase text-center">
                  AI Talk Assist
                </div>
                <div className="section3-main">
                  <H5
                    title="The Revolutionary Voice AI Platform"
                    className="text-center section3h5"
                  />
                </div>
                <p className="text-center">
                  Transform your sales process in just two days—no long wait
                  times, hassle
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Azaan */}
      <section className="asked-question">
        <div className="asked-question-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="frequently-question-content">
                  <H2 title="Frequently Asked Question" />
                  <Para title="Book a Demo if you have any more questions." />
               <Accordian />
                </div>
              </div>
              <div className="col-lg-6"></div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
