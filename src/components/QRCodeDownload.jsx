import html2canvas from "html2canvas";

function QRCodeDownload() {
  const saveQRCode = async () => {
    const qrElement = document.getElementById("qrcode");

    if (!qrElement) return;

    const canvas = await html2canvas(qrElement, {
      backgroundColor: null, // Remove fundo branco
      scale: 2, // Aumenta qualidade
    });

    const imgData = canvas.toDataURL("image/jpeg");

    const link = document.createElement("a");
    link.href = imgData;
    link.download = "qrcode.jpg";
    link.click();
  };

  return (
    <button className="btn btn-success mt-3" onClick={saveQRCode}>
      Baixar QR Code 
    </button>
  );
}

export default QRCodeDownload;
