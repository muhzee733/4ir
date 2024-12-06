import React from "react";
import H5 from "../Typography/H5";
import Para from "../Typography/Para";
import H6 from "../Typography/H6";
import H3 from "../Typography/H3";
const Accordian = ({ Accordianapi }) => {
  return (
    <>
      <div class="accordion" id="accordionExample">
        {Accordianapi.map((items) => {
          return (
            <div class="accordion-item" key={items.id}>
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
                    {items.ulitems.map((item) => {
                      return (

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
          )
        })}
        {/* <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFour">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseFour"
            class="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Accordian;
