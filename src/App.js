import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";
import Statistics from "./components/Statistics";
import AverageEarn from "./components/AverageEarn";
import FaqAccording from "./components/FaqAccording";
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <>
      <Statistics />
      <AverageEarn />
      <FaqAccording />
      <FooterSection />
    </>
  );
}

export default App;
