import React from "react";
import "./Team.css";
import Image from "next/image";
import Para from "../typography/Para";
import { FiArrowRight } from "react-icons/fi";
import img1 from "@/images/feature.gif";
import img2 from "@/images/feature-bg.png";
import Link from "next/link";

const Team = () => {
  const Teamdata = [
    {
      id: 1,
      link: "1",
      image: "/assets/images/team/BarryKrevoy.png",
      image2: "/assets/images/team/Barry-Krevoy-IA-Speaker-.webp",
      name: "Barry Krevoy",
      description:
        "CEO | 4IR Transformative Leadership Consultant/Advisor/Speaker | Executive Education Instructor",
      layout: true,
    },
    {
      id: 2,
      link: "https://www.linkedin.com/in/shane-krevoy-48a5b3b5",
      image: "/assets/images/team/ShaneKrevoy.png",
      name: "Shane Krevoy",
      description: "4IR Transformative Leadership Advisor/Consultant",
      layout: true,
    },
  ];
  return (
    <div className="team-section section-b-space eighty">
      <div className="bg-effect">
        <Image src={img1} className="img-fluid feature-left" alt="" priority />
        <Image src={img1} className="img-fluid feature-right" alt="" priority />
        <Image src={img2} className="img-fluid feature-bg" alt="" priority />
        <span className="round-effect"></span>
      </div>
      <div className="container">
        <div className="text-center leardermain mb-5">
          <div className="expertteam">
            Our <span style={{ color: "#FFCE00" }}>Expert</span> Team
          </div>
          <div className="leadership1">Innovative Minds Behind The Vision</div>
        </div>
        <div className="row">
          {Teamdata?.map((item, index) => {
            return (
              <>
                <div
                  className="col-lg-6 col-md-12 col-sm-12 text-white d-flex justify-content-center custom-animation-hover"
                  key={index}
                >
                  <div className="card team-card d-flex flex-column justify-content-between team-box">
                    <figure className="py-3 text-center d-block custom-images pt-5 mb-5">
                      <img
                        src={item.image}
                        width={100}
                        className="card-img-top"
                      />
                    </figure>
                    <div
                      className="card-body p-0 "
                      style={{ flex: "unset !important" }}
                    >
                      <h5
                        className="card-title text-white custom-card-title"
                        style={{ paddingLeft: "20px" }}
                      >
                        {item.name}
                      </h5>
                      <Para paragraph={item.description} />
                    </div>
                    <div className="link-overflow">
                      <Link href={item.link}>Read more</Link>
                      <FiArrowRight className="text-white" />
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;
