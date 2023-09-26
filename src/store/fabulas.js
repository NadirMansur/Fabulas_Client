import { create } from "zustand";

const fabulasStore =
  create <
  State >
  ((set, get) => {
    return {
      fabulas: [],
      setFabulas: async (url) => {
        const response = await axios.get(url);
        set({
          fabulas: response,
        });
      },
    };
  });

export default fabulasStore;
