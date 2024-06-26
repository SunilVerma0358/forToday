import React from "react";
import { FaqMap } from "./common/Helper";

const FaqAccording = () => {
  return (
    <div className="py-5 my-md-5 ">
      <div className="container pt-4 pb-lg-5 mb-lg-5">
        <h2 className="robotoFlex fs_xl lh_xs fw-medium mb-0 text-center pb-2">
          Frequently Asked <span className="fw-bold greenBlue">Questions</span>
        </h2>
        <div className="pt-4 pt-md-5 maxWidthFaq mx-auto">
          <div className="accordion" id="accordionExample">
            {FaqMap.map((props, index) => (
              <div key={index} className="accordion-item mt-3">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button  
                    } robotoFlex fw-bold fs_sm lh_xxl"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                    aria-expanded="true"
                    aria-controls={`collapse${index}`}
                  >
                    {props.Heading}
                  </button>
                </h2>
                <div
                  id={`collapse${index}`}
                  className={`accordion-collapse collapse ${
                    index === 0 ? "show " : ""
                  }`}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body px-0 open fw-normal black lh_xxl fs_xs maxWidthPhara">
                    {props.phara}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqAccording;
