import React from "react";

import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";

import { Ground } from "./components/Ground";
import { Player } from "./components/Player";
import { FPV } from "./components/FPV";
import { Cursor } from "./components/Cursor";

function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={0.5} />

        <FPV />
        <Physics>
          <Player />
          <Ground />
        </Physics>
      </Canvas>

      <Cursor />
    </>
  );
}

export default App;
