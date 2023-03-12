import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/Header/NavBar";
import Landing from "./Pages/HomePage/Landing";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Landing />
        <Routes>
          <Route />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
