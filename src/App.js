import Input from "./components/Input";
import Slider from "./components/Slider";
import Tab from "./components/Tab";
import Toggle from "./components/Toggle";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "100px" }}>
      <Toggle />
      <Tab />
      <Slider />
      <Input />
    </div>
  );
}

export default App;
