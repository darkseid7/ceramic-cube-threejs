/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { CameraControls } from "@react-three/drei";

import "./App.css";

import ThreeCube from "./components/ThreeCube";
import Cube from "./components/Cube";

import Icosahedron from "./components/Icosahedron";
import ThreeScene from "./components/ThreeScene";

import RoundedBoxComponent from "./components/RoundedBox";

import Fatline from "./components/CubeLine";

function App() {
  return (
    <>
      <div style={{ height: "100vh" }}>
        <ThreeScene>
          <Fatline
            count={8}
            color={"orange"}
          />
        </ThreeScene>
        {/* 
        <ThreeScene>
          <Cube
            color="orange"
            scale={[2, 2, 2]}
          />
          <Cube
            color="orange"
            scale={[1.995, 1.995, 1.995]}
          />
          <Cube
            color="orange"
            scale={[1, 1, 1]}
          />
        </ThreeScene> */}

        {/* <ThreeScene>
          <RoundedBoxComponent /> 
          
        </ThreeScene> */}
      </div>
      {/* <Canvas>

      </Canvas> */}
    </>
  );
}

export default App;
