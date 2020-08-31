import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Canvas, Dom } from "react-three-fiber";
import Controls from "./Controls";
import Scene from './Scene';
import "../index.scss";

function App() {
  return (
      <Canvas camera={{ zoom: 40, position: [0, 0, 500] }}>
        <Suspense
          fallback={<Dom center className="loading" children="Loading..." />}
        >
          <Controls />
          <Scene />
        </Suspense>
      </Canvas>
  );
}

export default App;