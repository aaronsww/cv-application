import { create } from "zustand";

const useEduStore = create((set) => ({
  edu: [],
  setEdu: (index, newData) =>
    set((state) => {
      let newEdu = [...state.edu];
      newEdu[index] = { ...newEdu[index], ...newData };
      return { edu: newEdu };
    }),
  addEdu: () =>
    set((state) => {
      let newEdu = [...state.edu];
      newEdu.push({
        course: "",
        uni: "",
        startDate: "",
        endDate: "",
      });
      return { edu: newEdu };
    }),
  deleteEdu: (index) =>
    set((state) => {
      let newEdu = [...state.edu];
      newEdu.splice(index, 1);
      return { edu: newEdu };
    }),
}));

export default useEduStore;
