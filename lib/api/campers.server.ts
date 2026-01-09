import { Camper } from "@/types/camper";

const API_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export async function getCamperById(id: string): Promise<Camper> {
  const res = await fetch(`${API_URL}/campers/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Camper not found");
  }

  return res.json();
}