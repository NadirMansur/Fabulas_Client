import { create } from "zustand";
import axios from "axios";

const fabulasStore = create((set, get) => {
  return {
    fabulas: [],
    setFabulas: async (url) => {
      const { data } = await axios.get(url);
      //console.log(data)
      set({
        fabulas: [...data],
      });
    },
  };
});

export default fabulasStore;
