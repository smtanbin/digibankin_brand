import { useState } from "react";
import HomePage from "./Components/Pages/Home";
import Navbar from "./Components/Ux/Navbar";


const LandingPage: React.FC = () => {

  const [isEnglish, setIsEnglish] = useState(true);
  return (
    <>
      <Navbar isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
      <HomePage isEnglish={isEnglish} />
    </>
  )
}

export default LandingPage