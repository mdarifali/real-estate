import { Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Footer from "./components/Footer/Footer"
import About from "./components/About/About"
import AllProperties from "./components/Properties/AllProperties"


function App() {
  
  return (
    <>
      <Header />
      <Routes>
        <Route path="/"  element={ <Home /> }/>
        <Route path="/propertis"  element={ <AllProperties /> }/>
        <Route path="/about"  element={ <About /> }/>
        <Route path="/"  element={ <Home /> }/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
