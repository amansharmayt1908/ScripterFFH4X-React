import React, { useState } from "react";
import "./PaidSensi.css";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";

const PaidSensi = () => {
  const [sensiDetail, setSensiDetail] = useState("CHOOSE YOUR SENSI PLAN");
  const [fade, setFade] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  
  // Add navigate hook for routing
  const navigate = useNavigate();

  const updateSensiDetail = (text, plan) => {
    setFade(true);
    setSelectedPlan(plan);
    setTimeout(() => {
      setSensiDetail(text);
      setFade(false);
    }, 500);
  };

  // Function to handle purchase button clicks
  const handlePurchaseClick = (plan) => {
    navigate(`/purchase?plan=${plan}`);
  };

  const BasicText = (
    <div className="sensi-detail-content">
      <h2>BASIC SENSI PACKAGE</h2>
      <div className="price-tag">₹199</div>
      <h3>WHAT WILL YOU GET?</h3>
      <ul>
        <li>BASIC SENSI ZIP FILE</li>
        <li id="liveSupport">NO LIVE SUPPORT FROM MY TEAM</li>
        <li>HEADSHOT REGEDITS</li>
        <li>BASIC PC REGEDITS</li>
        <li>MOUSE REGEDITS</li>
        <li>X AND Y VALUES</li>
        <li>BEST TWEAKS</li>
        <li>BEST EMULATOR VERSION FOR HEADSHOT</li>
        <li>EMULATOR SENSI</li>
        <li>BAT FILES</li>
        <li>KEYMAPING</li>
      </ul>
      <button 
        className="purchase-button"
        onClick={() => handlePurchaseClick("basic")}
      >
        PURCHASE NOW ₹199
      </button>
    </div>
  );

  const AdvanceText = (
    <div className="sensi-detail-content">
      <h2>ADVANCE SENSI PACKAGE</h2>
      <div className="price-tag">₹399</div>
      <h3>WHAT WILL YOU GET?</h3>
      <ul>
        <li>ADVANCE SENSI ZIP FILE</li>
        <li id="liveSupport">LIVE SUPPORT FROM MY TEAM</li>
        <li>ADVANCE HEADSHOT REGEDITS</li>
        <li>NO RECOIL REGEDITS</li>
        <li>AIMLOCK REGEDITS</li>
        <li>TALKBACK SETTINGS</li>
        <li>2X CHEAT</li>
        <li>LITE FF PREMIUM SENSI</li>
        <li>PN KAMI PAID SENSI FULL</li>
        <li>PREMIUM TWEAKS</li>
        <li>BEST EMULATOR VERSION FOR HEADSHOT</li>
        <li>EMULATOR SENSI</li>
        <li>ADVANCE BAT FILES</li>
        <li>ADVANCE KEYMAPING</li>
      </ul>
      <button 
        className="purchase-button"
        onClick={() => handlePurchaseClick("advance")}
      >
        PURCHASE NOW ₹399
      </button>
    </div>
  );

  const SupremeText = (
    <div className="sensi-detail-content">
      <h2>SUPREME SENSI PACKAGE</h2>
      <div className="price-tag">₹499</div>
      <h3>WHAT WILL YOU GET?</h3>
      <ul>
        <li>ALL ADVANCE SENSI FILES</li>
        <li id="liveSupport">LIVE SUPPORT FROM MY TEAM</li>
        <li>MR COSMIC PAID SENSI</li>
        <li>QUANTUM XD HACKER SESNI</li>
        <li>RYNOXXY PAID SENSI</li>
        <li>NG MAXXA PAID SENSI</li>
        <li>KAI XD PAID SENSI</li>
        <li>VIREN GAMER PAID SENSI</li>
      </ul>
      <button 
        className="purchase-button"
        onClick={() => handlePurchaseClick("supreme")}
      >
        PURCHASE NOW ₹499
      </button>
    </div>
  );

  // Helper function to check if a plan is selected
  const isPlanSelected = (plan) => {
    return selectedPlan === plan ? "selected-plan" : "";
  };

  return (
    <div className="paid-sensi-page">
      <NavBar />
      <div className="sensi-container">
        <h1 className="sensi-title">Choose Your Sensi Plan</h1>
        
        <div className="sensi-content">
          <div className="sensi-plans">
            <div 
              className={`sensi-plan-card ${isPlanSelected("basic")}`}
              onClick={() => updateSensiDetail(BasicText, "basic")}
            >
              <h3>BASIC SENSI</h3>
              <div className="plan-price">₹199</div>
              <p>Perfect for beginners</p>
            </div>
            
            <div 
              className={`sensi-plan-card ${isPlanSelected("advance")}`}
              onClick={() => updateSensiDetail(AdvanceText, "advance")}
            >
              <h3>ADVANCE SENSI</h3>
              <div className="plan-price">₹399</div>
              <p>For serious players</p>
            </div>
            
            <div 
              className={`sensi-plan-card ${isPlanSelected("supreme")}`}
              onClick={() => updateSensiDetail(SupremeText, "supreme")}
            >
              <h3>SUPREME SENSI</h3>
              <div className="plan-price">₹499</div>
              <p>Ultimate performance</p>
            </div>
          </div>
          
          <div className="sensi-details">
            <div className={`sensi-detail-container ${fade ? "fade-out" : "fade-in"}`}>
              {typeof sensiDetail === 'string' ? (
                <div className="sensi-welcome">
                  <h2>{sensiDetail}</h2>
                  <p>Click on any plan above to see detailed features</p>
                </div>
              ) : sensiDetail}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaidSensi;
