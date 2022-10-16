import { useBox } from "@react-three/cannon";
import React from "react";
import * as textures from "../../images/textures";

type Props = {
  position: any;
  texture: any;
};

export const Cube: React.FC<Props> = ({ position, texture }) => {
  const [ref] = useBox(() => ({
    type: "Static",
    position,
  }));

  const activeTexture = textures[texture + "Texture"];

  return (
    <mesh ref={ref}>
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial map={activeTexture} attach="material" />
    </mesh>
  );
};
