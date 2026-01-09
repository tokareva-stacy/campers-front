"use client";

import Image from "next/image";
import css from "./CamperGallery.module.css";

interface Props {
  gallery: {
    thumb: string;
    original: string;
  }[];
}

export default function CamperGallery({ gallery }: Props) {
  return (
    <div className={css.gallery}>
      {gallery.map((img, i) => (
        <div key={i} className={css.imageWrapper}>
          <Image
            src={img.original}
            alt="Camper image"
            fill
            className={css.image}
          />
        </div>
      ))}
    </div>
  );
}
