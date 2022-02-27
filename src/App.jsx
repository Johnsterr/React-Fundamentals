import "./styles/App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar.jsx";
import AppRouter from "./components/AppRouter.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
      </div>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
