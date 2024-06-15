import "./App.scss";
import Delivery from "./components/Delivery/Delivery.jsx";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Popular from "./components/Popular/Popular.jsx";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <Hero />
      </div>
      <Popular />
      <Delivery />
    </div>
  );
}

export default App;
