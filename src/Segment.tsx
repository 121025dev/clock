import { animated, config, useSpring } from "@react-spring/three";
import { ThreeElements, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { DoubleSide, Euler, Group, Object3DEventMap, Vector3 } from "three";

const positions = new Float32Array([
  1, 2, 1,
  0, 3, 1,
  -1, 2, 1,
  -1, -2, 1,
  0, -3, 1,
  1, -2, 1,
  1, 2, 0,
  0, 3, 0,
  -1, 2, 0,
  -1, -2, 0,
  0, -3, 0,
  1, -2, 0,
]);

const colors = new Float32Array([
  1, 1, 1, 1,
  1, 1, 1, 1,
  1, 1, 1, 1,
  1, 1, 1, 1,
  1, 1, 1, 1,
  1, 1, 1, 1,
  1, 1, 1, 1,
  1, 1, 1, 1,
]);

const normals = new Float32Array([
  0, 0, 1,
  0, 0, 1,
  0, 0, 1,
  0, 0, 1,
  0, 0, 1,
  0, 0, 1,
  0, 0, 1,
  0, 0, 1,
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
        {/* <bufferAttribute
          attach='attributes-color'
          array={colors}
          count={colors.length / 3}
          itemSize={3}
        /> */}
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
          // itemSize={1}
        />
      </bufferGeometry>
      <meshBasicMaterial
        // vertexColors
        toneMapped={false}
        color={color}
        side={DoubleSide}
      />
    </mesh>
  );
}

function Segment() {
  const [active, setActive] = useState(false);
  // const ref = useRef<Group<Object3DEventMap>>(null);

  const { rotation } = useSpring<{rotation: Euler}>({
    rotation: active ? [0, 0, 0] : [0, Math.PI, 0]
  });

  // useFrame(({ clock }) => {
  //   if(ref.current) {
  //     ref.current.rotation.y = clock.getElapsedTime();
  //   }
  // });

  return (
    <animated.group rotation={rotation} onClick={() => {console.log("asdf") ;setActive(!active)}}>
      <HalfSegment position={new Vector3(0, 0, -1)} color="#888888"/>
      <HalfSegment color="#FFFFFF"/>
    </animated.group>
  );
}

export default Segment;