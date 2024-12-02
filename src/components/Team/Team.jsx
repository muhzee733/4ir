import React from 'react'
import "./Team.css"

const Team = ({breakpoint}) => {

    const Teamdata = [
        {
            "id": 1,
            "link": "1",
            "personimg": "/assets/images/team/BarryKrevoy.png",
            "image": "/assets/images/team/Barry-Krevoy-2.webp",
            "image2": "/assets/images/team/Barry-Krevoy-IA-Speaker-.webp",
            "name": "Barry Krevoy",
            "description": "CEO | 4IR Transformative Leadership Consultant/Advisor/Speaker | Executive Education Instructor",
            "columnclass": "col-xl-3 col-lg-4 col-sm-6",
            "firstChildClass": "team-box",
            "secondChildClass": "feature-top mt-4",
            "contentclass": "link-overflow",
            "layout": true

        },
        {
            "id": 2,
            "link": "https://www.linkedin.com/in/shane-krevoy-48a5b3b5",
            "personimg": "/assets/images/team/ShaneKrevoy.png",
            "image": "/assets/images/team/Barry-Krevoy-2.webp",
            "name": "Shane Krevoy",
            "description": "4IR Transformative Leadership Advisor/Consultant",
            "columnclass": "col-xl-3 col-lg-4 col-sm-6",
            "firstChildClass": "team-box",
            "secondChildClass": "feature-top mt-4",
            "contentclass": "link-overflow",
            "layout": true

        }
    ]
    return (
        <div className="container-fluid">
            <div className="row Teammainrow">
                {
                breakpoint ? 
                <div className="text-center">
                    <div className='expertteam'>Our <span style={{ color: '#FFCE00' }}>Expert</span> Team</div>
                    Innovative Minds Behind The Vision
                </div>
                :
                "side"
            }
            </div> 

            <div className="row"></div> 

            
            
            
        </div>
    )
}

export default Team