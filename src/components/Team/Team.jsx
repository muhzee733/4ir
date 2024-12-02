import React from "react";
import "./Team.css";
import Image from "next/image";
import Para from "../typography/Para";
import BarryKrevoy from "@/images/team/BarryKrevoy.png";
import ShaneKrevoy from "@/images/team/ShaneKrevoy.png";
import { FiArrowRight } from "react-icons/fi";
import img1 from "@/images/feature.gif";
import img2 from "@/images/feature-bg.png";


const Team = () => {
  const Teamdata = [
    {
      id: 1,
      link: "1",
      personimg: "/assets/images/team/BarryKrevoy.png",
      image: BarryKrevoy,
      image2: "/assets/images/team/Barry-Krevoy-IA-Speaker-.webp",
      name: "Barry Krevoy",
      description:
        "CEO | 4IR Transformative Leadership Consultant/Advisor/Speaker | Executive Education Instructor",
      layout: true,
    },
    {
      id: 2,
      link: "https://www.linkedin.com/in/shane-krevoy-48a5b3b5",
      personimg: "/assets/images/team/ShaneKrevoy.png",
      image: ShaneKrevoy,
      name: "Shane Krevoy",
      description: "4IR Transformative Leadership Advisor/Consultant",
      layout: true,
    },
  ];
  return (
    < div className="team-section section-b-space">
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
                className="col-lg-6 col-md-12 col-sm-12 text-white d-flex justify-content-center "
                key={index}
              >
                <div className="card team-card d-flex flex-column justify-content-between hoverSystaem">
                  <figure className="py-3">
                    <Image
                      src={item.image}
                      width={120}
                      height={240}
                      className="card-img-top"
                      alt="memberimage"
                    />
                  </figure>
                  <div className="card-body p-0" style={{flex: "unset !important"}}>
                    <h5 className="card-title text-white">{item.name}</h5>
                    <Para paragraph={item.description} />
                  </div>
                  <div className="read-more ">
                  <a href="#">
                  <FiArrowRight className="text-white ArrowRight"/>
                    </a>
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
