import React from "react";
import {
  CompanyCardMap,
  CompanySecondCardMap,
  LastCardMap,
} from "./common/Helper";
const AverageEarn = () => {
  return (
    <div className="pb-5 mb-5">
      <div className="container pt-5 pt-lg-0  pb-5">
        <div className="row justify-content-between align-items-center flex-column-reverse flex-lg-row">
          <div className="col-12 col-lg-5 pt-4 pt-md-5 pt-lg-0 text-center text-lg-start">
            <h2 className="robotoFlex fw-normal fs_xl lh_xs black mb-3 pb-4">
              Average Earnings of a Registered User From a
              <span className="fw-medium"> Deposit of $250 to 521$</span>
            </h2>
            <button className="RegisterNowbtn open fs_xs fw-semibold mt-1">
              Register Now
            </button>
          </div>
          <div className="col-12 col-lg-6 d-flex justify-content-center gapCompany">
            <div className="d-flex justify-content-center flex-column gap-3">
              {CompanyCardMap.map((props, index) => (
                <div key={index} className="companyCard">
                  <img
                    className="w-100"
                    src={props.Company}
                    alt={props.CompanyName}
                  />
                </div>
              ))}
            </div>
            <div className="d-flex justify-content-center flex-column gap-3">
              {CompanySecondCardMap.map((props, index) => (
                <div key={index} className="companyCard">
                  <div className={`${props.class}`}>
                    <img
                      className={`${props.classWidth} mx-auto `}
                      src={props.Company}
                      alt={props.CompanyName}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="d-flex justify-content-center flex-column gap-3">
              {LastCardMap.map((props, index) => (
                <div key={index} className="companyCard">
                  <img
                    className={`${props.class}`}
                    src={props.Company}
                    alt={props.CompanyName}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AverageEarn;
