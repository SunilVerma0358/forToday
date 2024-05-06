import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";
import Statistics from "./components/Statistics";
import AverageEarn from "./components/AverageEarn";
import FaqAccording from "./components/FaqAccording";

function App() {
  return (
    <>
      <Statistics />
      <AverageEarn />
      <FaqAccording />
    </>
  );
}

export default App;
