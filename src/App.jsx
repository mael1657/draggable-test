import React from "react";
import "./App.css";
import Draggable from "react-draggable";

function App() {
  return (
    <div className="App">
      <Draggable>
        <div>ㅎㅇㅎㅇ</div>
      </Draggable>
      <div draggable>드래거블 태그</div>
    </div>
  );
}

export default App;
