import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomeNew from "../pages/Home/index";
import Sidebar from "../components/Sidebar";
import Alerts from "../pages/Alerts";
import Ticket from "../pages/Ticket";
import Header from "../components/Header";
import HomePage from "../pages/Home";

const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/ticket" element={<Ticket />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
