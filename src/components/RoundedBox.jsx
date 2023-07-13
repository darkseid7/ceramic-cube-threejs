/* eslint-disable react/no-unknown-property */
import React from "react";
import { RoundedBox, useTexture } from "@react-three/drei";
import { CapsuleGeometry } from "three";
import { RoundedBoxGeometry } from "https://threejsfundamentals.org/threejs/resources/threejs/r132/examples/jsm/geometries/RoundedBoxGeometry.js";

const RoundedBoxComponent = () => {
  const texture = {
    one: useTexture(
      "https://images.unsplash.com/photo-1626908013943-df94de54984c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2673&q=80"
    ),
    two: useTexture(
      "https://images.unsplash.com/photo-1536566482680-fca31930a0bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
    ),
  };

  const BoxRounded = new RoundedBoxGeometry(1, 1, 1, 5, 0.05);

  const numElements = 20; // Cantidad de elementos a generar
  const radius = 2.5; // Radio del aro

  const positions = Array.from({ length: numElements }, (_, i) => {
    const angle = (i / numElements) * Math.PI * 2;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    return [x, 0, z];
  });

  return (
    <>
      <mesh geometry={BoxRounded}>
        <meshMatcapMaterial
          matcap={texture.one}
          map={texture.two}
        />
      </mesh>
      <hemisphereLight args={["#fff", "#333", 1]} />

      {positions.map((position, index) => {
        const capsule = new CapsuleGeometry(0.02, 0.5 + Math.random(), 5, 16);
        return (
          <mesh
            key={index}
            position={position}
            geometry={capsule}
          >
            <meshBasicMaterial />
          </mesh>
        );
      })}
    </>
  );
};

export default RoundedBoxComponent;
