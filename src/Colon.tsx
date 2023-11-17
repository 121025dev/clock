import { GroupProps, MeshProps } from "@react-three/fiber";
import { DoubleSide, Vector3 } from "three";

const positions = new Float32Array([
  1, 1, 1,
  -1, 1, 1,
  -1, -1, 1,
  1, -1, 1,
  1, 1, -1,
  -1, 1, -1,
  -1, -1, -1,
  1, -1, -1,
  1, 1, 1,
  -1, 1, 1,
  -1, -1, 1,
  1, -1, 1,
]);

const onColor = [1, 1, 1];
const offColor = [0.02, 0.02, 0.02];

const colors = new Float32Array([
  offColor,
  offColor,
  offColor,
  offColor,
  offColor,
  offColor,
  offColor,
  offColor,
  onColor,
  onColor,
  onColor,
  onColor
].flatMap((v) => v.slice()));

const indices = new Uint16Array([
  0, 1, 4,
  1, 4, 5,
  1, 2, 5,
  2, 5, 6,
  2, 3, 6,
  3, 6, 7,
  3, 0, 7,
  0, 7, 4,
  4, 5, 6,
  6, 7, 4,
  8, 9, 10,
  10, 11, 8
]);

function Cube(props: MeshProps) {
  return (
    <mesh {...props}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          array={colors}
          count={colors.length / 3}
          itemSize={3}
        />
        <bufferAttribute
          attach="index"
          array={indices}
          count={indices.length}
          itemSize={1}
        />
      </bufferGeometry>
      <meshBasicMaterial
        vertexColors
        toneMapped={false}
        side={DoubleSide}
      />
    </mesh>
  );
}

function Colon(props: GroupProps) {
  return (
    <group {...props}>
      <Cube scale={0.15} position={new Vector3(0, 0.5, 0)}/>
      <Cube scale={0.15} position={new Vector3(0, -0.5, 0)}/>
    </group>
  );
}

export default Colon;