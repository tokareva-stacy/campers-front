import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FavoritesState {
  favorites: string[];
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],

      toggleFavorite: (id) => {
        const favorites = get().favorites;
        set({
          favorites: favorites.includes(id)
            ? favorites.filter((fav) => fav !== id)
            : [...favorites, id],
        });
      },

      isFavorite: (id) => get().favorites.includes(id),
    }),
    {
      name: "favorites-storage",
    }
  )
);