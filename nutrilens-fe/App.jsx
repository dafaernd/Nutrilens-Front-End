import React from "react"; //eslint-disable-line no-unused-vars
import { Route, Routes } from "react-router-dom";

import Navigation from "./src/components/Navigation.jsx";
import UploadFilePage from "./src/pages/UploadFilePage.jsx";
import BerandaPage from "./src/pages/BerandaPage.jsx";
import StepSection from "./src/components/StepSection.jsx";
//import PredictOutputPage from "./src/pages/PredictOutputPage.jsx";

function App() {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<BerandaPage />} />
          <Route path="/cara-kerja" element={<StepSection/>} />
          <Route path="/coba-gratis" element={<UploadFilePage />} />
        </Routes>
        {/* <OutputPredictionPage/> */}
      </main>
    </div>
  );
}

export default App;
