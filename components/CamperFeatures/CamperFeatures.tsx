import { Camper } from "@/types/camper";

export default function CamperFeatures({ camper }: { camper: Camper }) {
  return (
    <>
      {/* FEATURES */}
      <ul>
        {camper.AC && <li>AC</li>}
        {camper.kitchen && <li>Kitchen</li>}
        {camper.TV && <li>TV</li>}
        {camper.bathroom && <li>Bathroom</li>}
      </ul>

      {/* VEHICLE DETAILS */}
      <ul>
        <li>Form: {camper.form}</li>
        <li>Length: {camper.length}</li>
        <li>Width: {camper.width}</li>
        <li>Height: {camper.height}</li>
        <li>Tank: {camper.tank}</li>
        <li>Consumption: {camper.consumption}</li>
      </ul>
    </>
  );
}
