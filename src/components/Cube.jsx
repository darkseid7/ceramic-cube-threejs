/* eslint-disable react/no-unknown-property */
import React from "react";
import ThreeScene from "./ThreeScene";
import { OrbitControls, Stars, Stats } from "@react-three/drei";

const Cube = ({ color, position }) => {
  return (
    <>
      <mesh position={position}>
        <sphereGeometry args={[1, 100, 100]} />
        <meshStandardMaterial color={color} />
      </mesh>
      {/* <ambientLight /> */}
      <OrbitControls
        autoRotate={false}
        autoRotateSpeed={0.2}
      />
      <Stats />
    </>
  );
};

export default Cube;
