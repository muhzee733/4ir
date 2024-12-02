import React from "react";
import "./Team.css";
import Image from "next/image";
import Para from "../typography/Para";
import BarryKrevoy from "@/images/team/BarryKrevoy.png";
import ShaneKrevoy from "@/images/team/ShaneKrevoy.png";

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
      columnclass: "col-xl-3 col-lg-4 col-sm-6",
      firstChildClass: "team-box",
      secondChildClass: "feature-top mt-4",
      contentclass: "link-overflow",
      layout: true,
    },
    {
      id: 2,
      link: "https://www.linkedin.com/in/shane-krevoy-48a5b3b5",
      personimg: "/assets/images/team/ShaneKrevoy.png",
      image: ShaneKrevoy,
      name: "Shane Krevoy",
      description: "4IR Transformative Leadership Advisor/Consultant",
      columnclass: "col-xl-3 col-lg-4 col-sm-6",
      firstChildClass: "team-box",
      secondChildClass: "feature-top mt-4",
      contentclass: "link-overflow",
      layout: true,
    },
  ];
  return (
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
                className="col-lg-6 col-md-12 col-sm-12 text-white d-flex justify-content-center"
                key={index}
              >
                <div className="card team-card d-flex flex-column justify-content-between">
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
                  <div className="read-more">
                  <a href="#">
                     {`-->`}
                    </a>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
