import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

const ThreeCube = (props) => {
  const cubreRef = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((state, delta) => (cubreRef.current.rotation.x += delta));

  return (
    <mesh
      {...props}
      ref={cubreRef}
      onClick={() => setActive(!active)}
      scale={active ? 1.5 : 1}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
};

export default ThreeCube;
