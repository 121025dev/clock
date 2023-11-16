import { useEffect, useState } from "react";
import Digit from "./Digit";
import { Vector3 } from "three";
import _ from "lodash";

const digitPositions = [
  new Vector3(-6, 0, 0),
  new Vector3(-4, 0, 0),
  new Vector3(-1, 0, 0),
  new Vector3(1, 0, 0),
  new Vector3(4, 0, 0),
  new Vector3(6, 0, 0)
];

function Clock() {
  const [timeString, setTimeString] = useState("888888");
  
  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setTimeString(date.getHours().toString().padStart(2, "0") + date.getMinutes().toString().padStart(2, "0") + date.getSeconds().toString().padStart(2, "0"));
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <group>
      {_.range(6).map((v) => {
        return (
          <Digit key={v} number={parseInt(timeString[v])} position={digitPositions[v]}/>
        );
      })}
    </group>
  );
}

export default Clock;