import { notFound } from "next/navigation";

import { getCamperById } from "@/lib/api/campers.server";
import CamperGallery from "@/components/CamperGallery/CamperGallery";
import CamperTabs from "@/components/CamperTabs/CamperTabs";
import BookingForm from "@/components/BookingForm/BookingForm";
import { formatPrice } from "@/lib/utils/formatPrice";

import css from "./CamperDetails.module.css"
import container from "@/styles/container.module.css";

interface Props {
  params: Promise<{
    id?: string;
  }>;
}

export default async function CamperDetailsPage({ params }: Props) {
  const { id } = await params;
  if (!id) {
    notFound();
  }
  const camper = await getCamperById(id);
  if (!camper) {
    notFound();
  }

  return (
    <section className={css.page}>
        <div className={container.container}>
            <div className={css.header}>
                <div>
                    <h1 className={css.title}>{camper.name}</h1>

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
                </div>

                <div className={css.price}>€{formatPrice(camper.price)}</div>
            </div>

            <CamperGallery gallery={camper.gallery} />

            <p className={css.description}>{camper.description}</p>

            <div className={css.bottom}>
                <CamperTabs camper={camper} />
                <BookingForm />
            </div>
        </div>
    </section>
  );
}
