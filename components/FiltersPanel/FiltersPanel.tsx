"use client";

import SearchButton from "@/components/SearchButton/SearchButton";
import { useFiltersStore } from "@/lib/store/filtersStore";
import css from "./FiltersPanel.module.css";

export default function FiltersPanel() {
  const {
    location,
    setLocation,
    AC,
    kitchen,
    bathroom,
    TV,
    transmission,
    toggleEquipment,
  } = useFiltersStore();

  const SPRITE = "/icons/sprite.svg#icon-map";

  return (
    <div className={css.filters}>
      <label className={css.label} htmlFor="location-input">
        <span className={css.labelText}>Location</span>

        <div className={css.inputWrapper}>
          <svg
            className={css.icon}
            width="20"
            height="20"
            aria-hidden="true"
            focusable="false"
          >
            <use href={SPRITE} xlinkHref={SPRITE} />
          </svg>

          <input
            id="location-input"
            className={css.input}
            placeholder="Kyiv, Ukraine"
            name="location"
            aria-label="Location"
          />
        </div>
      </label>

      <h3 className={css.subtitle}>Filters</h3>

      <div className={css.block}>
        <p className={css.title}>Vehicle equipment</p>
        <div className={css.divider} />

        <div className={css.grid}>
            <button className={`${css.filterBtn} ${AC ? css.active : ""}`}
            onClick={() => toggleEquipment("AC")}>
                <svg className={css.filterIcon}>
                    <use href="/icons/sprite.svg#icon-ac" />
                </svg>
                <span className={css.descr}>AC</span>
            </button>

            <button className={`${css.filterBtn} ${transmission ? css.active : ""}`}
            onClick={() => toggleEquipment("transmission")}>
                <svg className={css.filterIcon}>
                    <use href="/icons/sprite.svg#icon-automatic" />
                </svg>
                <span className={css.descr}>Automatic</span>
            </button>

            <button className={`${css.filterBtn} ${kitchen ? css.active : ""}`}
            onClick={() => toggleEquipment("kitchen")}>
                <svg className={css.filterIcon}>
                    <use href="/icons/sprite.svg#icon-cup" />
                </svg>
                <span className={css.descr}>Kitchen</span>
            </button>

            <button className={`${css.filterBtn} ${TV ? css.active : ""}`}
            onClick={() => toggleEquipment("TV")}>
                <svg className={css.filterIcon}>
                    <use href="/icons/sprite.svg#icon-tv" />
                </svg>
                <span className={css.descr}>TV</span>
            </button>

            <button className={`${css.filterBtn} ${bathroom ? css.active : ""}`}
            onClick={() => toggleEquipment("bathroom")}>
                <svg className={css.filterIcon}>
                    <use href="/icons/sprite.svg#icon-bathroom" />
                </svg>
                <span className={css.descr}>Bathroom</span>
            </button>
        </div>
      </div>

      <div className={css.block}>
        <p className={css.title}>Vehicle type</p>
        <div className={css.divider} />
        <div className={css.grid}>
          <button className={css.filterBtn}>
                <svg className={css.filterIcon}>
                    <use href="/icons/sprite.svg#icon-grid-1x2" />
                </svg>
                <span className={css.descr}>Van</span>
            </button>

            <button className={css.filterBtn}>
                <svg className={css.filterIcon}>
                    <use href="/icons/sprite.svg#icon-grid-2x2" />
                </svg>
                <span className={css.descr}>Fully Integrated</span>
            </button>

            <button className={css.filterBtn}>
                <svg className={css.filterIcon}>
                    <use href="/icons/sprite.svg#icon-grid" />
                </svg>
                <span className={css.descr}>Alcove</span>
            </button>
        </div>
      </div>

      {/* SEARCH */}
      <SearchButton />
    </div>
  );
}