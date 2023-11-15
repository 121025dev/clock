import { Suspense, useState } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Vector3 } from 'three';
import Segment from './Segment';

function App() {

  return (
    <Canvas shadows style={{ backgroundColor: "black" }}>
      <Suspense fallback={null}>
        <Segment/>
        <OrbitControls target={[0, 0, 0]}/>
        {/* <ambientLight/> */}
      </Suspense>
    </Canvas>
  );
}

export default App;
