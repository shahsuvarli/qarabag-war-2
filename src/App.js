import "./App.css";
import BirthdayModal from "./BirthdayModal";
import Carousel from "./Carousel";
import Header from "./Header";
import Main from "./Main";

function App() {
  return (
    <div className="App">
      <BirthdayModal/>
      <Header/>
      <Carousel/>
      <Main />
    </div>
  );
}

export default App;
