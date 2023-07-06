/* eslint-disable react/no-unknown-property */
import React from "react";
import ThreeScene from "./ThreeScene";

const Icosahedron = ({ color, position }) => {
  return (
    <>
      <mesh
        scale={[0.7, 0.7, 0.7]}
        position={position}
      >
        <icosahedronGeometry args={[1, 1]} />
        <meshNormalMaterial wireframe />
      </mesh>

      <mesh scale={[0.7, 0.7, 0.7]}>
        <icosahedronGeometry args={[1, 1]} />
        <meshPhysicalMaterial
          flatShading={true}
          side="DoubleSide"
          metalness={0.1}
          roughness={0.1}
        />
      </mesh>

      <mesh
        scale={[1.5, 1.5, 1.5]}
        position={[0, 0, -1]}
      >
        <circleGeometry args={[1, 3]} />
        <meshNormalMaterial
          color={color}
          metalness={0.2}
          roughness={0.5}
          wireframe
        />
      </mesh>

      <pointLight
        color={"#FF00FF"}
        intensity={1}
        position={[10, 10, 5]}
      />

      <pointLight
        color={"#8800ff"}
        intensity={0.2}
        position={[-5, -10, -15]}
      />
      <ambientLight
        color={"#777777"}
        intensity={0.2}
      />
    </>
  );
};

export default Icosahedron;
