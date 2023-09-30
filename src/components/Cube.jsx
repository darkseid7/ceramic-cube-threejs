/* eslint-disable react/no-unknown-property */
import { useMemo } from "react";
import { OrbitControls, Stars, Stats } from "@react-three/drei";

import {
  BoxGeometry,
  LineSegments,
  BufferGeometry,
  Float32BufferAttribute,
  LineDashedMaterial,
} from "three";
import { useThree } from "@react-three/fiber";
// import { MeshLine, MeshLineMaterial, MeshLineRaycast } from "threejs-meshline";

const Cube = ({ color, position, scale }) => {
  return (
    <>
      <lineSegments
        scale={scale}
        position={(0, 0, 0)}
        linewidth={0.1}
      >
        <edgesGeometry args={[new BoxGeometry(1, 1, 1, 1)]} />

        <lineBasicMaterial
          color={0xff3e3e}
          linewidth={1}
          linecap="round"
          linejoin="round"
        />
      </lineSegments>

      <ambientLight />
      <OrbitControls
        autoRotate={false}
        autoRotateSpeed={0.2}
      />
      <ambientLight />
      <Stats />
    </>
  );
};

export default Cube;
