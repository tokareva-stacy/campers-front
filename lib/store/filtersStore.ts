import { create } from "zustand";

interface FiltersState {
  location: string;
  form: string | null;

  AC: boolean;
  kitchen: boolean;
  bathroom: boolean;
  TV: boolean;
  transmission: "automatic" | null;

  setLocation: (value: string) => void;
  toggleEquipment: (key: EquipmentKey) => void;
  setForm: (value: string) => void;
  resetFilters: () => void;
}

type EquipmentKey = "AC" | "kitchen" | "bathroom" | "TV" | "transmission";

export const useFiltersStore = create<FiltersState>((set) => ({
  location: "",
  form: null,

  AC: false,
  kitchen: false,
  bathroom: false,
  TV: false,
  transmission: null,

  setLocation: (value) => set({ location: value }),

  toggleEquipment: (key) =>
    set((state) => {
      if (key === "transmission") {
        return {
          transmission:
            state.transmission === "automatic" ? null : "automatic",
        };
      }

      return { [key]: !state[key] } as Partial<FiltersState>;
    }),

  setForm: (value) => set({ form: value }),

  resetFilters: () =>
    set({
      location: "",
      form: null,
      AC: false,
      kitchen: false,
      bathroom: false,
      TV: false,
      transmission: null,
    }),
}));
