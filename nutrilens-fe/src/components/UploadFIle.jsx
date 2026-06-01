import { useState } from "react";
import "../styles/file-upload.css";
import PredictOutput from "./PredictOutput";

function UploadFile() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
    setResult(null);
  };

  const handleSubmit = async () => {
    if (!file) {
      alert("Pilih File Terlebih Dahulu");
      return;
    }

    // setResult({
    //   nutri_grade: "C", // ← ganti A, B, C, D, E untuk test warna
    //   health_advice: "Konsumsi secukupnya. Makanan ini mengandung beberapa nutrisi yang perlu diperhatikan.",
    // });

    console.log("API URL:", import.meta.env.VITE_API_URL);

    setLoading(true);
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/predict`, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.status === "success") {
        setResult(data.data);
      } else {
        alert("Prediksi gagal, coba lagi.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan, coba lagi.");
    } finally {
      setLoading(false);
    }

    //console.log("File yang diupload:", file);
  };

  return (
    <div className="upload-container">
      <h2 className="upload-title">Upload & Lihat Nilai Nutrisinya!</h2>
      <div className="upload-box">
        <input className="form-control" type="file" id="formFile" onChange={handleFileUpload} />
        <button type="button" className="btn" onClick={handleSubmit} disabled={loading}>
          {loading ? "Memproses..." : "Lihat Sekarang!"}
        </button>
      </div>
      {result && <PredictOutput grade={result.nutri_grade} advice={result.health_advice} />}
    </div>
  );
}

export default UploadFile;
