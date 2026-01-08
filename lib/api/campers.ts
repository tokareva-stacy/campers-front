import axiosInstance from "./axios";
import { Camper } from "../../types/camper";

export interface GetCampersParams {
  page?: number;
  limit?: number;
  location?: string;
  form?: string;
  AC?: boolean;
  kitchen?: boolean;
  bathroom?: boolean;
}

export const getCampers = async (params: GetCampersParams) => {
  const { data } = await axiosInstance.get<Camper[]>("/campers", {
    params,
  });

  return data;
};

export const getCamperById = async (id: string) => {
  const { data } = await axiosInstance.get<Camper>(`/campers/${id}`);
  return data;
};