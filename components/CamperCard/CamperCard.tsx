"use client";

import Image from "next/image";
import Link from "next/link";
import { Camper } from "@/types/camper";
import { useFavoritesStore } from "@/lib/store/favoritesStore";
import { formatPrice } from "@/lib/utils/formatPrice";

import css from "./CamperCard.module.css";

interface Props {
  camper: Camper;
}

export default function CamperCard({ camper }: Props) {
  const toggleFavorite = useFavoritesStore((s) => s.toggleFavorite);
  const isFavorite = useFavoritesStore((s) => s.isFavorite(camper.id));
  const imageSrc =
  camper.gallery && camper.gallery.length > 0
    ? camper.gallery[0]
    : "/img/placeholder.jpg";

  return (
    <div className={css.card}>
      {/* IMAGE */}
      <div className={css.imageWrapper}>
        {camper.gallery?.length > 0 && (
          <Image
            src={camper.gallery[0].original}
            alt={camper.name}
            fill
            className={css.image}
          />
        )}
      </div>

      {/* CONTENT */}
      <div className={css.content}>
        {/* HEADER */}
        <div className={css.header}>
          <h3 className={css.title}>{camper.name}</h3>

          <div className={css.priceBlock}>
            <span className={css.price}>
              €{formatPrice(camper.price)}
            </span>

            <button
              className={`${css.favoriteBtn} ${isFavorite ? css.active : ""}`}
              onClick={() => toggleFavorite(camper.id)}
              aria-label="Add to favorites"
            >
              <svg width="24" height="24">
                <use href="/icons/sprite.svg#icon-like" />
              </svg>
            </button>
          </div>
        </div>

        {/* META */}
        <div className={css.meta}>
          <span className={css.rating}>
            <svg className={css.ratingIcon} width="16" height="16">
                <use href="/icons/sprite.svg#icon-yellow-star" />
            </svg>
            {camper.rating} ({camper.reviews.length} Reviews)
          </span>

          <span className={css.location}>
            <svg className={css.locationIcon} width="16" height="16">
                <use href="/icons/sprite.svg#icon-map" />
            </svg>
            {camper.location}
          </span>
        </div>

        {/* DESCRIPTION */}
        <p className={css.description}>
          {camper.description}
        </p>

        {/* FEATURES */}
        <ul className={css.features}>
            {camper.transmission === "automatic" && (
            <li>
                <svg className={css.featuresIcon}>
                    <use href="/icons/sprite.svg#icon-automatic" />
                </svg>
                Automatic
            </li>
            )}

            <li>
                <svg className={css.featuresIcon}>
                    <use href="/icons/sprite.svg#icon-fuel-pump" />
                </svg>
                Petrol
            </li>

            {camper.AC && (
            <li>
                <svg className={css.featuresIcon}>
                    <use href="/icons/sprite.svg#icon-ac" />
                </svg>
            AC
            </li>
            )}

            {camper.bathroom && (
                <li>
                    <svg className={css.featuresIcon}>
                        <use href="/icons/sprite.svg#icon-bathroom" />
                    </svg>
                Bathroom
                </li>
            )}

            {camper.kitchen && (
            <li>
                <svg className={css.featuresIcon}>
                    <use href="/icons/sprite.svg#icon-cup" />
                </svg>
            Kitchen
            </li>
            )}        

            {camper.TV && (
                <li>
                    <svg className={css.featuresIcon}>
                        <use href="/icons/sprite.svg#icon-tv" />
                    </svg>
                TV
                </li>
            )}

            {camper.radio && (
                <li>
                    <svg className={css.featuresIcon}>
                        <use href="/icons/sprite.svg#icon-radio" />
                    </svg>
                Radio
                </li>
            )}

            {camper.refrigerator && (
                <li>
                    <svg className={css.featuresIcon}>
                        <use href="/icons/sprite.svg#icon-refrigerator" />
                    </svg>
                Refrigerator
                </li>
            )}

            {camper.microwave && (
                <li>
                    <svg className={css.featuresIconStroke}>
                        <use href="/icons/sprite.svg#icon-microwave" />
                    </svg>
                Microwave
                </li>
            )}

            {camper.gas && (
                <li>
                    <svg className={css.featuresIconStroke}>
                        <use href="/icons/sprite.svg#icon-gas" />
                    </svg>
                Gas
                </li>
            )}

            {camper.water && (
                <li>
                    <svg className={css.featuresIconStroke}>
                        <use href="/icons/sprite.svg#icon-water" />
                    </svg>
                Water
                </li>
            )}    
  
        </ul>

        {/* ACTION */}
        <Link href={`/catalog/${camper.id}`}>
          <button className={css.showMore}>Show more</button>
        </Link>
      </div>
    </div>
  );
}