import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/Header/NavBar";
import Landing from "./Pages/HomePage/Landing";
import About from './About Us/About';
import Program from "./OurProgram/Program";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        {/* <Landing /> */}
        <About/>
        {/* <Program/> */}
        <Routes>
          <Route />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
