import React from "react";
import H5 from "../Typography/H5";
import Para from "../Typography/Para";
import H6 from "../Typography/H6";
import H3 from "../Typography/H3";
const Accordian = ({items, index}) => {
  return (
    <>
        <div class="accordion-item" key={index}>
          <h2 class="accordion-header" id={items.accordianid}>
            <button
              class="accordion-button text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={items.datatargetid}
              aria-expanded="true"
              aria-controls={items.collapseid}
            >
                <H3 title={items.title} />
             
            </button>
          </h2>
          <div
            id={items.collapseid}
            class={`accordion-collapse collapse ${items.show} `}
            aria-labelledby={items.accordianid}
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <H5
                title={items.heading}
              />
              <ul style={{ color: "white" }}>
                {items.ulitems.map((item)=>{
                  return(

                <li>
              {item.liItems}
                </li>
                  )
                })}
              </ul>
              <H6 title={items.heading2} />
            </div>
          </div>
      </div>
    </>
  );
};

export default Accordian;