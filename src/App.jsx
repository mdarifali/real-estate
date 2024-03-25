import { Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Footer from "./components/Footer/Footer"
import Properties from "./components/Properties/Properties"
import About from "./components/About/About"


function App() {
  
  return (
    <>
      <Header />
      <Routes>
        <Route path="/"  element={ <Home /> }/>
        <Route path="/propertis"  element={ <Properties /> }/>
        <Route path="/about"  element={ <About /> }/>
        <Route path="/"  element={ <Home /> }/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
