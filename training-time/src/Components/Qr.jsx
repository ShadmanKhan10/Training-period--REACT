// import React from "react";
// import background from "../assets/background.png";
// import ball from "../assets/ball.png";
// import logo from "../assets/logo.png";
// import download from "../assets/download.svg";
// import "./Qr.css";

// export default function Qr() {
//   return (
//     <div>
//       <div>
//         <img className="bg-image" src={background} alt="background" />
//       </div>
//       <div className="logo-container">
//         <img className="logo-image" src={logo} alt="logo" />
//         <div className="input-container">
//           <div className="qr-containing-div"></div>
//           <img
//             src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
//             alt="qr"
//           />
//         </div>
//         <img className="download-btn" src={download} alt="download" />
//         <img className="ball-image" src={ball} alt="ball" />
//       </div>
//     </div>
//   );
// }

import React, { useRef } from "react";
import QRCode from "react-qr-code";
import background from "../assets/background.png";
import ball from "../assets/ball.png";
import logo from "../assets/logo.png";
import download from "../assets/download.svg";
import "./Qr.css";

export default function Qr() {
  const qrRef = useRef();

  const handleDownload = () => {
    const svg = qrRef.current.querySelector("svg");
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = document.createElement("img");
    img.setAttribute("src", "data:image/svg+xml;base64," + btoa(svgData));

    img.onload = function () {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL("image/png");

      const downloadLink = document.createElement("a");
      downloadLink.href = pngFile;
      downloadLink.download = "qr-code.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    };
  };

  return (
    <div>
      <div>
        <img className="bg-image" src={background} alt="background" />
      </div>
      <div className="logo-container2">
        <img className="logo-image" src={logo} alt="logo" />
        <div className="input-container2" ref={qrRef}>
          <QRCode value="khanshadman7777@gmail.com" />
        </div>
        <img
          className="download-btn"
          src={download}
          alt="download"
          onClick={handleDownload}
        />
        <img className="ball-image" src={ball} alt="ball" />
      </div>
    </div>
  );
}
