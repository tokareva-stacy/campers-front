"use client";

import { useCampersStore } from "@/lib/store/campersStore";

export default function SearchButton() {
  const resetCampers = useCampersStore((s) => s.resetCampers);
  const fetchCampers = useCampersStore((s) => s.fetchCampers);

  const handleSearch = () => {
    resetCampers();
    fetchCampers(true);
  };

  return (
    <button onClick={handleSearch}>
      Search
    </button>
  );
}