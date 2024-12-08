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
import Mediallayers from "@/images/mediallayers.png";
import mediaframe from "@/images/mediaframe.png";
import cardsStats from "@/images/cardsStats.png";
import Productstats from "@/images/Frame.png";
import MapSection from "@/images/vectors/MapSection.png";
import H4 from "@/components/Typography/H4";
import { GiSevenPointedStar } from "react-icons/gi";
import Image from "next/image";
import Calltoaction from "@/components/CalltoAction/Calltoaction";
import Slider from "@/components/Slider";
import Card3 from "@/components/cards/Card3";
import YoutubeVideo from "@/components/YoutubeVideo";
import SiteLogo from "@/components/SiteLogo";

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
  ];
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

  const IndustriesApi1 = [
    {
      id: 1,
      heading: "Real Estate",
      title1: "Automated Property Tours:",
      itle2: "Lead Qualification and Follow-Up: ",
      para1:
        "AI can guide potential buyers through virtual property tours, answering questions and providing detailed information.",
      para2:
        "AI can efficiently qualify leads, schedule appointments, and follow up with interested parties.",
      icon: "/images/vectors/vector1.png",
      layout: true,
    },
    {
      id: 2,
      heading: "Financial Services",
      title1: "Customer Support and Inquiries:",
      title2: "Fraud Detection and Prevention:",
      para1:
        "AI can handle a wide range of customer inquiries, from account balances to loan applications.",
      para2:
        "AI can analyze voice patterns and detect potential fraudulent activity in real-time.",
      icon: "/images/vectors/vector2.png",
      layout: true,
    },
    {
      id: 3,
      heading: "Healthcare",
      title1: "Patient Appointment Scheduling:",
      title2: "Telehealth Consultations:",
      para1:
        "AI can automate appointment scheduling, reminders, and confirmations.",
      para2:
        "AI can facilitate remote consultations, answering patient queries and providing basic medical advice.",
      icon: "/images/vectors/vector3.png",
      layout: true,
    },
  ];

  const IndustriesApi2 = [
    {
      id: 4,
      heading: "E-commerce",
      title1: "Customer Service and Support:",
      title2: "Sales and Upselling:",
      para1:
        "AI-powered chatbots can assist customers with product information, order tracking, and returns.",
      para2:
        "AI can proactively reach out to customers, offer personalized recommendations, and upsell products.",
      icon: "/images/vectors/vector4.png",
      layout: true,
    },
    {
      id: 5,
      heading: "Education",
      title1: "Student Support and Advising:",
      title2: "Online Tutoring:",
      para1:
        "AI can provide students with academic advice, answer questions, and offer guidance on course selection.",
      para2:
        "AI-powered tutoring systems can offer personalized learning experiences, adapting to each student's needs.",
      icon: "/images/vectors/vector5.png",
      layout: true,
    },
    {
      id: 6,
      heading: "Telecommunications",
      title1: "Customer Onboarding and Support:",
      title2: "Sales and Upselling:",
      para1:
        "AI can guide customers through the onboarding process, troubleshoot issues, and provide technical support.",
      para2:
        "AI can identify upselling opportunities and offer tailored packages to customers.",
      icon: "/images/vectors/vector1.png",
      layout: true,
    },
  ];

  const SliderData = [
    {
      id: 1,
      clientName: "Sarah Afzal",
      country: "USA",
      img: "",
      testimonial:
        "4IR has completely transformed the way we approach our business operations. The platform's self-learning capabilities ensure we’re always using the latest AI advancements without needing constant updates. It’s a true game-changer for our long-term growth and success!",
    },
    {
      id: 2,
      clientName: "Sarah Afzal",
      country: "USA",
      img: "",
      testimonial:
        "4IR has completely transformed the way we approach our business operations. The platform's self-learning capabilities ensure we’re always using the latest AI advancements without needing constant updates. It’s a true game-changer for our long-term growth and success!",
    },
    {
      id: 3,
      clientName: "Sarah Afzal",
      country: "USA",
      img: "",
      testimonial:
        "4IR has completely transformed the way we approach our business operations. The platform's self-learning capabilities ensure we’re always using the latest AI advancements without needing constant updates. It’s a true game-changer for our long-term growth and success!",
    },
    {
      id: 4,
      clientName: "Sarah Afzal",
      country: "USA",
      img: "",
      testimonial:
        "4IR has completely transformed the way we approach our business operations. The platform's self-learning capabilities ensure we’re always using the latest AI advancements without needing constant updates. It’s a true game-changer for our long-term growth and success!",
    },
    {
      id: 5,
      clientName: "Sarah Afzal",
      country: "USA",
      img: "",
      testimonial:
        "4IR has completely transformed the way we approach our business operations. The platform's self-learning capabilities ensure we’re always using the latest AI advancements without needing constant updates. It’s a true game-changer for our long-term growth and success!",
    },
  ];
  const WhyChooseAI = [
    {
      id: 1,
      title: "Seamless AI-to-AI Handoffs",
      description: "Handle more calls efficiently without interruptions.",
    },
    {
      id: 2,
      title: "Tailored for Your Industry",
      description:
        "Leverage pre-trained agents customized to fit your specific business needs.",
    },
    {
      id: 3,
      title: "Lightning-Fast Deployment",
      description:
        "Get up and running within 48 hours, no long wait times required",
    },
    {
      id: 4,
      title: "Enterprise-Grade Security",
      description:
        "Safeguard sensitive data with top-tier encryption and compliance standards.",
    },
    {
      id: 5,
      title: "Self-Learning AI",
      description:
        "Enjoy smarter, more effective interactions that continually improve over time",
    },
    {
      id: 6,
      title: "100% Done-For-You Setup",
      description:
        "Focus on growing your business while we handle the technical setup for a smooth launch.",
    },
  ];
  return (
    <Layout>
      {/* shahbaz */}
      <section>
        <div className="main-wrapper">
          <div className="container-fluid">
            <div class="main-banner pt-5">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 colum1">
                  <div className="figure">
                    <SiteLogo />
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
                  <div className="my-4 bannerSpandiv d-flex justify-content-start gap-5">
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
                    <YoutubeVideo />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section2">
        <div className="second2-wrapper">
          <div className="container">
            <div class="second-session">
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
                <div className="section3-main  text-center">
                  <div className="d-flex justify-content-center align-items-center" style={{width: "100%"}}>
                    
                  <div className="line"></div>
                  <H5
                    title="The Revolutionary Voice AI Platform"
                    className="text-center section3h5 px-3 mb-0"
                  />   
                   <div className="line"></div>
                  </div>
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

            <div class="custom-card-section">
              <div className="flex-card d-flex justify-content-center">
                <Card1 content={Aicontent} layout={false} />
              </div>
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
                  <H4
                    title="The AI landscape is constantly evolving. Outdated technology can hinder your growth."
                    className="section4h4"
                  />
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
                  <H1 title="Exactly Work?" className="section5h1" />
                </div>
                <Para
                  title="Imagine a future where your lead generation process is automated, efficient, and highly effective. 4IR AI Voice Calling makes this a reality. Here's how it works:"
                  className="section5para1"
                />
              </div>
            </div>

            <div class="fourth-section">
              <div className="row customborder section5-2ndrow">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <H3
                    title="1. Lead Capture and CRM Integration"
                    className="section5h3"
                  />
                  <div className="d-flex align-items-center ">
                    <div>
                    <GiSevenPointedStar className="primary me-3" size={23}  />
                    </div>
                    <Para
                      title="Your sales or marketing team generates leads, which are then added to your CRM system."
                      className="section5para2"
                    />
                  </div>
                  <div className="d-flex align-items-center">
                    <div>
                    <GiSevenPointedStar className="primary me-3" size={23} />
                    </div>
                    <Para
                      title="4IR AI Voice Calling integrates seamlessly with your CRM, providing real-time access to lead data."
                      className="section5para2"
                    />
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
            </div>
            <div class="fourth-section">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-6 col-md-6 col-sm-6 customborder section5-2ndrow section5-CustomMargin section5-Customwidth">
                  <div className="">
                    <H3
                      title="2. Automated Outbound Calling"
                      className="section5h3"
                    />
                    <div className="d-flex align-items-center ">
                      <div>
                      <GiSevenPointedStar className="primary me-3" size={23} />
                      </div>
                      <Para
                        title="The AI-powered system automatically dials leads, saving you time and resources."
                        className="section5para2"
                      />
                    </div>
                    <div className="d-flex align-items-center ">
                    <div>
                      <GiSevenPointedStar className="primary me-3" size={23} />
                      </div>
                      <Para
                        title="It can handle a large volume of calls simultaneously, ensuring no lead is missed."
                        className="section5para2"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6  customborder section5-2ndrow section5-Customwidth">
                  <div className="">
                    <H3
                      title="3. Intelligent Conversations"
                      className="section5h3"
                    />
                    <div className="d-flex align-items-center ">
                    <div>
                      <GiSevenPointedStar className="primary me-3" size={23} />
                      </div>
                      <Para
                        title="The AI engages in natural, human-like conversations with leads."
                        className="section5para2"
                      />
                    </div>
                    <div className="d-flex align-items-center  ">
                    <div>
                      <GiSevenPointedStar className="primary me-3" size={23} />
                      </div>
                      <Para
                        title="It can ask relevant questions, provide information, and even qualify leads based on predefined criteria."
                        className="section5para2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="fourth-section">
              <div class="row">
                <div className="col-lg-12 col-md-12 customborder section5-2ndrow">
                  <H3
                    title="4. Lead Capture and CRM Integration"
                    className="section5h3"
                  />
                  <div className="d-flex align-items-center ">
                  <div>
                      <GiSevenPointedStar className="primary me-3" size={23} />
                      </div>
                    <Para
                      title="Your sales or marketing team generates leads, which are then added to your CRM system."
                      className="section5para2"
                    />
                  </div>
                  <div className="d-flex align-items-center ">
                  
                  <div>
                      <GiSevenPointedStar className="primary me-3" size={23} />
                      </div>
                  
                    <Para
                      title="4IR AI Voice Calling integrates seamlessly with your CRM, providing real-time access to lead data."
                      className="section5para2"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="fourth-section">
              <div className="row text-center section5lastpara">
                <Para title="By automating these tasks, 4IR AI Voice Calling not only saves you time and money but also improves lead quality and conversion rates. It empowers your team to focus on higher-value activities, such as strategic planning and relationship building." />
              </div>
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
                <H1 title="Voice Calling" className="section5h1" />
              </div>
              <Para
                title="4IR AI Voice Calling is a versatile tool that can significantly impact various industries. Here are a few key sectors where this technology can be a game-changer:"
                className="section6para1"
              />
            </div>

            <div className="row">
              <Card1 content={IndustriesApi1} layout={true} />
            </div>

            <div className="row">
              <div className="col-lg-12 MapSectiondiv">
                <figure>
                  <Image
                    src={MapSection}
                    alt="Map Section"
                    className="MapSection"
                  />
                </figure>
              </div>
            </div>

            <div className="row">
              <Card1 content={IndustriesApi2} layout={true} />
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="text-white text-center section6lastRow">
                  By automating routine tasks and improving customer
                  interactions, 4IR AI Voice Calling can help businesses in
                  these industries achieve greater efficiency, productivity, and
                  customer satisfaction.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="section7-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 d-flex justify-content-center">
                <h2 className="section7h2">
                  Why Choose<span className="primary"> AI Talk Assist?</span>
                </h2>
              </div>

              {WhyChooseAI?.map((items, index) => {
                return (
                  <>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <Card3 items={items} index={index} />
                    </div>
                  </>
                );
              })}

              <div className="row">
                <div className="text-center section7-btn">
                  <button className="btn-1">Get Started with AI</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial">
      <div className="d-flex align-items-center justify-content-center">
  <div className="d-flex align-items-center justify-content-center w-100">
    <div className="line "></div>
    <H6 title="Client Reviews" />
    <div className="line"></div>
  </div>
</div>

        <H3
          title="Don’t Just Take Our Word for It"
          className="section7h3 customsec7h3 text-center"
        />
        <Slider SliderData={SliderData} />
      </section>

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
