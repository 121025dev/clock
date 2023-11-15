import { animated, useSpring } from "@react-spring/three";
import { GroupProps } from "@react-three/fiber";
import { DoubleSide, Euler, Vector3 } from "three";

const positions = new Float32Array([
  1, 2, 1,
  0, 3, 1,
  -1, 2, 1,
  -1, -2, 1,
  0, -3, 1,
  1, -2, 1,
  1, 2, -1,
  0, 3, -1,
  -1, 2, -1,
  -1, -2, -1,
  0, -3, -1,
  1, -2, -1,
]);

const colors = new Float32Array([
  1, 1, 1,
  0, 0, 0,
  // 1, 1, 1,
  // 0.05, 0.05, 0.05,
  // 0.05, 0.05, 0.05,
  // 0.05, 0.05, 0.05,
  // 0.05, 0.05, 0.05,
  // 0.05, 0.05, 0.05,
  // 0.05, 0.05, 0.05,
  // 0.05, 0.05, 0.05,
  // 0.05, 0.05, 0.05,
  // 0.05, 0.05, 0.05,
  // 0.05, 0.05, 0.05,
  // 0.05, 0.05, 0.05,
  // 0.05, 0.05, 0.05,
  // 0.05, 0.05, 0.05,
  // 0.05, 0.05, 0.05,
  // 0.05, 0.05, 0.05,
  // 0.05, 0.05, 0.05,
]);

const indices = new Uint16Array([
  0, 1, 2,
  0, 2, 3,
  0, 3, 5,
  3, 4, 5,
  6, 7, 8,
  6, 8, 9,
  6, 9, 11,
  9, 10, 11,
  0, 1, 6,
  1, 6, 7,
  1, 2, 7,
  2, 7, 8,
  2, 3, 8,
  3, 8, 9,
  3, 4, 9,
  4, 9, 10,
  4, 5, 10,
  5, 10, 11,
  5, 0, 11,
  0, 11, 6
]);

interface HalfSegment {
  color: string,
  position?: Vector3
}

function HalfSegment({ color, position = new Vector3(0, 0, 0) }: HalfSegment) {

  return (
    <mesh position={position}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
        <bufferAttribute
          attach='attributes-color'
          array={colors}
          count={colors.length / 3}
          itemSize={3}
        />
        {/* <bufferAttribute
          attach='attributes-normal'
          array={normals}
          count={normals.length / 3}
          itemSize={3}
        /> */}
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

interface Segment extends GroupProps {
  active: boolean
}

function Segment(props: Segment) {
  const { active } = props;
  const { animationRotation } = useSpring<{animationRotation: Euler}>({
    animationRotation: active ? [0, 0, 0] : [0, Math.PI, 0]
  });

  return (
    <group {...props}>
      <animated.group rotation={animationRotation}>
        {/* <HalfSegment position={new Vector3(0, 0, -1)} color="#111111"/> */}
        <HalfSegment color="#FFFFFF"/>
      </animated.group>
    </group>
  );
}

export default Segment;