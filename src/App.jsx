import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Posts from "./pages/Posts.jsx";
import About from "./pages/About.jsx";
import Navbar from "./components/UI/Navbar/Navbar.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
      </div>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
