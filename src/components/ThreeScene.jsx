import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

const ThreeScene = ({ children }) => {
  return (
    <Canvas camera={{ position: [3.5, 0, 0] }}>
      <color
        attach="background"
        args={["#000a0b"]}
      />
      {/* <pointLight position={[10, 15, 15]} /> */}
      {/* <ambientLight /> */}
      {/* <Stars
        count={10000}
        factor={2}
      /> */}
      {children}
      <OrbitControls
        autoRotate={true}
        autoRotateSpeed={1}
        enableZoom={false}
      />
    </Canvas>
  );
};

export default ThreeScene;
