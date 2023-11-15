import { Vector3 } from "three";
import Segment from "./Segment";
import _ from "lodash";
import { Euler, GroupProps } from "@react-three/fiber";

const segmentPositions = [
  new Vector3(0, 7, 0),
  new Vector3(3.5, 3.5, 0),
  new Vector3(3.5, -3.5, 0),
  new Vector3(0, -7, 0),
  new Vector3(-3.5, -3.5, 0),
  new Vector3(-3.5, 3.5, 0),
  new Vector3(0, 0, 0)
];

const segmentRotations: Euler[] = [
  [0, 0, Math.PI / 2],
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, Math.PI / 2],
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, Math.PI / 2]
];

const numberMap: { [number: number]: boolean[] } = {
  0: [true, true, true, true, true, true, false],
  1: [false, true, true, false, false, false, false],
  2: [true, true, false, true, true, false, true],
  3: [true, true, true, true, false, false, true],
  4: [false, true, true, false, false, true, true],
  5: [true, false, true, true, false, true, true],
  6: [true, false, true, true, true, true, true],
  7: [true, true, true, false, false, true, false],
  8: [true, true, true, true, true, true, true],
  9: [true, true, true, true, false, true, true]
};

interface Digit extends GroupProps {
  number?: number
}

function Digit(props: Digit) {
  const { number = 8 } = props;
  return (
    <group {...props} scale={0.15}>
      {_.range(7).map((v) => {
        return (
          <Segment key={v} active={numberMap[number][v]} position={segmentPositions[v]} rotation={segmentRotations[v]}/>
        );
      })}
    </group>
  );
}

export default Digit;
