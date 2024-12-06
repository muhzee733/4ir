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
import Card1 from "@/components/cards/Card1";
import H2 from "@/components/Typography/H2";
import Accordian from "@/components/Accordian/Accordian";
import Mediallayers from "@/images/mediallayers.png"
import mediaframe from "@/images/mediaframe.png"
import cardsStats from "@/images/cardsStats.png"
import Productstats from "@/images/Productstats.png"
import H4 from "@/components/Typography/H4";
import { GiSevenPointedStar } from "react-icons/gi";
import Image from "next/image";
import Calltoaction from "@/components/CalltoAction/Calltoaction";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


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

  const Aicontent = [
    {
      id: 1,
      title: "Save Time, Boost Sales by 70%",
      para: "With our 100% Done-For-You solution, we handle everything from setup to customization, so you can focus on growing your business.",
    },
    {
      id: 2,
      title: "Always Evolving",
      para: "Our self-learning AI adapts to new technologies, keeping your business ahead of the curve without the need for constant upgrades",
    },
    {
      id: 1,
      title: "Secure & Scalable",
      para: "Bank-level encryption ensures your data stays safe, while our scalable platform grows with your business.",
    },
  ]
  const Accordianapi = [
    {
      id: 1,
      accordianid: "headingOne",
      collapseid: "collapseOne",
      datatargetid: "#collapseOne",
      title: "How will AI Talk Assist benefit my business?",
      value: true,
      heading:
        "We prioritize the security of your data and customer interactions. Our AI Voice Calling Assistant employs robust security measures:",
      ulitems: [
        {
          liItems:
            "Data Encryption: Sensitive customer data is encrypted to prevent unauthorized access.",
        },
        {
          liItems:
            "Secure Cloud Infrastructure: Our platform is hosted on highly secure cloud infrastructure.",
        },
        {
          liItems:
            "Regular Security Audits: We conduct regular security audits to identify and address potential vulnerabilities.",
        },
        {
          liItems:
            "Compliance with Regulations: We adhere to industry-specific regulations and data privacy standards.",
        },
      ],
      heading2:
        "By prioritizing security, we ensure the protection of your business and customer data.",
    },
    {
      id: 2,
      accordianid: "headingTwo",
      collapseid: "collapseTwo",
      title: "How does it work?",
      datatargetid: "#collapseTwo",
      value: true,
      heading:
        "We prioritize the security of your data and customer interactions. Our AI Voice Calling Assistant employs robust security measures:",
      ulitems: [
        {
          liItems:
            "Data Encryption: Sensitive customer data is encrypted to prevent unauthorized access.",
        },
        {
          liItems:
            "Secure Cloud Infrastructure: Our platform is hosted on highly secure cloud infrastructure.",
        },
        {
          liItems:
            "Regular Security Audits: We conduct regular security audits to identify and address potential vulnerabilities.",
        },
        {
          liItems:
            "Compliance with Regulations: We adhere to industry-specific regulations and data privacy standards.",
        },
      ],
      heading2:
        "By prioritizing security, we ensure the protection of your business and customer data.",
    },
    {
      id: 3,
      accordianid: "headingThree",
      collapseid: "collapseThree",
      title: "Is it easy to use?",
      datatargetid: "#collapseThree",
      value: true,
      heading:
        "We prioritize the security of your data and customer interactions. Our AI Voice Calling Assistant employs robust security measures:",
      ulitems: [
        {
          liItems:
            "Data Encryption: Sensitive customer data is encrypted to prevent unauthorized access.",
        },
        {
          liItems:
            "Secure Cloud Infrastructure: Our platform is hosted on highly secure cloud infrastructure.",
        },
        {
          liItems:
            "Regular Security Audits: We conduct regular security audits to identify and address potential vulnerabilities.",
        },
        {
          liItems:
            "Compliance with Regulations: We adhere to industry-specific regulations and data privacy standards.",
        },
      ],
      heading2:
        "By prioritizing security, we ensure the protection of your business and customer data.",
    },
    {
      id: 4,
      accordianid: "headingFour",
      collapseid: "collapseFour",
      title: "Is it secure?",
      datatargetid: "#collapseFour",
      value: false,
      heading:
        "We prioritize the security of your data and customer interactions. Our AI Voice Calling Assistant employs robust security measures:",
      ulitems: [
        {
          liItems:
            "Data Encryption: Sensitive customer data is encrypted to prevent unauthorized access.",
        },
        {
          liItems:
            "Secure Cloud Infrastructure: Our platform is hosted on highly secure cloud infrastructure.",
        },
        {
          liItems:
            "Regular Security Audits: We conduct regular security audits to identify and address potential vulnerabilities.",
        },
        {
          liItems:
            "Compliance with Regulations: We adhere to industry-specific regulations and data privacy standards.",
        },
      ],
      heading2:
        "By prioritizing security, we ensure the protection of your business and customer data.",
      show: "show",
    },
  ];
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
                <Para
                  title="Transform your sales process in just two days—no long wait times, no hassle."
                  className="text-center section3para"
                />

                <div className="text-center section3btn">
                  <button className="btn-1">Get Started with AI</button>
                </div>
              </div>
            </div>

            <div className="row d-flex justify-content-center">
              <Card1 content={Aicontent} layout={false} />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="section4-wrapper">
          <div className="container-fluid ">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="section4heading text-center">
                  <H1 title="Give It a Try" className="section4h1" />
                </div>
              </div>
            </div>

            <div className="row text-center">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="section4-img text-center">
                  <Image src={mediaframe} className="musicicon" />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="div col-lg-12 text-center">
                <div className="section4bottom">
                  <H4 title="The AI landscape is constantly evolving. Outdated" className="section4h4" />
                  <H4 title="technology can hinder your growth." className="section4h4" />

                </div>
                <button className="btn-1">Explore AI Talk Assets Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="section5-wrapper">
          <div className="container">

            <div className="row text-center">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="section5heading">
                  <H1
                    title="How Does 4IR AI Voice Calling"
                    className="section5h1"
                  />
                  <H1
                    title="Exactly Work?"
                    className="section5h1"
                  />
                </div>
                <Para title="Imagine a future where your lead generation process is automated, efficient, and highly effective. 4IR AI Voice Calling makes this a reality. Here's how it works:" className="section5para1" />
              </div>
            </div>

            <div className="row customborder section5-2ndrow">

              <div className="col-lg-12 col-md-12 col-sm-12">
                <H3 title="1. Lead Capture and CRM Integration" className="section5h3" />
                <div className="d-flex ">
                  <GiSevenPointedStar className="primary me-3" size={20} /><Para title="Your sales or marketing team generates leads, which are then added to your CRM system." className="section5para2" />
                </div>
                <div className="d-flex ">
                  <GiSevenPointedStar className="primary me-3" size={20} /><Para title="4IR AI Voice Calling integrates seamlessly with your CRM, providing real-time access to lead data." className="section5para2" />
                </div>
              </div>

              <div className="col-lg-7 col-md-12 col-sm-12 text-white  CMargin">
                <div className=" section5-quaters">
                  <Image src={cardsStats} className="cardsStats " />
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12 text-white">
                <div className="customborder section5-quaters">
                  <Image src={Productstats} className="Productstats" />
                </div>
              </div>
            </div>

            <div className="row d-flex justify-content-center">

              <div className="col-lg-6 col-md-6 col-sm-6 customborder section5-2ndrow section5-CustomMargin section5-Customwidth">
                <div className="">
                  <H3 title="2. Automated Outbound Calling" className="section5h3" />
                  <div className="d-flex">
                    <GiSevenPointedStar className="primary me-3" size={40} /><Para title="The AI-powered system automatically dials leads, saving you time and resources." className="section5para2" />
                  </div>
                  <div className="d-flex ">
                    <GiSevenPointedStar className="primary me-3" size={40} /><Para title="It can handle a large volume of calls simultaneously, ensuring no lead is missed." className="section5para2" />
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-6  customborder section5-2ndrow section5-Customwidth">
                <div className="">
                  <H3 title="3. Intelligent Conversations" className="section5h3" />
                  <div className="d-flex ">
                    <GiSevenPointedStar className="primary me-3" size={40} /><Para title="The AI-powered system automatically dials leads, saving you time and resources." className="section5para2" />
                  </div>
                  <div className="d-flex ">
                    <GiSevenPointedStar className="primary me-3" size={40} /><Para title="It can handle a large volume of calls simultaneously, ensuring no lead is missed." className="section5para2" />
                  </div>
                </div>
              </div>

            </div>

            <div className="row">
              <div className="col-lg-12 col-md-12 customborder section5-2ndrow">
                <H3 title="2. Automated Outbound Calling" className="section5h3" />
                <div className="d-flex ">
                  <GiSevenPointedStar className="primary me-3" size={23} /><Para title="The AI-powered system automatically dials leads, saving you time and resources." className="section5para2" />
                </div>
                <div className="d-flex ">
                  <GiSevenPointedStar className="primary me-3" size={23} /><Para title="It can handle a large volume of calls simultaneously, ensuring no lead is missed." className="section5para2" />
                </div>
              </div>
            </div>

            <div className="row text-center section5lastpara">
              <Para title="By automating these tasks, 4IR AI Voice Calling not only saves you time and money but also improves lead quality and conversion rates. It empowers your team to focus on higher-value activities, such as strategic planning and relationship building." />
            </div>

          </div>
        </div>
      </section>

      <section>
        <div className="section6-wrapper">
          <div className="container">
            <div className="row text-center">
              <div className="section6h1">
                <H1
                  title="Industries Revolutionized by 4IR AI"
                  className="section5h1"
                />
                <H1
                  title="Voice Calling"
                  className="section5h1"
                />
              </div>
              <Para title="4IR AI Voice Calling is a versatile tool that can significantly impact various industries. Here are a few key sectors where this technology can be a game-changer:" className="section6para1"/>
            </div>

          </div>
        </div>
      </section>

      {/* Azaan */}
      <section className="testimonial"></section>
      {/* <Swiper
         autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      modules={[Autoplay,Navigation, Pagination]} // Add modules
      navigation // Enable navigation arrows
      pagination={{ clickable: true }} // Enable pagination
      spaceBetween={30} // Space between slides
      slidesPerView={1} // Number of slides to show
    >
      <SwiperSlide>
        <div >Slide 1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div>Slide 2</div>
      </SwiperSlide>
      <SwiperSlide>
        <div>Slide 3</div>
      </SwiperSlide>
    </Swiper> */}
      <section className="calltoaction">
        <div className="calltoaction-wrapper">
          <div className="container">
            <Calltoaction />
          </div>
        </div>
      </section>
      <section className="asked-question">
        <div className="asked-question-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="frequently-question-content">
                  <H2 title="Frequently Asked Question" />
                  <Para title="Book a Demo if you have any more questions." />
                  <div class="accordion" id="accordionExample">
                    {Accordianapi.map((items, index) => {
                      return <Accordian items={items} index={index} />;
                    })}
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="bookDemo-content">
                  <H2 title="Book a" spanTitle="Demo" breakpoint={true} />
                  <Para title="Ready to see AI Talk Assist in action? Schedule your FREE demo now and discover how it can transform your customer interactions and boost productivity! Pick a time that works best for you below." />
                  <iframe
                    className="calendly-inline-widget"
                    src="https://calendly.com/bkrevoy/60-minute-meeting-for-4ir-consulting?background_color=1a1a1a&text_color=ffffff"
                    style={{ minWidth: "100%", height: "500px" }}
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
