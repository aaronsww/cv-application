import { create } from "zustand";

const useEduStore = create((set) => ({
  edu: {
    course: "adkjsda",
    uni: "asbjnjdan",
    startDate: "addw",
    endDate: "dawd",
  },
  setEdu: (newData) =>
    set((state) => ({
      edu: { ...state.edu, ...newData },
    })),
}));

export default useEduStore;
