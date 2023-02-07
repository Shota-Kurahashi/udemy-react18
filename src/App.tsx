import "./App.css";
import { AutoBatchEventHandler } from "./components/AutoBatchEventHandler";
import { AutoBatchOther } from "./components/AutoBatchOther";
import { Transition } from "./components/Transition";

function App() {
  console.log("App()");

  return (
    <div className="App">
      <AutoBatchEventHandler />
      <AutoBatchOther />
      <Transition />
    </div>
  );
}

export default App;
