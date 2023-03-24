import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { data } from "../data";

const useThemeStore = create(
  persist(
    (set) => ({
      theme: data[0],
      setTheme: (newTheme) => set({ theme: newTheme }),
    }),
    {
      name: "pranto-portfolio",
      //   storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default useThemeStore;
