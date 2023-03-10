import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Carousel from "./Carousel";
import Header from "./Header";
import MartyrCards from "./MartyrCards";
import NotFound from "./NotFound";
import Birthday from "./Birthday";
import Info from "./Info";
import { Suspense } from "react";
import InfoModal from "./InfoModal";
import Footer from "./Footer";

function App() {
  return (
    <Suspense fallback="Loading...">
      <div className="App">
        <InfoModal />
        <Header />
        <Carousel />
        <Routes>
          <Route path="/" element={<MartyrCards />} />
          <Route path="/today" element={<Birthday />} />
          <Route path="/info" element={<Info />} />
          <Route path="/contact" element={<Birthday />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        {/* <Main /> */}
      </div>
    </Suspense>
  );
}

export default App;
