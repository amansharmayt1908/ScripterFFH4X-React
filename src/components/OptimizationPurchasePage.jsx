import React, { useEffect, useState } from "react";
import "./OptimizationPurchasePage.css";
import NavBar from "./NavBar";
import { Link, useLocation } from "react-router-dom";

const OptimizationPurchasePage = () => {
  const location = useLocation();
  const [selectedPlan, setSelectedPlan] = useState(null);
  
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const plan = queryParams.get('plan');
    if (plan) {
      setSelectedPlan(plan.replace('-optimization', ''));
    }
  }, [location]);

  const handleWhatsAppClick = () => {
    const phoneNumber = "916205290703"; 
    let planName = "Optimization";
    let planPrice = "";
    
    if (selectedPlan === "basic") {
      planName = "Basic Optimization";
      planPrice = "₹299";
    } else if (selectedPlan === "advance") {
      planName = "Advance Optimization";
      planPrice = "₹599";
    } else if (selectedPlan === "supreme") {
      planName = "Supreme Optimization";
      planPrice = "₹999";
    }
    
    const message = `Hello, I've made a payment of ${planPrice} for the ${planName} package. Here's my payment screenshot.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const getQrCodeForPlan = () => {
    switch(selectedPlan) {
      case "basic":
        return "/images/temp.jpg";
      case "advance":
        return "/images/temp.jpg";
      case "supreme":
        return "/images/temp.jpg";
      default:
        return "/images/temp.jpg";
    }
  };

  const getPriceForPlan = () => {
    switch(selectedPlan) {
      case "basic":
        return "₹299";
      case "advance":
        return "₹599";
      case "supreme":
        return "₹999";
      default:
        return "";
    }
  };

  const isPlanSelected = (plan) => {
    return selectedPlan === plan ? "selected-plan" : "";
  };

  return (
    <div className="optimization-purchase-page">
      <NavBar />
      <div className="optimization-purchase-container">
        <h1 className="optimization-purchase-title">Complete Your Optimization Purchase</h1>
        
        <div className="optimization-purchase-content">
          <div className="optimization-qr-section">
            <h2>Scan QR Code to Pay {getPriceForPlan()}</h2>
            <div className="optimization-qr-placeholder">
              <img 
                src={getQrCodeForPlan()} 
                alt={`Payment QR Code for ${selectedPlan || 'default'} plan`} 
                className="optimization-qr-image"
              />
              <p>Or pay directly to UPI ID: BHARATPE.8C0Y0V6S0X98874@fbpe</p>
            </div>
            <button className="optimization-whatsapp-button" onClick={handleWhatsAppClick}>
              <i className="fa fa-whatsapp"></i> Send Payment Screenshot
            </button>
          </div>
          
          <div className="optimization-pricing-section">
            <h2>Select Your Optimization Plan</h2>
            <div className="optimization-price-cards">
              <div 
                className={`optimization-price-card ${isPlanSelected("basic")}`}
                onClick={() => setSelectedPlan("basic")}
              >
                <h3>BASIC OPTIMIZATION</h3>
                <div className="optimization-price">₹299</div>
                <Link to="/PaidOptimization" className="optimization-back-link">View Details</Link>
              </div>
              
              <div 
                className={`optimization-price-card ${isPlanSelected("advance")}`}
                onClick={() => setSelectedPlan("advance")}
              >
                <h3>ADVANCE OPTIMIZATION</h3>
                <div className="optimization-price">₹599</div>
                <Link to="/PaidOptimization" className="optimization-back-link">View Details</Link>
              </div>
              
              <div 
                className={`optimization-price-card ${isPlanSelected("supreme")}`}
                onClick={() => setSelectedPlan("supreme")}
              >
                <h3>SUPREME OPTIMIZATION</h3>
                <div className="optimization-price">₹999</div>
                <Link to="/PaidOptimization" className="optimization-back-link">View Details</Link>
              </div>
            </div>
          </div>
          
          <div className="optimization-instructions-section">
            <h2>How to Complete Your Purchase</h2>
            <ol className="optimization-steps">
              <li>
                <span className="optimization-step-number">1</span>
                <div className="optimization-step-content">
                  <h3>Select Your Package</h3>
                  <p>Choose one of the Optimization packages above.</p>
                </div>
              </li>
              
              <li>
                <span className="optimization-step-number">2</span>
                <div className="optimization-step-content">
                  <h3>Make Payment</h3>
                  <p>Scan the QR code to pay the exact amount.</p>
                </div>
              </li>
              
              <li>
                <span className="optimization-step-number">3</span>
                <div className="optimization-step-content">
                  <h3>Send Screenshot</h3>
                  <p>Send your payment screenshot via WhatsApp to receive your files.</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptimizationPurchasePage; 