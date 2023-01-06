import { Route, Routes } from "react-router-dom";
import "./App.css";
import Carousel from "./Carousel";
import Header from "./Header";
import Main from "./Main";
import NotFound from "./NotFound";
import Birthday from "./Birthday";
import ListTable from "./ListTable";
import Info from "./assets/Info";
import { Suspense } from "react";

function App() {
  return (
    <Suspense fallback='Loading...'>
      <div className="App">
        {/* <InfoModal /> */}
        <Header />
        <Carousel />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/list" element={<ListTable />} />
          <Route path="/today" element={<Birthday />} />
          <Route path="/info" element={<Info />} />
          <Route path="/contact" element={<Birthday />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <Main /> */}
      </div>
    </Suspense>
  );
}

export default App;
