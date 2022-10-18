import React from "react";

import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";

import { Ground } from "./components/Ground";
import { Player } from "./components/Player";
import { FPV } from "./components/FPV";
import { Cursor } from "./components/Cursor";
import { Cubes } from "./components/Cubes";
import { TextureSelector } from "./components/TextureSelector";

import "./index.css";
import { Menu } from "./components/Menu";
import { useStore } from "./hooks/useStore";

function App() {
  const [cubes] = useStore((state) => [state.cubes]);

  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={0.5} />

        <FPV />
        <Physics>
          <Player />
          <Cubes />
          <Ground />
        </Physics>
      </Canvas>
      <TextureSelector />
      <Menu />
      <Cursor />
    </>
  );
}

export default App;
