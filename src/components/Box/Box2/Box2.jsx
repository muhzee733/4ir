import React from 'react'
import Image from "next/image";
import "./Box2.css"
import Para from '@/components/typography/Para';
import { FiCheckCircle } from "react-icons/fi";
import Link from 'next/link';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

const Box2 = ({ Services }) => {
  return (
    <>
      <div className='container-fluid'>
        {
          Services.map((items) => (
            <>
              <div className={`row my-4 revercolm ${items.layout ? "d-flex flex-row-reverse  tureresult" : "falseresult"}`}
              >
                <div className='col-lg-6 maincolumn'>
                  <div className="title">{items.title1}<span className='titlespan'> {items.title2}</span></div>

                  <span className="heading1span skyblue">{items.number}</span> <span className={`heading1 ${items.id === 2 ? "skyblue" : "text-white"}`}>{items.heading}</span>
                  <div className="headingpara">
                    <Para paragraph={items.paragraph} />
                  </div>
                  {
                    items.ticktitle.map((ticktitlepara, i) => (
                      <ul className='list-unstyled text-white mt-2 d-flex align-items-center '>
                        <FiCheckCircle size={25} className='me-3 ' style={{ color: "#ffce00" }} />
                        <li className='boxli '>
                          {ticktitlepara}
                        </li>
                      </ul>
                    ))
                  }
                  <div className="mt-5 ms-5">
                    <Link href={items.link} className='btn-2 p-3'>
                      learn more
                    </Link>
                  </div>
                </div>

                <div className='col-lg-6 d-flex justify-content-center align-items-center'>
                  <figure>
                    <Image
                      className='image1'
                      src={items.image}
                      alt="Img"
                    />
                  </figure>
                </div>
              </div>
            </>
          )
          )}

      </div >

    </>
  )
}

export default Box2