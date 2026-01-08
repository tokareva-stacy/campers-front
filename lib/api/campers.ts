import axiosInstance from "./axios";
import { Camper } from "@/types/camper";

interface Params {
  page?: number;
  limit?: number;
  location?: string;
  form?: string;
  AC?: boolean;
  kitchen?: boolean;
  bathroom?: boolean;
}

export const getCampers = async (params: Params): Promise<Camper[]> => {
  
  const cleanedParams = Object.fromEntries(
    Object.entries(params).filter(
      ([_, value]) => value !== false && value !== null && value !== ""
    )
  );

  const { data } = await axiosInstance.get("/campers", {
    params: cleanedParams,
  });

  if (Array.isArray(data)) return data;
  if ("items" in data) return data.items;

  return [];
};
