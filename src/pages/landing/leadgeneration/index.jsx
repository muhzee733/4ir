import Layout from "@/components/layout";
import React from "react";
import "./leadgeneration.css";
import H4 from "@/components/Typography/H4";
import SecondSecBox from "@/components/Second-Section Box/Second-sec-box";

const Index = () => {
  const SecondBox = [
    {
      id: 1,
      title: "Losing leads due to slow responses.",
    },
    {
      id: 2,
      title: ["Overwhelmed by too many leads and" ,<br />, "not enough follow-ups."],
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
      title: ["Struggling to scale without skyrocketing ", <br /> ," costs."],
    },
  ];
  return (
    <Layout>
      {/* shahbaz */}
      <section>
        <div className="main-wrapper">
          <div className="container-fluid">ok</div>
        </div>
      </section>

      {/* Azan */}

      <section className="second-sec">
        <div className="second-sec-wrapper">
          <div className="container">
            <div className="second-sec-content">
              <div className="second-sec-heading d-flex justify-content-center">
              <H4
                title="Sales can be tough — especially when you're juggling a mountain of leads, customer expectations, and an ever-changing market. If you're feeling the pressure, you're not alone. Many businesses face challenges that slow down growth and drain resources."
                className="text-white text-capitalize text-center"
              />
              </div>
              <div className="row mt-4 d-flex align-items-center justify-content-center  ">
                <SecondSecBox SecondBox={SecondBox} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* anila */}
    </Layout>
  );
};

export default Index;
