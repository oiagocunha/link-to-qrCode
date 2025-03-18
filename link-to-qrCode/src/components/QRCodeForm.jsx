import { useState } from "react";

function QRCodeForm({ setUrl }) {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  // Validação de URL
  const isValidUrl = (url) => {
    try {
      const newUrl = new URL(url);
      return newUrl.protocol === "http:" || newUrl.protocol === "https:";
    } catch (e) {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidUrl(inputValue)) {
      setError("URL inválida! Insira um link válido com http:// ou https://");
      return;
    }

    setError("");
    setUrl(inputValue);
  };

  return (
    <form onSubmit={handleSubmit} className="my-3">
      <input
        type="text"
        className={`form-control ${error ? "is-invalid" : ""}`}
        placeholder="Digite o link..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {error && <div className="invalid-feedback">{error}</div>}
      <button type="submit" className="btn btn-primary mt-2">
        Gerar QR Code
      </button>
    </form>
  );
}

export default QRCodeForm;
