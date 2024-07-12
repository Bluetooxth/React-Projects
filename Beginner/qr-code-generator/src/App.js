import React, { useState, useRef } from "react";
import QRCode from "react-qr-code";

const App = () => {
  const [url, setUrl] = useState('https://priyanshuchahar.vercel.app');
  const qrCodeRef = useRef(null);

  const downloadQR = () => {
    const svg = qrCodeRef.current.querySelector("svg");
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngFile;
      downloadLink.download = "qrcode.png";
      downloadLink.click();
    };
    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
  };

  return (
    <div className="container">
      <input 
        className="input" 
        value={url} 
        onChange={(e) => setUrl(e.target.value)} 
        type="url" 
        placeholder="Enter URL" 
      />
      <div ref={qrCodeRef}>
        <QRCode
          value={url}
          size={256}
          viewBox={`0 0 256 256`}
        />
      </div>
      <button className="btn" onClick={downloadQR}>Download</button>
    </div>
  );
}

export default App;