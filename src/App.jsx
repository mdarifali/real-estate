import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import AllProperties from "./components/Properties/AllProperties";
import Contact from "./components/Contact/Contact";
import Services from "./components/Services/Services";
import NotFound from "./components/Not Found/NotFound";


function App() {
  
  return (
    <>
      <Routes>
        <Route path="/"  element={ <Home /> }/>
        <Route path="/propertis"  element={ <AllProperties /> }/>
        <Route path="/services"  element={ <Services /> }/>
        <Route path="/about"  element={ <About /> }/>
        <Route path="/contact"  element={ <Contact /> }/>
        <Route path="*"  element={ <NotFound/> }/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
