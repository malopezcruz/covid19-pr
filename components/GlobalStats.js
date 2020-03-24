import React from "react";
import useStats from "../utils/useStats";
import { formatNumber, formatDate } from "../utils/utils";

export default function GlobalStats() {
  const stats = useStats("http://covid19.mathdro.id/api");

  const globalDeathRate = (globalCases, globalDeath) =>
    (globalDeath / globalCases) * 100;

  if (!stats) return <p>Loading...</p>;

  return (
    <div className="mb-8">
      <h2 className="font-black text-4xl text-center mb-8">Global</h2>
      <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="py-8 px-2 bg-gray-300 text-center rounded-lg">
          <span className="text-4xl font-bold">
            {formatNumber(stats.confirmed.value)}
          </span>
          <h3 className="uppercase">Confirmados</h3>
        </div>
        <div className="py-8 px-2 bg-gray-300 text-center rounded-lg">
          <span className="text-4xl font-bold">
            {formatNumber(stats.deaths.value)}
          </span>
          <h3 className="uppercase">Muertes</h3>
        </div>
        <div className="py-8 px-2 bg-gray-300 text-center rounded-lg">
          <span className="text-4xl font-bold">
            {formatNumber(stats.recovered.value)}
          </span>
          <h3 className="uppercase">Recuperados</h3>
        </div>
        <div className="py-8 px-2 bg-gray-300 text-center rounded-lg">
          <span className="text-4xl font-bold">{`${globalDeathRate(
            stats.confirmed.value,
            stats.deaths.value
          ).toFixed(2)}%`}</span>
          <h3 className="uppercase">Tasa de letalidad</h3>
        </div>
      </div>
      <div className="uppercase text-xs text-center text-gray-600">
        <span>Última actualización: </span>
        <span>{formatDate(stats.lastUpdate)}</span>
      </div>
    </div>
  );
}
