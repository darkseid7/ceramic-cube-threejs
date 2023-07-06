import { Canvas } from "@react-three/fiber";

import {
  MeshPhysicalMaterial,
  IcosahedronGeometry,
  CircleGeometry,
} from "three";

const Scene = () => {
  const geometry = new IcosahedronGeometry(1, 1);
  const bparticular = new CircleGeometry(1, 3);

  const material = new MeshPhysicalMaterial({
    color: 0xffffff,
    flatShading: true,
    side: 2,
  });
  const wmaterial = new MeshPhysicalMaterial({
    color: 0xffffff,
    wireframe: true,
  });

  return (
    <group color={"#000"}>
      <mesh
        geometry={geometry}
        material={material}
      />
      <mesh
        position={[0, 0, 0]}
        geometry={geometry}
        material={wmaterial}
      />
      <mesh
        position={[4, 0, 0]}
        geometry={bparticular}
        material={wmaterial}
      />
    </group>
  );
};

export default Scene;
