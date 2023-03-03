import logo from "./logo.svg";
import "./App.css";
import React from 'react'
import { Canvas } from 'react-three-fiber'
import Cube from "./components/Cube";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Cube position={[0, 0, 0]} />
        </Canvas>
      </header>
    </div>
  );
}

export default App;
