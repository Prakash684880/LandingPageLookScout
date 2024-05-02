import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";


function App() {

  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
