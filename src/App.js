// import "./App.css";
import {
  Navbar,
  Sidebar,
  Home,
  Cryptocurrencies,
  Exchanges,
  News,
} from "./components";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* <Sidebar /> */}
          <Routes>
            <Route path="/" element={<Home  />} />
            <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
            <Route path="/exchanges" element={<Exchanges />} />
            <Route path="/news" element={<News />} />
            <Route path="/cryptocurrencies/:id" element={<Home />} />
          </Routes>
        
      </Router>
    </div>
  );
}

export default App;
