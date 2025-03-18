import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import QRCodeDownload from "./QRCodeDownload";

function QRCodeGenerator({ url }) {
  if (!url) return null;

  return (
    <div className="text-center mt-4">
      <div id="qrcode" style={{ display: "inline-block", padding: "10px" }}>
        <QRCodeCanvas
          value={url}
          size={200} // Tamanho do QR Code
          level="H" // Alta correção de erro
          includeMargin={false} // Remove margem extra
        />
      </div>
      <QRCodeDownload />
    </div>
  );
}

export default QRCodeGenerator;
