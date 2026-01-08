"use client";

import Link from "next/link";
import { Camper } from "@/types/camper";
import { useFavoritesStore } from "@/lib/store/favoritesStore";
import { formatPrice } from "@/lib/utils/formatPrice";

interface Props {
  camper: Camper;
}

export default function CamperCard({ camper }: Props) {
  const toggleFavorite = useFavoritesStore((s) => s.toggleFavorite);
  const isFavorite = useFavoritesStore((s) => s.isFavorite(camper.id));

  return (
    <div style={{ border: "1px solid #ccc", marginBottom: 16, padding: 16 }}>
      <h3>{camper.name}</h3>
      <p>{camper.location}</p>
      <p>€{formatPrice(camper.price)}</p>

      <button onClick={() => toggleFavorite(camper.id)}>
        {isFavorite ? "❤️ Remove" : "🤍 Add"}
      </button>

      <Link href={`/catalog/${camper.id}`}>
        <button>Show more</button>
      </Link>
    </div>
  );
}