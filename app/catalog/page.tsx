"use client";

import { useCampersStore } from "@/lib/store/campersStore";
import CamperCard from "@/components/CamperCard/CamperCard";
import FiltersPanel from "@/components/FiltersPanel/FiltersPanel";

import css from "./Catalog.module.css";
import container from "@/styles/container.module.css";

export default function CatalogPage() {
  const campers = useCampersStore((s) => s.campers);
  const fetchCampers = useCampersStore((s) => s.fetchCampers);
  const isLoading = useCampersStore((s) => s.isLoading);
  const hasMore = useCampersStore((s) => s.hasMore);

  return (
    <section className={css.catalog}>
      <div className={container.container}>
        <div className={css.layout}>
          {/* SIDEBAR */}
          <aside className={css.sidebar}>
            <FiltersPanel />
          </aside>

          {/* RIGHT CONTENT */}
          <div className={css.content}>
            <div className={css.list}>
              {campers.map((camper) => (
                <CamperCard key={camper.id} camper={camper} />
              ))}
            </div>

            {hasMore && (
              <button
                className={css.loadMore}
                onClick={() => fetchCampers()}
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Load more"}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
