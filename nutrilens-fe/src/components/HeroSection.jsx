import { Link } from "react-router-dom";
import "../styles/hero-section.css";

function HeroSection() {
  return (
    <section>
      <div className="hero-container">
        <div className="hero-text">
          <h1 className="hero-text__title">Tahu Apa Yang Kamu Makan, Setiap Saat</h1>
          <p className="hero-text__subtitle">Foto makanan atau minuman favoritmu dan dapatkan laporan nutrisi lengkap dalam hitungan detik</p>
          <Link to="/coba-gratis" className=" hero-btn">
            Scan Sekarang
          </Link>
        </div>

        <div className="hero-mockup">
          <img src="./image/nutrilens-mockup.png" alt="nutrilens-mockup" className="hero-image" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
