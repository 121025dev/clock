import { animated, useSpring } from "@react-spring/three";
import { GroupProps } from "@react-three/fiber";
import _ from "lodash";
import { DoubleSide, Euler } from "three";

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
  1, 2, 1,
  0, 3, 1,
  -1, 2, 1,
  -1, -2, 1,
  0, -3, 1,
  1, -2, 1,
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
  offColor,
  offColor,
  offColor,
  offColor,
  onColor,
  onColor,
  onColor,
  onColor,
  onColor,
  onColor,
].flatMap((v) => v.slice()));

const indices = new Uint16Array([
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
  0, 11, 6,
  12, 13, 14,
  12, 14, 15,
  12, 15, 17,
  15, 16, 17,
]);

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
      <animated.mesh rotation={animationRotation}>
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
      </animated.mesh>
    </group>
  );
}

export default Segment;