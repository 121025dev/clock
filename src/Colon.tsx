import { Box } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { Vector3 } from "three";

function Colon(props: GroupProps) {
  return (
    <group {...props}>
      <Box args={[2, 2, 2]} scale={0.15} position={new Vector3(0, 0.5, 0)}/>
      <Box args={[2, 2, 2]} scale={0.15} position={new Vector3(0, -0.5, 0)}/>
    </group>
  );
}

export default Colon;