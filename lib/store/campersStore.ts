import { create } from "zustand";
import { Camper } from "../../types/camper";
import { getCampers } from "@/lib/api/campers";
import { useFiltersStore } from "./filtersStore";

interface CampersState {
  campers: Camper[];
  page: number;
  limit: number;
  isLoading: boolean;
  hasMore: boolean;

  fetchCampers: (reset?: boolean) => Promise<void>;
  loadMore: () => Promise<void>;
  resetCampers: () => void;
}

export const useCampersStore = create<CampersState>((set, get) => ({
  campers: [],
  page: 1,
  limit: 4,
  isLoading: false,
  hasMore: true,

  resetCampers: () =>
    set({
      campers: [],
      page: 1,
      hasMore: true,
    }),

  fetchCampers: async (reset = false) => {
    const { page, limit, campers } = get();
    const filters = useFiltersStore.getState();

    set({ isLoading: true });

    const data = await getCampers({
      page,
      limit,
      location: filters.location || undefined,
      form: filters.form || undefined,
      AC: filters.AC || undefined,
      kitchen: filters.kitchen || undefined,
      bathroom: filters.bathroom || undefined,
    });

    set({
      campers: reset ? data : [...campers, ...data],
      hasMore: data.length === limit,
      isLoading: false,
    });
  },

  loadMore: async () => {
    set((state) => ({ page: state.page + 1 }));
    await get().fetchCampers();
  },
}));