import "./index.css";
import React, { useState, useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import Layout from "@/components/layout";
import Head from "next/head";
import H1 from "@/components/typography/H1";
import H2 from "@/components/typography/H2";
import H3 from "@/components/typography/H3";
import Para from "@/components/typography/Para";
import Robot from "@/images/landing/robot.png";
import RoundBlue from "@/images/landing/RoundBlue.gif";
import DrivenSolution from "@/images/AI-DrivenSolutions.png";
import Innovative from "@/images/InnovativeTechConsulting.png";
import AiAppointment from "@/images/AIAppointmentMarketing.png";
import Effect from "@/images/landing/Effect.png";
import Text from "@/svg/service/text.svg";
import Graph from "@/svg/service/graph.svg";
import Image from "next/image";
import Box1 from "@/components/Box/Box1/Box1";
import Box2 from "@/components/Box/Box2/Box2";
import ExpertGuidence from "@/images/servicesiconbold/ExpertGuidence.png";
import ExpertGuidenceBold from "@/images/servicesiconbold/ExpertGuidenceBold.png";
import CuttingEdge from "@/images/servicesiconbold/Cutting-EdgeTechnology.png";
import CuttingEdgeBold from "@/images/servicesiconbold/Cutting-EdgeTechnologybold.png";
import StreamLine from "@/images/servicesiconbold/Streamlined.png";
import StreamLineBold from "@/images/servicesiconbold/StreamlinedBold.png";
import ServiceTitle from "@/svg/service-title.svg";
import Strategic from "@/images/services/strategicconsulting.png";
import AiSolution from "@/images/services/AIsolutions.png";
import Training from "@/images/services/trainingandeducation.png";
import Expertise from "@/components/Expertise/Expertise";
import Team from "@/components/Team/Team";

const Index = () => {
  
  const ServiceBox = [
    {
      id: 1,
      image1: ExpertGuidence,
      image2: ExpertGuidenceBold,
      image3: ServiceTitle,
      title: "Expert Guidance:",
      para: "Unlock unparalleled insights and guidance for AI consulting and product solutions.",
      layout: true,
    },
    {
      id: 2,
      image1: CuttingEdge,
      image2: CuttingEdgeBold,
      image3: ServiceTitle,
      title: "Cutting-Edge Technology",
      para: "Access tailored AI products for staying ahead in todays landscape.",
      layout: true,
    },
    {
      id: 3,
      image1: StreamLine,
      image2: StreamLineBold,
      image3: ServiceTitle,
      title: "Streamlined Training",
      para: "Equip your team with AI expertise for confident navigation.",
      layout: true,
    },
  ];

  const Services = [
    {
      id: 1,
      main: "about-section section-b-space section-mb-space",
      heading: "Strategic Consulting.",
      title1: "What we",
      title2: "Offer",
      number: "01.",
      paragraph:
        "Crafting influential content requires a deep understanding of your target audience. Pinpoint your ideal demographic and familiarise yourself with their needs, passions, and sources of concern.",
      ticktitle: [
        "Attract your audience with captivating facts in your commercials",
        "Let’s engage with the customers effectively",
        "Brighten up your content with appealing graphics ",
      ],
      image: Strategic,
      aos: "fade-left",
      link: "/services/StrategicCounseling",
      layout: false,
    },
    {
      id: 2,
      main: "about-section right-version section-b-space section-mb-space",
      heading: "AI Talk Assist",
      number: "02.",
      aos: "fade-right",
      paragraph: `"Experience the convenience of AI-driven calls. Let technology handle your communication needs effortlessly, saving you time and hassle."`,
      ticktitle: [
        "AI Talk Assist – AI-driven tool for personalized",
        "24/7 customer service.",
        "CRM Integration – Connects with your CRM for valuable insights.",
        "Automates Tasks – Manages lead generation, appointment scheduling, and support.",
      ],
      image: AiSolution,
      link: "/services/AitalkAssist",
      color: "rgb(0 189 255)",
      layout: true,
    },
    {
      id: 3,
      main: "about-section section-b-space",
      heading: "Training & Education",
      aos: "fade-left",
      number: "03.",
      paragraph:
        "Experience the power of 4irinc AI and revolutionise your social media presence. Say goodbye to writer's block and hello to compelling hashtags, captivating captions, and endless content possibilities.",
      ticktitle: [
        "Curate endless content possibilities that make your website shine.",
        "Generates compelling hashtags that skyrocket your reach",
        "Unlock a world of unlimited content ideas that keep your followers hooked.",
      ],
      link: "/services/TrainingEducation",
      image: Training,
      layout: false,
    },
  ];

  return (
    <>
      <Head>
        <title>Fourth Industrial Revolution Inc.</title>
      </Head>
      <Layout>
        <section className="setbackground">
          <div className="main-wrapper">
            <div className="container-fluid">
              <div className="row " style={{ minHeight: "100vh" }}>

                <div className=" col-lg-12 col-xl-5 col-md-12 col-sm-12 d-flex justify-content-center align-items-center flex-column">
                  <div className="section1h3"><H3 title="FOURTH INDUSTRIAL REVOLUTION INC" /></div>
                  <div className="text-center px-5 section1h1">
                    <H1 breakpoint={true}
                      spantitle="EMPOWER YOUR BUSINESS"
                      title="WITH AI-DRIVEN SUCCESS"
                    /></div>
                  <button className="btn-3 mt-5 d"><span className="d-flex align-items-center">Book a Demo <FiArrowRight className="ms-2" /></span></button>
                </div>

                <div className="col-xl-7 d-flex align-items-end justify-content-end custom-hideindex">
                  <div className="landing-robot me-5 position-relative">
                    <figure className="indexbannerImg2 position-absolute ">
                      <Image src={RoundBlue} width={482} height={515} alt="" />
                    </figure>
                    <figure className="m-0 text-end position-absolute indexbannerImg1">
                      <Image src={Robot} alt="robot" width={400} height={490} className="indexBannerImg" />
                    </figure>


                    <div className="position-absolute text-white index-ai-text1">AI-Driven Solutions</div>
                    <Image src={Effect} width={190} height={30} className="position-absolute index-ai-img1" />
                    <Image src={DrivenSolution} width={28} className="position-absolute index-ai-subimg1" />

                    <div className="position-absolute text-white index-ai-text2">Business Growth Strategies</div>
                    <Image src={Effect} width={240} height={30} className="position-absolute index-ai-img2" />
                    <Image src={Graph} width={26} className="position-absolute index-ai-subimg2" />

                    <div className="position-absolute text-white index-ai-text3">Innovative Tech Consulting</div>
                    <Image src={Effect} width={230} height={30} className="position-absolute index-ai-img3" />
                    <Image src={Innovative} width={24} className="position-absolute index-ai-subimg3" />

                    <div className="position-absolute text-white index-ai-text4">Advanced Training Programs</div>
                    <Image src={Effect} width={260} height={30} className="position-absolute index-ai-img4" />
                    <Image src={Text} width={26} className="position-absolute index-ai-subimg4" />

                    <div className="position-absolute text-white index-ai-text5">AI Appointment Marketing</div>
                    <Image src={Effect} width={240} height={30} className="position-absolute index-ai-img5" />
                    <Image src={AiAppointment} width={26} className="position-absolute index-ai-subimg5" />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="secondsection ">
          <div className="container">

            <div className="row ">
              <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12">
                <span className="section2about  ">About Us</span>
                <div className="row  ps-4 mt-3">
                  <span className="secondsection-H">
                    <H2 breakpoint={true}
                      spantitle="Empowering Your Business"
                      title=" In With AI Consulting And Product Solutions" />
                    <H3 title='In the digital world, our AI Writer supports a variety of artists' />
                    <Para paragraph="At Fourth Industrial Revolution Inc., we are dedicated to guiding businesses through the transformative power of artificial intelligence. With a team of seasoned experts at the helm, specializing in AI consulting and product solutions, we provide tailored AI solutions that propel your business into the future. Our mission is simple yet ambitious: to empower organizations to thrive in the dynamic landscape of the Fourth Industrial Revolution." />
                  </span>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center border">
                {/* <Mic
                  isListening={isListening}
                  isLoading={isLoading}
                handleMicClick={handleMicClick}
                /> */}
              </div>
            </div>

            <div className="row d-flex mt-5">
              <Box1 ServiceBox={ServiceBox} />
            </div>

          </div>
        </section>

        <section className="thirdsection py-3">
          <Box2 Services={Services}/>
        </section>

        <section className="forthsection">
          <Expertise/>
        </section>

        <section>
          <Team breakpoint={true}/>
        </section>
      </Layout>
    </>
  );
};

export default Index;
