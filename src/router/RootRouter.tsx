// RootRouter.tsx
import { Routes, Route } from "react-router-dom";
import LandingPage from "../LandingPage";
import HomePage from "../Components/Pages/Home";
import SelfReg from "../Components/Pages/SelfReg";
import SelfReset from "../Components/Pages/SelfReset";
import About from "../Components/Pages/About";

const RootRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} >
                <Route index element={<HomePage />} />
                <Route path="/About" element={<About />} />
                <Route path="/SelfReg" element={<SelfReg />} />
                <Route path="/SelfReset" element={<SelfReset />} />
            </Route>
        </Routes>
    );
};

export default RootRouter;
