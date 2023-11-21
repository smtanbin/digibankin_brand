import { lazy, Suspense } from 'react';
// import Navbar from "./Components/Ux/Navbar";
const Navbar = lazy(() => import('./Components/Ux/Navbar'));
import { useContext } from "react";
import { LanguageContext } from "./Context/languageProvider";
import StaticData from './StaticData';
import Navigation from './Components/Ux/Navigation';
import Footer from './Components/Pages/Footer';

// Components
const Hero = lazy(() => import("./Components/Hero"));
const Template = lazy(() => import("./Components/Pages/Template"));
const WhatsNew = lazy(() => import("./Components/WhatsNew"));
const SideNavigation = lazy(() => import("./Components/Ux/SideNavigation"));



interface ModelData {
  title: string;
  greeting: string[];
  steps: {
    img: string;
    title: string;
    content: string[];
  }[];
  end: string;
}

const LandingPage = () => {

  const { language } = useContext(LanguageContext);


  // Array of data keys
  const dataKeys = Object.keys(StaticData);

  // Map over the data keys to dynamically create the array of ModelData
  const templates: ModelData[] = dataKeys.map((dataKey) => {
    const dataFinal: ModelData = language ? StaticData[dataKey].enData : StaticData[dataKey].bnData;
    return dataFinal;
  });
  return (



    <Suspense fallback={<div className="loading loading-lg"></div>}>
      <Navbar />
      {/* small Screen */}
      <div className="off-canvas show-sm">
        <div id="sidebar-id" className="off-canvas-sidebar">
          <Navigation data={templates} />
        </div>
        <a className="off-canvas-overlay" href="#close"></a>
        <Hero />
        <WhatsNew />
        {templates.map((template, index) => (
          <Template key={index} data={template} />
        ))}
        <Footer />
      </div>
      {/* Large Screen */}
      <div className="columns col-gapless hide-sm">
        <div className="column col-2">
          <SideNavigation data={templates} />
        </div>
        <div className="column col-10 col-sm-12">
          <div style={{ marginLeft: "5%", marginRight: "5%" }}>
            <Hero />
            <WhatsNew />
            <br />
            {templates.map((template, index) => (
              <Template key={index} data={template} />
            ))}
          </div>
          <Footer />
        </div>
      </div>

    </Suspense>
  );
}

export default LandingPage;
