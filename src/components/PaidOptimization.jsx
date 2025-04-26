import React, { useState } from "react";
import "./PaidOptimization.css";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";

const PaidOptimization = () => {
  const [optimizationDetail, setOptimizationDetail] = useState("CHOOSE YOUR OPTIMIZATION PLAN");
  const [fade, setFade] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  
  const navigate = useNavigate();

  const updateOptimizationDetail = (text, plan) => {
    setFade(true);
    setSelectedPlan(plan);
    setTimeout(() => {
      setOptimizationDetail(text);
      setFade(false);
    }, 500);
  };

  const handlePurchaseClick = (plan) => {
    navigate(`/optimization-purchase?plan=${plan}`);
  };

  const BasicText = (
    <div className="optimization-detail-content">
      <h2>BASIC OPTIMIZATION PACKAGE</h2>
      <div className="price-tag">₹299</div>
      <h3>WHAT WILL YOU GET?</h3>
      <ul>
        <li>BASIC OPTIMIZATION ZIP FILE</li>
        <li id="liveSupport">NO LIVE SUPPORT FROM MY TEAM</li>
        <li>BASIC GAME BOOSTER</li>
        <li>FPS BOOST SETTINGS</li>
        <li id="liveSupport">60-70 FPS WHITHOUT GRAPHICS CARD</li>
        <li>BASIC RAM OPTIMIZATION</li>
        <li>GAME LAG FIX</li>
        <li>BASIC GAME GRAPHICS</li>
        <li>DEVICE CLEANUP</li>
        <li>BASIC GAME SETTINGS</li>
      </ul>
      <button 
        className="purchase-button"
        onClick={() => handlePurchaseClick("basic")}
      >
        PURCHASE NOW ₹299
      </button>
    </div>
  );

  const AdvanceText = (
    <div className="optimization-detail-content">
      <h2>ADVANCE OPTIMIZATION PACKAGE</h2>
      <div className="price-tag">₹599</div>
      <h3>WHAT WILL YOU GET?</h3>
      <ul>
        <li>ADVANCE OPTIMIZATION ZIP FILE</li>
        <li id="liveSupport">LIVE SUPPORT FROM MY TEAM</li>
        <li>PREMIUM GAME BOOSTER</li>
        <li>OPTIMIZERS SOFTWARE</li>
        <li>CUSTOM OPERATING SYSTEM</li>
        <li>ULTRA FPS BOOST</li>
        <li>EMULATOR optimization</li>
        <li id="liveSupport">90-100 FPS WHITHOUT GRAPHICS CARD</li>
        <li>ADVANCE RAM OPTIMIZATION</li>
        <li>OPTIMIZERS SOFTWARE</li>
        <li>FPS BOOST SETTINGS</li>
        <li>DEEP DEVICE CLEANUP</li>
        <li>BLUESTACKS LIMIT INCREASE</li>
        <li>GAMING MODE TWEAKS</li>
        <li>CUSTOM DNS SETTINGS</li>
      </ul>
      <button 
        className="purchase-button"
        onClick={() => handlePurchaseClick("advance")}
      >
        PURCHASE NOW ₹599
      </button>
    </div>
  );

  const SupremeText = (
    <div className="optimization-detail-content">
      <h2>SUPREME OPTIMIZATION PACKAGE</h2>
      <div className="price-tag">₹999</div>
      <h3>WHAT WILL YOU GET?</h3>
      <ul>
        <li>ALL ADVANCE OPTIMIZATION FILES</li>
        <li id="liveSupport">PRIORITY LIVE SUPPORT</li>
        <li id="liveSupport">150-200 FPS WHITHOUT GRAPHICS CARD</li>
        <li>ULTIMATE GAME BOOSTER</li>
        <li>MAXIMUM FPS UNLOCK</li>
        <li>QUANTUM XD ALL SENSI</li>
        <li>ANTI-LAG SYSTEM</li>
        <li>MR COSMIC PAID optimization</li>
        <li>SYSTEM OPTIMIZATION</li>
        <li>VIP GAME SETTINGS</li>
        <li>ROOT OPTIMIZATION</li>
        <li>PREMIUM DNS CONFIG</li>
      </ul>
      <button 
        className="purchase-button"
        onClick={() => handlePurchaseClick("supreme")}
      >
        PURCHASE NOW ₹999
      </button>
    </div>
  );

  const isPlanSelected = (plan) => {
    return selectedPlan === plan ? "selected-plan" : "";
  };

  return (
    <div className="paid-optimization-page">
      <NavBar />
      <div className="optimization-container">
        <h1 className="optimization-title">Choose Your Optimization Plan</h1>
        
        <div className="optimization-content">
          <div className="optimization-plans">
            <div 
              className={`optimization-plan-card ${isPlanSelected("basic")}`}
              onClick={() => updateOptimizationDetail(BasicText, "basic")}
            >
              <h3>BASIC OPTIMIZATION</h3>
              <div className="plan-price">₹299</div>
              <p>Essential performance boost</p>
            </div>
            
            <div 
              className={`optimization-plan-card ${isPlanSelected("advance")}`}
              onClick={() => updateOptimizationDetail(AdvanceText, "advance")}
            >
              <h3>ADVANCE OPTIMIZATION</h3>
              <div className="plan-price">₹599</div>
              <p>Premium performance</p>
            </div>
            
            <div 
              className={`optimization-plan-card ${isPlanSelected("supreme")}`}
              onClick={() => updateOptimizationDetail(SupremeText, "supreme")}
            >
              <h3>SUPREME OPTIMIZATION</h3>
              <div className="plan-price">₹999</div>
              <p>Ultimate gaming experience</p>
            </div>
          </div>
          
          <div className="youtube-button-container">
            <a 
              href="https://www.youtube.com/@ScripterFFH4X" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="youtube-button"
            >
              <i className="fa fa-youtube-play"></i> Watch Optimization Tutorials
            </a>
          </div>

          <div className="optimization-details">
            <div className={`optimization-detail-container ${fade ? "fade-out" : "fade-in"}`}>
              {typeof optimizationDetail === 'string' ? (
                <div className="optimization-welcome">
                  <h2>{optimizationDetail}</h2>
                  <p>Click on any plan above to see detailed features</p>
                </div>
              ) : optimizationDetail}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaidOptimization;