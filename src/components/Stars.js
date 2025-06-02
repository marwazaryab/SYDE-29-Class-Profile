import React from "react";
import "./Stars.css";

const Star = () => {
  return (
    <>
        <div data-svg-wrapper>
            <svg className="pulse" width="607" height="743" viewBox="0 0 607 743" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_6_26)">
                    <path d="M303.317 50L371.735 284.378L556.634 371.106L371.735 457.833L303.317 692.211L234.898 457.833L50 371.106L234.898 284.378L303.317 50Z" fill="#FF86F6" fill-opacity="0.4" />
                </g>
                <defs>
                    <filter id="filter0_f_6_26" x="0" y="0" width="606.634" height="742.211" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_6_26" />
                    </filter>
                </defs>
            </svg>
        </div>
        
        <div data-svg-wrapper>
            <svg className="pulse" width="315" height="706" viewBox="0 0 607 743" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_6_26)">
                    <path d="M303.317 50L371.735 284.378L556.634 371.106L371.735 457.833L303.317 692.211L234.898 457.833L50 371.106L234.898 284.378L303.317 50Z" fill="#C5FF79" fill-opacity="0.4" />
                </g>
                <defs>
                    <filter id="filter0_f_6_23" x="0.882324" y="-322.834" width="511.148" height="562.732" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="37.5" result="effect1_foregroundBlur_6_23" />
                    </filter>
                </defs>
            </svg>
        </div>
    </>
  );
};

export default Star;