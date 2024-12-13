import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AddItems from "./Pages/AddItems";
import Notification from "./Pages/Notification";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route path="/AddItems" element={<AddItems />} />

          <Route path="/Notification" element={<Notification />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
