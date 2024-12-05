import Para from "../Typography/Para"
import { FaCircle } from "react-icons/fa";
export default function SecondSecBox({SecondBox}) {
    return(
        <>
        {SecondBox.map((items)=>{
            return(
          <div className="col-lg-6 col-md-12 mb-4 second-sec-col" key={items.id} >
            <div className="second-sec-box" >
              <div className="second-sec-box-content d-flex align-items-center ">
                <div className="circle">
              <FaCircle color="#5b151b" />
                </div>
              <Para title={items.title} className="text-white fs-5" />
              </div>
            </div>
          </div>
            )
        })}
        </>
    )
} 