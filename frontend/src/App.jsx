
import NavBar from "./Component/NavBar"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./Pages/Home";

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
