import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import About from "./About Us/About";
import LoginPage from "./Components/Form/LoginPage";
import SignUp from "./Components/Form/SignUp";
import Program from "./OurProgram/Program";
import Admin from "./Pages/AdminPage/Admin";
import Dashboard from "./Pages/AdminPage/Dashboard";
import Donation from "./Pages/Donation/Donation";
import Otp from "./Pages/EnterOtp/EnterOtp";
import Landing from "./Pages/HomePage/Landing";
import DonateDes from "./Pages/Products/DonateDes";
import Products from "./Pages/Products/Products";
import RequestDes from "./Pages/Products/RequestDes";
import Events from "./Pages/UserProfile/Events";
import Donate from "./Pages/UserProfile/Products/Donate";
import Request from "./Pages/UserProfile/Products/Request";
import Profile from "./Pages/UserProfile/Profile";
import Sells from "./Pages/UserProfile/Sells";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/ourprogram" element={<Program />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/request" element={<Request />} />
          <Route path="/requestdescription" element={<RequestDes />} />
          <Route path="/donatedescription" element={<DonateDes />} />
          <Route path="admin" element={<Admin />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
          <Route path="profile" element={<Profile />}>
            <Route index element={<Events />} />
            <Route path="events" element={<Events />} />
            <Route path="sells" element={<Sells />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
