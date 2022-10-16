import { nanoid } from "nanoid";
import create from "zustand";

export const useStore = create((set) => ({
  texture: "dirt",
  cubes: [
    {
      key: nanoid(),
      pos: [1, 0.5, 1],
      texture: "dirt",
    },
  ],
  addCube: (x, y, z) => {
    set((prev) => {
      console.log("prev", prev);

      return {
        cubes: [
          ...prev.cubes,
          {
            key: nanoid(),
            pos: [x, y, z],
            texture: prev.texture,
          },
        ],
      };
    });
  },
  removeCube: () => {},
  setTexture: () => {},
  saveWorld: () => {},
  resetWorld: () => {},
}));
