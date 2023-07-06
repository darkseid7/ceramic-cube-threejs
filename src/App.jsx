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

function App() {
  return (
    <>
      <div style={{ height: "100vh" }}>
        <ThreeScene>
          <RoundedBoxComponent />
        </ThreeScene>
        {/* <ThreeScene>
          <Icosahedron position={(0, 0, 0)} />
        </ThreeScene> */}
      </div>
      {/* <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
        />
        <pointLight position={[-10, -10, -10]} />
        <CameraControls position={[0, 0, -2]} />
        <ThreeCube position={[-1.2, 0, 0]} />
        <ThreeCube position={[1.2, 0, 0]} />
        <ThreeCube position={[3.2, 0, 0]} />
      </Canvas> */}
    </>
  );
}

export default App;
