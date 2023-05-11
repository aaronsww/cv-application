import { create } from "zustand";

const useExpStore = create((set) => ({
  exp: [],
  setExp: (index, newData) =>
    set((state) => {
      let newExp = [...state.exp];
      newExp[index] = { ...newExp[index], ...newData };
      return { exp: newExp };
    }),
  deleteExp: (index) =>
    set((state) => {
      let newExp = [...state.exp];
      newExp.splice(index, 1);
      return { exp: newExp };
    }),
}));

export default useExpStore;
