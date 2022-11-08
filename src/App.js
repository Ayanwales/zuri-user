import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Redirect from "./pages/Redirect"
function App() {
  const [mobile, setMobile] = React.useState(false)
  React.useEffect(()=>{
    const resize = ()=>{
    if(window.innerWidth > 768){
      setMobile(false)
    }
    else if (window.innerWidth < 768){
      setMobile(true)
    }
  }
  window.addEventListener("resize", resize);
   return ()=>{
    window.removeEventListener("resize", resize);
   }
  },[])
  
  return ( 
    <div className="App">
      <Router>
        <Routes>
          <Route path = {"/"} element = {<Home mobile={mobile}/>}/>
          <Route path = {"/contact"} element = {<Contact/>}/>
          <Route path = {"/Redirect"} element = {<Redirect/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}
export default App;
