import React from "react";

function Success({
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="141" height="146" viewBox="0 0 141 146" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g filter="url(#filter0_d_559_2317)">
<mask id="mask0_559_2317"  maskUnits="userSpaceOnUse" x="9" y="8" width="122" height="126">
<path d="M70.0816 13L85.2935 24.0968L104.125 24.0621L109.908 41.9815L125.163 53.0204L119.311 70.9167L125.163 88.8129L109.908 99.8518L104.125 117.771L85.2935 117.736L70.0816 128.833L54.8698 117.736L36.0382 117.771L30.2552 99.8518L15 88.8129L20.8525 70.9167L15 53.0204L30.2552 41.9815L36.0382 24.0621L54.8698 24.0968L70.0816 13Z" fill="white" stroke="white" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M49.8108 70.9167L64.29 85.3958L93.2483 56.4375" stroke="black" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
</mask>
<g mask="url(#mask0_559_2317)">
<path d="M0.581665 1.41699H139.582V140.417H0.581665V1.41699Z" fill="#0FA958"/>
</g>
</g>
<defs>
<filter id="filter0_d_559_2317" x="-0.000366211" y="0" width="140.164" height="145.833" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_559_2317"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_559_2317" result="shape"/>
</filter>
</defs>
</svg>



    
  );
}

export default Success;
