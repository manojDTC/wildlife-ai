import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomeNew from "../pages/Home/index";
import Sidebar from "../components/Sidebar";
import Alerts from "../pages/Alerts";
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
      </Routes>
    </Router>
  );
};

export default AppRoutes;
