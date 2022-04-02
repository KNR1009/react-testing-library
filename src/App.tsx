import "./App.css";
import { RenderInput } from "./RenderInput";

function App() {
  const onClick = (value: string) => {
    console.log(value);
  };
  return (
    <div className="App">
      <RenderInput onClick={onClick}></RenderInput>
    </div>
  );
}

export default App;
