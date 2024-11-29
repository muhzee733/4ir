import "./index.css";
import React ,{useState , useEffect} from "react";
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
import Text from "@/svg/service/text.svg"
import Graph from "@/svg/service/graph.svg"
import Image from "next/image";
import Mic from "@/components/Mic/Mic"
import useSound from 'use-sound';
// import boopSfx from "../../public/assets/audio/heatheraudio.mp3";

const Index = () => {
  const [isListening, setIsListening] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    const audioInstance = new Audio("../../public/assets/audio/heatheraudio.mp3");
    setAudio(audioInstance);
    return () => {
      audioInstance.pause();
      audioInstance.currentTime = 0;
    };
  }, []);

  // const handleMe=()=>{

  // }

  // const [play] = useSound(audio);


  // const handleMicClick = () => {
  //   setIsLoading(true);
  //   setIsListening((prev) => {
  //     if (prev) {
  //       if (audio) {
  //         audio.pause();
  //         audio.currentTime = 0;
  //         setIsLoading(false);
  //       }
  //     } else {
  //       audio.play();
  //     }
  //     return !prev;
  //   });
  // };

  // const ServiceBox = [
  //   {
  //     id: 1,
  //     image1: ExpertGuide,
  //     image2: ExpertGuideBold,
  //     image3: ServiceTitle,
  //     title: "Expert Guidance:",
  //     para: "Unlock unparalleled insights and guidance for AI consulting and product solutions.",
  //     columnclass: "col-sm-6",
  //     firstChildClass: "service-box",
  //     secondChildClass: "service-icon",
  //     firstimageclass: "img-fluid outline-icon",
  //     secondimageClass: "img-fluid bold-icon",
  //     contentclass: "service-content",
  //     layout: false,
  //   },
  //   {
  //     id: 2,
  //     image1: CuttingEdge,
  //     image2: CuttingEdgeBold,
  //     image3: ServiceTitle,
  //     title: "Cutting-Edge Technology",
  //     para: "Access tailored AI products for staying ahead in todays landscape.",
  //     columnclass: "col-sm-6",
  //     firstChildClass: "service-box",
  //     secondChildClass: "service-icon",
  //     firstimageclass: "img-fluid outline-icon",
  //     secondimageClass: "img-fluid bold-icon",
  //     contentclass: "service-content",
  //     layout: false,
  //   },
  //   {
  //     id: 3,
  //     image1: StreamLine,
  //     image2: StreamLineBold,
  //     image3: ServiceTitle,
  //     title: "Streamlined Training",
  //     para: "Equip your team with AI expertise for confident navigation.",
  //     columnclass: "col-sm-6",
  //     firstChildClass: "service-box",
  //     secondChildClass: "service-icon",
  //     firstimageclass: "img-fluid outline-icon",
  //     secondimageClass: "img-fluid bold-icon",
  //     contentclass: "service-content",
  //     layout: false,
  //   },
  // ];

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
                  <span className=""><H3 title="FOURTH INDUSTRIAL REVOLUTION INC" /></span>
                  <span className="text-center px-5 ">
                    <H1 breakpoint={true}
                      spantitle="EMPOWER YOUR BUSINESS"
                      title="WITH AI-DRIVEN SUCCESS"
                    /></span>
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

        <section className="secondsection">
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
                  {/* </span> */}
                  <Para paragraph="At Fourth Industrial Revolution Inc., we are dedicated to guiding businesses through the transformative power of artificial intelligence. With a team of seasoned experts at the helm, specializing in AI consulting and product solutions, we provide tailored AI solutions that propel your business into the future. Our mission is simple yet ambitious: to empower organizations to thrive in the dynamic landscape of the Fourth Industrial Revolution."/>
                  </span>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center border">
              <Mic
                isListening={isListening}
                isLoading={isLoading}
                // handleMicClick={handleMicClick}
              />
              </div>
            </div>

            <div className="row"> for cards</div>

          </div>
        </section>
      </Layout>
    </>
  );
};

export default Index;
