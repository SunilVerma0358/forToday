import React from "react";
import { StatisticsCardMap } from "./common/Helper";

const Statistics = () => {
  return (
    <div className="bg_img">
      <div className="greenBlueBg py-5">
        <div className="container py-md-5 my-1">
          <h2 className="robotoFlex fw-normal fs_xl lh_md white text-center mb-0">
            Statistics <span className="fw-bold">For Today</span>
          </h2>
          <div className="row pb-md-5 forTdayPadding justify-content-center">
            {StatisticsCardMap.map((props, index) => (
              <div key={index} className=" col-12 col-md-6 col-lg-4 pt-4">
                <div className="StatisticsCard">
                  <div className="smallStatisticsCard">
                    <h3 className="robotoFlex fw-bold fs_xxl lh_lg black text-center mb-0">
                      {props.heading}
                    </h3>
                  </div>
                  <p className="open fw-semibold fs_md lh_sm black text-center pt-3 mt-1 mb-0">
                    {props.phara}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
