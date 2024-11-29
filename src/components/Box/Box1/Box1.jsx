import React from 'react'
import Para from '../../typography/Para'
import Image from "next/image";
import "./Box1.css"

const Box1 = ({ ServiceBox }) => {

  // const { image1, image2, image3 , title , para , layout } = ServiceBox

  return (
    <>
      {
        ServiceBox.map((items) => (
          <>
            {items.layout ?
              <div className='col-lg-4 col-md-12 col-sm-12 d-flex justify-content-center mb-5'>
                <div className='box-maindiv mt-1'>
                  <div box-img1>
                    <figure className='box-img1 d-flex justify-content-center align-items-center'>
                      <Image src={items.image1} width={33} alt="" />
                    </figure>
                  </div>
                  <div className='box-title1 d-flex'>
                    <Image src={items.image3} width={10} height={26} alt="" className='my-2'/>
                    <div className='ms-3 my-2 font-outfit fs-5 fw-bold'>{items.title}</div>
                  </div>
                  <Para paragraph={items.para} />
                </div>

              </div>
              :
              ""
            }

          </>
        ))
      }
    </>
  )
}

export default Box1