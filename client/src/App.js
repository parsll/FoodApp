import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import About from "./About Us/About";
import Footer from "./Components/Footer/Footer";
import LoginPage from "./Components/Form/LoginPage";
import SignUp from "./Components/Form/SignUp";
import Program from "./OurProgram/Program";
import Admin from "./Pages/AdminPage/Admin";
import Dashboard from "./Pages/AdminPage/Dashboard";
import HotelAdd from "./Pages/AdminPage/HotelAdd";
import HotelDetails from "./Pages/AdminPage/HotelDetails";
import HotelOffers from "./Pages/AdminPage/HotelOffers";
import Review from "./Pages/AdminPage/Review";
import Landing from "./Pages/HomePage/Landing";
import NavBar from "./Pages/UserProfile/NavBar";
import Profile from "./Pages/UserProfile/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/ourprogram" element={<Program />} />
          <Route path="admin" element={<Admin />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="hoteldetail" element={<HotelDetails />} />
            <Route path="offer" element={<HotelOffers />} />
            <Route path="review" element={<Review />} />
            <Route path="adddetail" element={<HotelAdd />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
