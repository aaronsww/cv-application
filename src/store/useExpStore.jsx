import { create } from "zustand";

const useExpStore = create((set) => ({
  exp: {
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    expDescription:"",
  },
  setExp: (newData) =>
    set((state) => ({
      exp: { ...state.exp, ...newData },
    })),
}));

export default useExpStore;