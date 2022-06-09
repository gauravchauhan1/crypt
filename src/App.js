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
        <div className="main-wrapper">
          <Sidebar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
            <Route path="/exchanges" element={<Exchanges />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
