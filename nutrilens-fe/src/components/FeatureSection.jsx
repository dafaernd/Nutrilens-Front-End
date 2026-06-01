import "../styles/feature-section.css";

function FeatureSection() {
  return (
    <section>
      <div className="feat-container">
        <h1 className="feat-title">Fitur Unggulan</h1>

        <div className="card-container">
          <div className="card-1">
            <img src="./public/icon/lightning-icon.png" alt="lightning-icon" />
            <h4 className="card-1__title">Analisis Instan</h4>
            <p className="card-1__text">Hasil analisa cepat!, Teknologi AI kami memberikan response cepat tanpa mengorbankan akurasi.</p>
          </div>

          <div className="card-2 ">
            <img src="./public/icon/suggestion-icon.png" alt="suggestion-icon" />
            <h4 className="card-2__title">Saran</h4>
            <p className="card-2__text">Selain mengecek grade nutrisi dari produk makanan & minuman, NutriLens juga memberikan saran mengenai produk tersebut.</p>
          </div>

          <div className="card-3">
            <img src="./public/icon/database-icon.png" alt="database-icon" />
            <h4 className="card-3__title">Scan 100++ produk</h4>
            <p className="card-3__text">Mencakup produk makanan dan minuman kemasan.</p>
          </div>

          <div className="card-4">
            <img src="./public/icon/robot-icon.png" alt="robot-icon" />
            <h4 className="card-4__title">Scan AI Akurat</h4>
            <p className="card-4__text">Teknologi scan akurat yang mengenali makan dengan akurasi hingga 98%.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
