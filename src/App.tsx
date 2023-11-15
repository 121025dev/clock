import { Suspense, useEffect, useState } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, OrthographicCamera, Sphere } from '@react-three/drei';
import { Vector3 } from 'three';
import Digit from './Digit';
import _ from 'lodash';

const digitPositions = [
  new Vector3(-6, 0, 0),
  new Vector3(-4, 0, 0),
  new Vector3(-1, 0, 0),
  new Vector3(1, 0, 0),
  new Vector3(4, 0, 0),
  new Vector3(6, 0, 0)
];

function App() {
  const [timeString, setTimeString] = useState("000000");
  
  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setTimeString(date.getHours().toString().padStart(2, "0") + date.getMinutes().toString().padStart(2, "0") + date.getSeconds().toString().padStart(2, "0"));
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <Canvas shadows style={{ backgroundColor: "black" }}>
      <Suspense fallback={null}>
        {_.range(6).map((v) => {
          return (
            <Digit key={v} number={parseInt(timeString[v])} position={digitPositions[v]}/>
          );
        })}
        <OrbitControls target={[0, 0, 0]}/>
      </Suspense>
    </Canvas>
  );
}

export default App;
