/* eslint-disable react/no-unknown-property */
import { Line } from "@react-three/drei";

const Fatline = ({ count }) => {
  const vertices = [
    [-1, -1, -1], // Vértice 0
    [1, -1, -1], // Vértice 1
    [1, 1, -1], // Vértice 2
    [-1, 1, -1], // Vértice 3
    [-1, -1, 1], // Vértice 4
    [1, -1, 1], // Vértice 5
    [1, 1, 1], // Vértice 6
    [-1, 1, 1], // Vértice 7
  ];

  const indices = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 0], // Caras frontales
    [4, 5],
    [5, 6],
    [6, 7],
    [7, 4], // Caras posteriores
  ];

  const scales = [1, 0.83, 0.65, 0.3];
  const rotations = [
    [0, 0, 0], // Sin rotación
    [Math.PI / 2, 0, 0], // Rotación 90 grados en el eje X
    [0, -Math.PI / 2, 0], // Rotación 90 grados en el eje Y
  ];

  const positions = []; // Matriz de posiciones de los cubos
  const radius = 6; // Radio del aro
  // Generar las posiciones de los cubos en un aro horizontal
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2; // Ángulo correspondiente a cada posición

    // Calcular las coordenadas x, y, z en base al ángulo y radio
    const x = Math.cos(angle) * radius;
    const y = 0; // Altura fija para formar un aro horizontal
    const z = Math.sin(angle) * radius;

    positions.push([x, y, z]);
  }

  return positions.map((position, index) => (
    <group
      position={position}
      key={index}
    >
      {scales.map((s, scaleIndex) =>
        rotations.map((r, rotationIndex) =>
          indices.map((indexPair, index) => (
            <Line
              key={`${scaleIndex}-${rotationIndex}-${index}`}
              points={[...vertices[indexPair[0]], ...vertices[indexPair[1]]]}
              lineWidth={6}
              scale={[s, s, 1]}
              color="#FF3E3E"
              rotation={r}
            />
          ))
        )
      )}

      <mesh scale={[1.98, 1.98, 1.98]}>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </group>
  ));
};

export default Fatline;
