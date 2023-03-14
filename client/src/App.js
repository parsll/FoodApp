import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import About from "./About Us/About";
import LoginPage from "./Components/Form/LoginPage";
import SignUp from "./Components/Form/SignUp";
import Program from "./OurProgram/Program";
import Admin from "./Pages/AdminPage/Admin";
import Dashboard from "./Pages/AdminPage/Dashboard";
import Donation from "./Pages/Donation/Donation";
import Landing from "./Pages/HomePage/Landing";
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
          <Route path="/donation" element={<Donation />} />
          <Route path="/ourprogram" element={<Program />} />
          <Route path="admin" element={<Admin />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
