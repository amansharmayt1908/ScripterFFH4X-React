import React, { useEffect, useState } from "react";
import "./PurchasePage.css";
import NavBar from "./NavBar";
import { Link, useLocation } from "react-router-dom";

const PurchasePage = () => {
  const location = useLocation();
  const [selectedPlan, setSelectedPlan] = useState(null);
  
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const plan = queryParams.get('plan');
    if (plan) {
      setSelectedPlan(plan);
    }
  }, [location]);

  const handleWhatsAppClick = () => {
    const phoneNumber = "916205290703"; 
    let planName = "Sensi";
    let planPrice = "";
    
    if (selectedPlan === "basic") {
      planName = "Basic Sensi";
      planPrice = "₹199";
    } else if (selectedPlan === "advance") {
      planName = "Advance Sensi";
      planPrice = "₹399";
    } else if (selectedPlan === "supreme") {
      planName = "Supreme Sensi";
      planPrice = "₹499";
    }
    
    const message = `Hello, I've made a payment of ${planPrice} for the ${planName} package. Here's my payment screenshot.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const getQrCodeForPlan = () => {
    switch(selectedPlan) {
      case "basic":
        return "/images/basicPaySensi.jpg";
      case "advance":
        return "/images/advancePaySensi.jpg";
      case "supreme":
        return "/images/supremePaySensi.jpg";
      default:
        return "/images/defaultPaySensi.jpg";
    }
  };

  const getPriceForPlan = () => {
    switch(selectedPlan) {
      case "basic":
        return "₹199";
      case "advance":
        return "₹399";
      case "supreme":
        return "₹499";
      default:
        return "";
    }
  };

  const isPlanSelected = (plan) => {
    return selectedPlan === plan ? "selected-plan" : "";
  };

  return (
    <div>
      <NavBar />
      <div className="purchase-container">
        <h1 className="purchase-title">Complete Your Purchase</h1>
        
        <div className="purchase-content">
          <div className="qr-section">
            <h2>Scan QR Code to Pay {getPriceForPlan()}</h2>
            <div className="qr-placeholder">
              <img 
                src={getQrCodeForPlan()} 
                alt={`Payment QR Code for ${selectedPlan || 'default'} plan`} 
                className="qr-image"
              />
              <p>Or pay directly to UPI ID: amansharmayt19@okicici</p>
            </div>
            <button className="whatsapp-button" onClick={handleWhatsAppClick}>
              <i className="fa fa-whatsapp"></i> Send Payment Screenshot
            </button>
          </div>
          
          <div className="pricing-section">
            <h2>Select Your Plan</h2>
            <div className="price-cards">
              <div 
                className={`price-card ${isPlanSelected("basic")}`}
                onClick={() => setSelectedPlan("basic")}
              >
                <h3>BASIC SENSI</h3>
                <div className="price">₹199</div>
                <Link to="/PaidSensi" className="back-link">View Details</Link>
              </div>
              
              <div 
                className={`price-card ${isPlanSelected("advance")}`}
                onClick={() => setSelectedPlan("advance")}
              >
                <h3>ADVANCE SENSI</h3>
                <div className="price">₹399</div>
                <Link to="/PaidSensi" className="back-link">View Details</Link>
              </div>
              
              <div 
                className={`price-card ${isPlanSelected("supreme")}`}
                onClick={() => setSelectedPlan("supreme")}
              >
                <h3>SUPREME SENSI</h3>
                <div className="price">₹499</div>
                <Link to="/PaidSensi" className="back-link">View Details</Link>
              </div>
            </div>
          </div>
          
          <div className="instructions-section">
            <h2>How to Complete Your Purchase</h2>
            <ol className="steps">
              <li>
                <span className="step-number">1</span>
                <div className="step-content">
                  <h3>Select Your Package</h3>
                  <p>Choose one of the Sensi packages above.</p>
                </div>
              </li>
              
              <li>
                <span className="step-number">2</span>
                <div className="step-content">
                  <h3>Make Payment</h3>
                  <p>Scan the QR code to pay the exact amount.</p>
                </div>
              </li>
              
              <li>
                <span className="step-number">3</span>
                <div className="step-content">
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

export default PurchasePage;
