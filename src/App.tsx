import "./App.css";
import { FrameworkList } from "./FrameworkList";
import { RenderInput } from "./RenderInput";

function App() {
  // const onClick = (value: string) => {
  //   console.log(value);
  // };
  const data = [
    {
      id: 1,
      item: "React",
    },
    {
      id: 2,
      item: "Angular",
    },
    {
      id: 3,
      item: "Vue",
    },
  ];

  return (
    <div className="App">
      {/* <RenderInput onClick={onClick}></RenderInput> */}
      <FrameworkList data={data}></FrameworkList>
      {/* <FrameworkList ></FrameworkList> */}
    </div>
  );
}

export default App;
