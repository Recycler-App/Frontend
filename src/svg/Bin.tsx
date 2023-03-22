import React from "react";

function Bin({
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="65" height="84" viewBox="0 0 65 84" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M64.665 30.9813L60.165 38.55L5.58 7.92501L10.08 0.356262L23.76 8.01251L29.88 6.39376L49.365 17.3313L51.03 23.325L64.665 30.9813ZM0 75.125V22.625H22.815L54 40.125V75.125C54 77.4457 53.0518 79.6712 51.364 81.3122C49.6761 82.9531 47.3869 83.875 45 83.875H9C6.61305 83.875 4.32387 82.9531 2.63604 81.3122C0.948211 79.6712 0 77.4457 0 75.125Z" fill="#0FA958"/>
    </svg>
    
  );
}

export default Bin;
