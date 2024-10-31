
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Card from './components/Card.jsx'
import BrewerySite from './components/BrewerySite'

function App() {

  return (
    <Router>
      <div>
      <Routes>
          {/* Main route for the dashboard */}
          <Route path="/" element={<Card />} />

          {/* Detail route for individual breweries */}
          <Route path="/brewery/:id" element={<BrewerySite />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
