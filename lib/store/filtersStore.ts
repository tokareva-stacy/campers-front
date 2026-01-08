import { create } from "zustand";

export interface FiltersState {
  location: string;
  form: string | null;
  AC: boolean;
  kitchen: boolean;
  bathroom: boolean;

  setLocation: (value: string) => void;
  setForm: (value: string | null) => void;
  toggleAC: () => void;
  toggleKitchen: () => void;
  toggleBathroom: () => void;
  resetFilters: () => void;
}

export const useFiltersStore = create<FiltersState>((set) => ({
  location: "",
  form: null,
  AC: false,
  kitchen: false,
  bathroom: false,

  setLocation: (value) => set({ location: value }),
  setForm: (value) => set({ form: value }),
  toggleAC: () => set((state) => ({ AC: !state.AC })),
  toggleKitchen: () => set((state) => ({ kitchen: !state.kitchen })),
  toggleBathroom: () => set((state) => ({ bathroom: !state.bathroom })),

  resetFilters: () =>
    set({
      location: "",
      form: null,
      AC: false,
      kitchen: false,
      bathroom: false,
    }),
}));