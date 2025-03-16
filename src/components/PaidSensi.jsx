import React, { useState } from "react";
import "./PaidSensi.css";
import NavBar from "./NavBar";

const PaidSensi = () => {
  const [SensiDetail, setSensiDetail] = useState("CHOOSE YOUR SENSI PLAN");
  const [fade, setFade] = useState(false);

  const updateSensiDetail = (text) => {
    setFade(true);
    setTimeout(() => {
      setSensiDetail(text);
      setFade(false);
    }, 500); // Wait for fade-out before updating text
  };

  const BasicText = "WHAT WILL YOU GET ?";

  return (
    <div>
      <NavBar />
      <div className="ps-main-container">
        <div className="ps-container-1">
          <div
            className="ps-basic-container"
            onMouseEnter={() => updateSensiDetail(BasicText)}
            onMouseLeave={() => updateSensiDetail("CHOOSE YOUR SENSI PLAN")}
          >
            <h1>BASIC SENSI</h1>
          </div>
          <div
            className="ps-advance-container"
            onMouseEnter={() => updateSensiDetail("ADVANCE SENSI DETAILS")}
            onMouseLeave={() => updateSensiDetail("CHOOSE YOUR SENSI PLAN")}
          >
            <h1>ADVANCE SENSI</h1>
          </div>
          <div
            className="ps-supreme-container"
            onMouseEnter={() => updateSensiDetail("SUPREME SENSI DETAILS")}
            onMouseLeave={() => updateSensiDetail("CHOOSE YOUR SENSI PLAN")}
          >
            <h1>SUPREME SENSI</h1>
          </div>
        </div>
        <div className="ps-container-2">
          <div className={`ps-detail-container ${fade ? "fade-out" : "fade-in"}`}>
            <h1>{SensiDetail}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaidSensi;
