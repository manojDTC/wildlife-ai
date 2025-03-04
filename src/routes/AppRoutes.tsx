import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Sidebar from "../components/Sidebar";
import Alerts from "../pages/Alerts";
import Ticket from "../pages/Ticket";
import Header from "../components/Header";

const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/ticket" element={<Ticket />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
