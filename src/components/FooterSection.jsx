import React from "react";
import FooterImg from "../assets/svg/FooterImg.svg";
import { Facebook, Insta, Linkdin } from "./common/SvgExport";
import { FooterMap } from "./common/Helper";

const FooterSection = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  return (
    <footer className="bg_footer">
      <div className="footerImg pt-md-4">
        <div className=" container pt-5 pb-4 mb-md-3">
          <div className="d-flex justify-content-between flex-wrap align-items-center mb-0">
            <div className="maxWidth">
              <p className="open fs_lg fw-bold white mb-0">AI STOCKS</p>
              <p className="open fs_xs fw-normal white lh_xxl mb-0 opacity pt-3 ">
                Empowering Your Financial Future
                <span className="d-sm-block">with Intelligent Investments</span>
              </p>
            </div>
            <div className="d-flex jusity-content-center flex-column pt-3 pt-sm-0">
              <p className="open fw-semibold fs_sm lh_xxl white mb-0">
                Follow Us on
              </p>
              <div className="d-flex justify-content-center gapFooterLink footerPadding">
                <a
                  href="https://www.facebook.com/radialcode/"
                  target="blank"
                  className="circle d-flex justify-content-center align-items-center"
                >
                  <Facebook />
                </a>
                <a
                  href="https://www.instagram.com/radialcode/?hl=en"
                  target="blank"
                  className="circle d-flex justify-content-center align-items-center"
                >
                  <Insta />
                </a>
                <a
                  href="https://www.linkedin.com/company/radialcode/?originalSubdomain=in"
                  target="blank"
                  className="circle d-flex justify-content-center align-items-center"
                >
                  <Linkdin />
                </a>
              </div>
            </div>
          </div>{" "}
          <div className="row mt-3">
            {FooterMap.map((props, index) => (
              <div key={index} className="col-12 col-lg-6 pt-4  ">
                <p className="open fw-bold fs_sm lh_md white mb-0 ">
                  {props.headingOne}
                </p>
                <p className="open fw-normal fs_xs lh_xxl white mb-0 lh_xxl opacity pt-3">
                  {props.PharaOne}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="borderTop FooterBottomPadding">
          <div className="container">
            <div className="d-flex justify-content-between flex-wrap align-items-center">
              <p className="open fw-normal fs_xs lh_xxl white opacity mb-0 ">
                Privacy Policy <span>|</span> Conditions
              </p>
              <p className="open fw-normal fs_xs lh_xxl white mb-0 opacity pt-2 pt-sm-0 ">
                Report Abuse/ Spam | Copyright@{year}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
