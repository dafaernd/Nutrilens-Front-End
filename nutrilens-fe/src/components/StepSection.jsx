import "../styles/step-section.css";

function StepSection() {
  return (
    <section id="cara-kerja">
      <div className="step-container">
        <h1 className="step-title">Tiga Langkah Mudah</h1>

        <div className="step-card-container">
          <div className="step-card-1">
            <img src="./icon/file-icon.png" alt="file-icon" className="step-icon" />
            <h4 className="step-card-1__title">Kirim Foto Makananmu</h4>
            <p className="step-card-1__text">Kirim file foto nutrition fact produk makanan atau minuman kemasan apapun.</p>
          </div>

          <div className="step-card-2">
            <img src="./icon/magnifyingglass-icon.png" alt="magnifyingglass-icon" className="step-icon" />
            <h4 className="step-card-2__title">AI Menganalisis</h4>
            <p className="step-card-2__text">Teknologi AI kami menganalisa grade gizi secara otomatis.</p>
          </div>

          <div className="step-card-3">
            <img src="./icon/chart-icon.png" alt="chart-icon" className="step-icon" />
            <h4 className="step-card-3__title">Dapatkan Laporan</h4>
            <p className="step-card-3__text">Lihat laporan grade dan saran pada makanan maupun minumanmu.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StepSection;
