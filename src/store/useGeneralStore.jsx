import { create } from "zustand";

const useGeneralStore = create((set) => ({
  general: {
    name: "adkjsda",
    post: "asbjnjdan",
    phoneNo: "01234567890",
    email: "doeman@gmail.com",
    description: "aboutText",
  },
  setGeneral: (newData) =>
    set((state) => ({
      // general: newData,
      general: { ...state.general, ...newData },
    })),
}));

export default useGeneralStore;
