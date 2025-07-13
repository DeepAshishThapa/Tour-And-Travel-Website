import { Approutes } from "./Routes/Routes"
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,   // 👈 element starts animating only when 200px inside viewport
      once: false,

    })
         
  }, []);


  return (
    <>
    <div className="overflow-x-hidden"><Approutes /></div>
      


    </>
  )
}

export default App
