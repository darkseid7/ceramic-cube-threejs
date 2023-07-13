import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

const ThreeScene = ({ children }) => {
  return (
    <Canvas camera={{ position: [0, -1, 3] }}>
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
        autoRotateSpeed={0.9}
        enableZoom={false}
        enableDamping
        dampingFactor={0.02}
        target={[0, 0, 0]}
      />
    </Canvas>
  );
};

export default ThreeScene;
