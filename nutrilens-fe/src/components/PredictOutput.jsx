import React from "react"; //eslint-disable-line no-unused-vars
import "../styles/predict-output.css";

function PredictOutput({ grade, advice }) {
  return (
    <div className="output-container">
      <h2 className="output-title">Hasil Cek Nutrisi</h2>
      <div className="output-box">
        <div className={`output-grade grade-${grade}`}>{grade}</div>
        <div className="output-content">
          <h3>Saran</h3>
          <p>{advice}</p>
        </div>
      </div>
    </div>
  );
}

export default PredictOutput;
