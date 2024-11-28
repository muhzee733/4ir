import React from "react";
import Layout from "@/components/layout";
import Head from "next/head";
import H1 from "@/components/typography/H1";
import H2 from "@/components/typography/H2";
import Robot from "@/images/landing/robot.png";
import Image from "next/image";
import "./index.css";

const Index = () => {
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
                <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center flex-column">
                  <H2 title="FOURTH INDUSTRIAL REVOLUTION INC" />
                  <H1
                    breakpoint={true}
                    spantitle="EMPOWER YOUR BUSINESS"
                    title="WITH AI-DRIVEN SUCCESS"
                  />
                  <button className="btn-2 mt-4">Book a Demo</button>
                </div>

                <div className="col-lg-6 d-flex align-items-end justify-content-end">
                  <div className="landing-robot">
                    <figure className="m-0  text-end">
                      <Image src={Robot} alt="robot"  width={400}/>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Index;
