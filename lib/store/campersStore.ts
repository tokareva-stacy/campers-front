import { create } from "zustand";
import { Camper } from "@/types/camper";
import { getCampers } from "@/lib/api/campers";
import { useFiltersStore } from "./filtersStore";

interface CampersState {
  campers: {
    items: Camper[],
    total: 0,
  },
  page: number;
  isLoading: boolean;
  hasMore: boolean;

  fetchCampers: (reset?: boolean) => Promise<void>;
  resetCampers: () => void;
}

export const useCampersStore = create<CampersState>((set, get) => ({
  campers: [],
  page: 1,
  isLoading: false,
  hasMore: true,

  resetCampers: () =>
    set({
      campers: [],
      page: 1,
      hasMore: true,
    }),

  fetchCampers: async (reset = false) => {
    const { page, campers } = get();
    const filters = useFiltersStore.getState();

    set({ isLoading: true });

    try {
      const data = await getCampers({
        page: reset ? 1 : page,
        limit: 4,
        location: filters.location,
        form: filters.form || undefined,
        AC: filters.AC,
        kitchen: filters.kitchen,
        bathroom: filters.bathroom,
      });

      set({
        campers: reset ? data : [...campers, ...data],
        page: reset ? 2 : page + 1,
        hasMore: data.length === 4,
      });
    } finally {
      set({ isLoading: false });
    }
  },
}));