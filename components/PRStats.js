import React from "react";
import useStats from "../utils/useStats";
import { formatNumber, formatDate } from "../utils/utils";

export default function PRStats() {
  const stats = useStats(
    "https://covid19.mathdro.id/api/countries/US/confirmed"
  );

  const globalDeathRate = (globalCases, globalDeath) =>
    (globalDeath / globalCases) * 100;

  if (!stats) return <p>Loading...</p>;

  const findPuertoRico = stats.find(o => o.provinceState === "Puerto Rico");
  const { confirmed, deaths, recovered, lastUpdate } = findPuertoRico;

  return (
    <div className="mb-8">
      <h2 className="font-black text-4xl text-center mb-8">Puerto Rico</h2>
      <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="py-8 px-2 bg-gray-300 text-center rounded-lg">
          <span className="text-4xl font-bold">{formatNumber(confirmed)}</span>
          <h3 className="uppercase">Confirmados</h3>
        </div>
        <div className="py-8 px-2  bg-gray-300 text-center rounded-lg">
          <span className="text-4xl font-bold">{formatNumber(deaths)}</span>
          <h3 className="uppercase">Muertes</h3>
        </div>
        <div className="py-8 px-2  bg-gray-300 text-center rounded-lg">
          <span className="text-4xl font-bold">{formatNumber(recovered)}</span>
          <h3 className="uppercase">Recuperados</h3>
        </div>
        <div className="py-8 px-2  bg-gray-300 text-center rounded-lg">
          <span className="text-4xl font-bold">{`${globalDeathRate(
            confirmed,
            deaths
          ).toFixed(2)}%`}</span>
          <h3 className="uppercase">Tasa de letalidad</h3>
        </div>
      </div>
      <div className="uppercase text-xs text-center text-gray-600">
        <span>Última actualización: </span>
        <span>{formatDate(lastUpdate)}</span>
      </div>
    </div>
  );
}
