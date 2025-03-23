import React, { useState } from "react";
import "./PaidSensi.css";
import NavBar from "./NavBar";

const PaidSensi = () => {
  const [SensiDetail, setSensiDetail] = useState("CHOOSE YOUR SENSI PLAN");
  const [fade, setFade] = useState(false);
  const [basicText, setBasicText] = useState("BASIC SENSI");
  const [advanceText, setAdvanceText] = useState("ADVANCE SENSI");
  const [supremeText, setSupremeText] = useState("SUPREME SENSI");

  const updateSensiDetail = (text) => {
    setFade(true);
    setTimeout(() => {
      setSensiDetail(text);
      setFade(false);
    }, 500); // Wait for fade-out before updating text
  };

  const BasicText = (
    <div className="BasicText">
      <h2>WHAT WILL YOU GET?</h2>
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
    </div>
  );

  const AdvanceText = (
    <div className="AdvanceText">
      <h2>WHAT WILL YOU GET?</h2>
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
    </div>
  );

  const SupremeText = (
    <div className="SupremeText">
      <h2>WHAT WILL YOU GET?</h2>
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
    </div>
  );

  return (
    <div>
      <NavBar />
      <div className="ps-main-container">
        <div className="ps-container-1">
          <div
            className="ps-basic-container"
            onMouseEnter={() => {
              updateSensiDetail(BasicText);
              setBasicText("PURCHASE ₹ 199💸");
            }}
            onMouseLeave={() => {
              updateSensiDetail("CHOOSE YOUR SENSI PLAN");
              setBasicText("BASIC SENSI");
            }}
          >
            <h1>{basicText}</h1>
          </div>
          <div
            className="ps-advance-container"
            onMouseEnter={() => {
              updateSensiDetail(AdvanceText);
              setAdvanceText("PURCHASE ₹ 399💸");
            }}
            onMouseLeave={() => {
              updateSensiDetail("CHOOSE YOUR SENSI PLAN");
              setAdvanceText("ADVANCE SENSI");
            }}
          >
            <h1>{advanceText}</h1>
          </div>
          <div
            className="ps-supreme-container"
            onMouseEnter={() => {
              updateSensiDetail(SupremeText);
              setSupremeText("PURCHASE ₹ 499💸");
            }}
            onMouseLeave={() => {
              updateSensiDetail("CHOOSE YOUR SENSI PLAN");
              setSupremeText("SUPREME SENSI");
            }}
          >
            <h1>{supremeText}</h1>
          </div>
        </div>
        <div className="ps-container-2">
          <div className={`ps-detail-container ${fade ? "fade-out" : "fade-in"}`}>
            {typeof SensiDetail === 'string' ? <h1>{SensiDetail}</h1> : SensiDetail}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaidSensi;
