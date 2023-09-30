import React from "react";
import { Canvas, extend } from "@react-three/fiber";
import { OrbitControls, Stars, OrthographicCamera } from "@react-three/drei";
// import { MeshLine, MeshLineMaterial, MeshLineRaycast } from "threejs-meshline";

// extend({ MeshLine, MeshLineMaterial });

const ThreeScene = ({ children }) => {
  return (
    <Canvas>
      <OrthographicCamera
        makeDefault
        position={[0, 8, 10]}
        zoom={70}
      />
      <color
        attach="background"
        args={["#f1f1f1"]}
      />
      {children}
      <OrbitControls
        autoRotate={true}
        autoRotateSpeed={0.9}
        enableZoom={true}
        enableDamping
        dampingFactor={0.02}
        target={[0, 0, 0]}
      />
    </Canvas>
    // <Canvas camera={{ position: [0, -1, 3] }}>
    //   <color
    //     attach="background"
    //     args={["#000a0b"]}
    //   />
    //   {children}
    //   <OrbitControls
    //     autoRotate={true}
    //     autoRotateSpeed={0.9}
    //     enableZoom={true}
    //     enableDamping
    //     dampingFactor={0.02}
    //     target={[0, 0, 0]}
    //   />
    // </Canvas>
  );
};

export default ThreeScene;
