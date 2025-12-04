import './App.scss';
import { Routes, Route, useLocation } from "react-router-dom";
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

import About from "./containers/about/index.jsx";
import Home from "./containers/home/index.jsx";
import Portfolio from "./containers/portfolio/index.jsx";
import Resume from "./containers/resume/index.jsx";
import Skills from "./containers/skills/index.jsx";
import Navbar from './components/navbar/index.jsx';
import particules from './components/utils.js/particules.js';
import Stage1erAnnee from './containers/portfolio/projet/Stage_1er_Annee';
import VFGAuto1erAnnee from './containers/portfolio/projet/vfgauto_1er_annee';
import Stage2emeAnnee from './containers/portfolio/projet/Stage_2eme_Annee';
import GLPI from './containers/portfolio/projet/GLPI';

function App() {

const location = useLocation();
console.log(location);

const handleInit = async (main)=>{
  await loadFull(main)
}

const renderParticleJsInHomePage = location.pathname === "/";

  return (
    <div className="App">
      {/* particules js */}

    {renderParticleJsInHomePage && (
          <Particles id='particules' options={particules} init={handleInit}/>
)}

      {/* navbar */}
      <Navbar />

      {/* main page content */}
      <div className='App__main-page-content'>
        <Routes>
      <Route index path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/resume" element={<Resume />}/>
      <Route path="/skills" element={<Skills />}/>
      <Route path="/portfolio" element={<Portfolio />}/>
      <Route path="/stage" element={<Stage1erAnnee />} />
      <Route path="/vfgauto" element={<VFGAuto1erAnnee />} />
      <Route path="/glpi" element={<GLPI />} />
      <Route path="/stage2" element={<Stage2emeAnnee />} />
      {/* If you want a contact page in the navbar/route, re-enable this line and import Contact above */}
    </Routes>
    </div>
    

    </div>
  );
}

export default App;
