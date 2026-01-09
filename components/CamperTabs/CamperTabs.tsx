"use client";

import { useState } from "react";
import CamperFeatures from "../CamperFeatures/CamperFeatures";
import CamperReviews from "../CamperReviews/CamperReviews";
import { Camper } from "@/types/camper";

export default function CamperTabs({ camper }: { camper: Camper }) {
  const [tab, setTab] = useState<"features" | "reviews">("features");

  return (
    <div>
      <div>
        <button onClick={() => setTab("features")}>Features</button>
        <button onClick={() => setTab("reviews")}>Reviews</button>
      </div>

      {tab === "features" && <CamperFeatures camper={camper} />}
      {tab === "reviews" && <CamperReviews reviews={camper.reviews} />}
    </div>
  );
}
