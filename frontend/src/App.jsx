import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <div className="">
      <BrowserRouter>
        <ToastContainer position="top-center" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
