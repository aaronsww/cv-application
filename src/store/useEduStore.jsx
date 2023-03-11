import { create } from "zustand";

const useEduStore = create((set) => ({
  edu: {
    course: "",
    uni: "",
    startDate: "",
    endDate: "",
  },
  setEdu: (newData) =>
    set((state) => ({
      edu: { ...state.edu, ...newData },
    })),
}));

export default useEduStore;
