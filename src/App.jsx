// import './App.css'
import HomePage from './components/HomePage'
import PaidSensi from './components/PaidSensi'
import PurchasePage from './components/PurchasePage'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/PaidSensi" element={<PaidSensi />} />
          <Route path="/purchase" element={<PurchasePage />} />
          <Route path="/test" element={<div style={{color: "white", padding: "20px"}}>
            <h1>Test Page</h1>
            <p>If you can see this, routing is working correctly.</p>
          </div>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
