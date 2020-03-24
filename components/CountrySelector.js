import React from "react";
import useStats from "../utils/useStats";

export default function CountrySelector() {
  const data = useStats("http://covid19.mathdro.id/api/countries");
  // const globalDeathRate = (globalCases, globalDeath) =>
  //   (globalDeath / globalCases) * 100;
  // const globalRecoveredRate = (globalCases, globalRecovered) =>
  //   (globalRecovered / globalCases) * 100;

  console.log(data);
  if (!data) return <p>Loading...</p>;
  return (
    <div>
      <select>
        {Object.entries(data.countries).map(([country, code]) => (
          <option key={code} value={code}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
}
