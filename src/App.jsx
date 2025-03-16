// import './App.css'
import HomePage from './components/HomePage'
import PaidSensi from './components/PaidSensi'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/PaidSensi" element={<PaidSensi />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
