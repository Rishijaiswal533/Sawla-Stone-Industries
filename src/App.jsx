
import { Routes, Route } from 'react-router-dom';

// --- Imports for the Main Route (Home Page Sections) ---
import Home from './Home';
import About from './About';
import ImageSlider from './ImageSlider';
import WhyChooseUs from './WhyChooseUs';
import TextureAndFinishesSlider from './TextureAndFinishesSlider';
import FullPageUI from './FullPageUI';
import ChemicalComposition from './ChemicalComposition';
import PremiumStoneCollection from './PremiumStoneCollection';
import ProjectIdeaCallout from './ProjectIdeaCallout';
import CompanyFooter from './CompanyFooter';
import Mapview from './Mapview';

// --- Separate Route Components ---
import GetQuote from './GetQuote';
import ImageGallery from './ImageGallery';


import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {

  

  return (
    <Routes>

      {/* MAIN ROUTE "/" */}
      <Route
        path="/"
        element={
          <div id="home-content-wrapper">
            <Home />

            <About id="about" />
            <ImageSlider />
            <WhyChooseUs />
            <ImageGallery />
            <TextureAndFinishesSlider id="style" />
            <FullPageUI />
            <ChemicalComposition />
            <PremiumStoneCollection id="collection" />
            <ProjectIdeaCallout />
            <Mapview />
            <CompanyFooter />
          </div>
        }
      />

      {/* GET QUOTE ROUTE */}
      <Route path="/get-quote" element={<GetQuote />} />


      
      


    </Routes>
  );
}

export default App;
