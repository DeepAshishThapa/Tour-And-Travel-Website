import { Approutes } from "./Routes/Routes"
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // global duration (optional)
  }, []);
  

  return (
    <>
      <Approutes/>
      
      
    </>
  )
}

export default App
