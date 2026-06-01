import "../styles/stat-section.css";

function StatSection() {
  return (
    <section>
      <div className="stat-container">
        <div className="stat-akurasi">
          <div className="stat-akurasi__persentase">98%</div>
          <div className="stat-akurasi__text">
            <p>Akurasi data</p>
          </div>
        </div>

        <div className="line">
          <img src="./public/image/line-stat.png" alt="" />
        </div>

        <div className="stat-price">
          <h3>GRATIS</h3>
        </div>

        <div className="line">
          <img src="./public/image/line-stat.png" alt="" />
        </div>

        <div className="stat-avail">
          <h3 className="stat-avail__qty">100++</h3>
          <p className="stat-avai__text">Produk dapat dipindai</p>
        </div>
      </div>
    </section>
  );
}

export default StatSection;
