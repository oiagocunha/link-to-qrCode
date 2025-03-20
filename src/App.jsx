import { useState } from "react";
import QRCodeForm from "./components/QRCodeForm";
import QRCodeGenerator from "./components/QRCodeGenerator";

function App() {
  const [url, setUrl] = useState("");

  return (
    <div className="container text-center">
      
      <h1 className="my-4">Gerador de QR Code</h1>
      <QRCodeForm setUrl={setUrl} />
      <QRCodeGenerator url={url} />
    </div>
  );
}

export default App;
