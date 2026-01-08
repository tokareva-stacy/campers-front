"use client";

import { useEffect } from "react";
import { useCampersStore } from "@/lib/store/campersStore";
import { useFiltersStore } from "@/lib/store/filtersStore";
import CamperCard from "@/components/CamperCard/CamperCard";
import { Camper } from "@/types/camper";


export default function CatalogPage() {
  const {
    campers,
    fetchCampers,
    loadMore,
    isLoading,
    hasMore,
    resetCampers,
  } = useCampersStore();

  const filters = useFiltersStore();

  // первая загрузка + реакция на фильтры
  useEffect(() => {
    resetCampers();
    fetchCampers(true);
  }, [
    filters.location,
    filters.form,
    filters.AC,
    filters.kitchen,
    filters.bathroom,
  ]);

  return (
    <section>
      <h1>Catalog</h1>

      {/* FILTERS */}
      {/* пока заглушка, подключим следующим шагом */}
      <div style={{ marginBottom: 20 }}>Filters panel</div>

      {/* CAMPERS */}
      <div>
        {campers.map((camper) => (
          <CamperCard key={camper.id} camper={camper} />
        ))}
      </div>

      {/* LOAD MORE */}
      {hasMore && (
        <button onClick={loadMore} disabled={isLoading}>
          {isLoading ? "Loading..." : "Load More"}
        </button>
      )}
    </section>
  );
}





// import { getCampers } from "@/lib/api/campers";

// export default async function TestPage() {
//   const campers = await getCampers({ limit: 3 });

//   return (
//     <div>
//       {campers.map(c => (
//         <p key={c.id}>{c.name}</p>
//       ))}
//     </div>
//   );
// }