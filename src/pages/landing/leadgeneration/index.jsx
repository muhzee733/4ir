import Layout from "@/components/layout";
import { useState } from "react";
import "./aivoiceCalling.css";
import Para from "@/components/Typography/Para";
import H6 from "@/components/Typography/H6";
import { LuArrowRight } from "react-icons/lu";
import SiteLogo from "@/components/SiteLogo";
import YoutubeVideo from "@/components/YoutubeVideo";
import H2 from "@/components/Typography/H2";
import Card2 from "@/components/cards/Card2";
import Card4 from "@/components/cards/Card4";
import Card3 from "@/components/cards/Card3";
import Model from "@/components/Model/Model";
import Head from "next/head";
import AiPoweredCard from "../../../components/aiPoweredcard/aiPoweredCard"
import H3 from "@/components/Typography/H3";
export default function AiVoiceCalling() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const Leads = [
    {
      id: 1,
      img: "/images/vectors/icon-1.png",
      title: "Futile Lead Qualification",
      para: "Wasting time on low-quality leads.",
    },
    {
      id: 2,
      img: "/images/vectors/icon-2.png",
      title: "Manual Outreach",
      para: "Wasting time on low-quality leads.",
    },
    {
      id: 3,
      img: "/images/vectors/icon-3.png",
      title: "Delayed Follow-ups",
      para: "Wasting time on low-quality leads.",
    },
    {
      id: 4,
      img: "/images/vectors/icon-4.png",
      title: "Inconsistent Messaging",
      para: "Wasting time on low-quality leads.",
    },
    {
      id: 5,
      img: "/images/vectors/icon-5.png",
      title: "Futile Lead Qualification",
      para: "Wasting time on low-quality leads.",
    },
  ];
  const SeamslessApi = [
    {
      id: 1,
      title: "Identify High-Quality Leads",
      para: "Use advanced AI algorithms to identify and prioritize the most promising leads.",
    },
    {
      id: 2,
      title: "Automate Outreach",
      para: "Conduct personalized voice calls and email campaigns at scale.",
    },
    {
      id: 3,
      title: "Improve Conversion Rates",
      para: "Enhance lead engagement and drive more conversions.",
    },
    {
      id: 4,
      title: "Provide Real-Time Insights",
      para: "Gain valuable insights into lead behavior and campaign performance.",
    },
  ];
  const FutureCardapi = [
    {
      id: 1,
      title: "AI-Powered Lead Generation",
      description: "Identify and qualify high-quality leads.", className: "Salesaicards"
    },
    {
      id: 2,
      title: "Intelligent Scripting",
      description: "Generate dynamic scripts tailored to each lead", className: "Salesaicards"
    },
    {
      id: 3,
      title: "Automated Voice Calling",
      description: "Conduct personalized voice calls at scale.", className: "Salesaicards"
    },
    {
      id: 4,
      title: "Seamless Integration",
      description: "Easily integrate with your CRM and marketing tools.", className: "Salesaicards"
    },
  ]
  const aiPoweredIndustries = [
    {
      id: 1,
      title: "Real Estate",
      image: "/images/Real estate.png",
      para: "Identify potential car buyers, book test drives, and provide personalized product information."
    },
    {
      id: 2,
      title: "Automotive",
      image: "/images/automotive 1.png",
      para: "Identify potential car buyers, book test drives, and provide personalized product information."
    },
    {
      id: 3,
      title: "Financial Services",
      image: "/images/financial 1.png",
      para: "Identify potential car buyers, book test drives, and provide personalized product information."
    },
    {
      id: 4,
      title: "Insurance",
      image: "/images/insurance 1.png",
      para: "Identify potential car buyers, book test drives, and provide personalized product information."
    },
    {
      id: 5,
      title: "Healthcare Providers",
      image: "/images/first-aid-kit 1.png",
      para: "Identify potential car buyers, book test drives, and provide personalized product information."
    },
    {
      id: 6,
      title: "Pharmaceutical",
      image: "/images/pharmacy 1.png",
      para: "Identify potential car buyers, book test drives, and provide personalized product information."
    },
  ];
  const aiPoweredIndustriescard2 = [
    {
      id: 1,
      title: "Collage and Universities",
      image: "/images/university 1.png",
      para: "Identify potential car buyers, book test drives, and provide personalized product information."
    },
    {
      id: 2,
      title: "Online Education Providers",
      image: "/images/gratitude 1.png",
      para: "Identify potential car buyers, book test drives, and provide personalized product information."
    },
    {
      id: 3,
      title: "Software Companies",
      image: "/images/computer-business 1.png",
      para: "Identify potential car buyers, book test drives, and provide personalized product information."
    },
    {
      id: 4,
      title: "Hardware Companies",
      image: "/images/configuration 1.png",
      para: "Identify potential car buyers, book test drives, and provide personalized product information."
    }
  ]
  return (
    <>

      <Head>
        <title>4IR - Lead Generation</title>
      </Head>
      <Layout>

        <section className="banner">
          <div className="banenr-wrapper">
            <div className="container">
              <div className="banner-content">
                <div className="banner-logo d-flex flex-column align-items-center">
                  <figure className="text-center">
                    <SiteLogo width="100px" height="auto" />
                  </figure>
                  <div className="banner-heading-top">
                    <Para title="Tired of Chasing Leads?" />
                  </div>
                  <div className="banner-second-heading text-center">
                    <h1>
                      Let <span>AI Handle</span> The Heavy Lifting
                    </h1>
                    <p>
                      Effortlessly supercharge manual lead generation and <br />{" "}
                      calling processes with our{" "}
                      <span className="text-white fw-bold">
                        AI-powered solution.
                      </span>
                    </p>
                    <H6
                      title="24/7 Availability . Easy-Integration . No complex Software"
                      className="text-white fs-4"
                    />
                    <button className="btn-2 ">
                      Book a Demo <LuArrowRight size={22} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="youtube-video-video">
                <YoutubeVideo
                  src={"https://www.youtube.com/embed/tgbNymZ7vqY"}
                  width={"80%"}
                  height={"500px"}
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div class="leads-wrapper">
            <div class="container">
              <div class="text-center">
                <div className="leads-upper-content">
                  <div className="banner-heading-top">
                    <Para title="Struggling to Convert Leads?" />
                  </div>
                  <H2 title="Are these common sales challenges hindering your growth?" />
                </div>
                <div className="leads-lower-content">
                  {Leads?.map((items, index) => {
                    return (
                      <>
                        <Card2 items={items} index={index} />
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="wrapper-3">
            <div className="container">
              <div className="row">
                <div class="strugling-content text-center">
                  <div className="strugling-upper-content d-flex flex-column align-items-center">
                    <div className="banner-heading-top">
                      <div className="strugling-para">
                        <Para title="4IR: Your AI-Powered Sales Growth Engine" />
                      </div>
                    </div>
                    <H2 title="Seamless Integration, Exceptional Results" className="" />
                    <Para title="Integrate our AI-powered voice calling and lead generation solution into your existing sales process. Our platform is designed to:" className="strugling-para2" />
                    <button className="btn-2">
                      Start a free Trail <LuArrowRight size={22} onClick={handleOpenModal} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="strugling-lower-content">
                {SeamslessApi?.map((items, index) => {
                  return (
                    <>
                      <Card4 items={items} index={index} />
                    </>
                  );
                })}
              </div>

            </div>
          </div>


        </section>
        <section className="future">
          <div className="future-wrapper">
            <div className="container">
              <H2 title="The Future of Sales is AI-Powered" className="text-center" />
              <Para title="Don't get left behind. Embrace the power of AI to transform your sales process." className="text-center mb-4" />
              <div className="aifuturecard">
                {FutureCardapi?.map((items, index) => {
                  return (

                    <Card3 items={items} key={index} />
                  )
                })}
              </div>
            </div>
          </div>
        </section>
        <section className="aiPoweredIndustries">
          <div className="aiPoweredIndustries-wrapper">
            <div className="container">
              <div className="aiPoweredIndustries-content d-flex flex-column justify-content-center align-items-center">
                <H2 title="Industries That Can Benefit from AI-Powered Lead Generation and Automated Voice Calling" className="text-center" />
                <Para title="Our AI-powered solution is versatile and can be applied to a wide range of industries. Here are a few examples:" className="text-center" />
              </div>
              <div className="aiPoweredIndustries-first-grid d-flex justify-content-center flex-wrap gap-4">
                {aiPoweredIndustries.map((items, index) => {
                  return <AiPoweredCard items={items} key={index} />
                })}
              </div>
              <div className="aiPoweredIndustries-second-grid mt-4 d-flex justify-content-center align-item-center flex-wrap gap-4">
                {aiPoweredIndustriescard2.map((items, index) => {
                  return <AiPoweredCard items={items} key={index} className="aiPoweredIndustries-card2" />
                })}
              </div>
            </div>
          </div>
        </section>
        <section className="testimonial">
          <div className="testimonial-wrapper">
            <div className="container">
              <div className="testimonial-heading">
                <H2 title="By leveraging AI-powered lead generation and automated voice calling, businesses in these industries can:" className='text-center' />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
