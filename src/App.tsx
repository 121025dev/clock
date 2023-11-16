import { Suspense } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import _ from 'lodash';
import Clock from './Clock';

function App() {

  return (
    <Canvas shadows style={{ backgroundColor: "black" }}>
      <Suspense fallback={null}>
        <Clock/>
        <OrbitControls target={[0, 0, 0]}/>
      </Suspense>
    </Canvas>
  );
}

export default App;
