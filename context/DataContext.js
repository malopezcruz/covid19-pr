import React, { useState, createContext } from 'react';
import rt from '../data/rt.json';
import rg from '../data/rg.json';
import fos_fit from '../data/fos_fit.json';
import daily_cases from '../data/daily_cases.json';
import weekly_cases from '../data/weekly_cases.json';
import twoweeks_cases from '../data/twoweeks_cases.json';
import monthly_cases from '../data/monthly_cases.json';
import daily_deaths from '../data/daily_deaths.json';
import weekly_deaths from '../data/weekly_deaths.json';
import twoweeks_deaths from '../data/twoweeks_deaths.json';
import monthly_deaths from '../data/monthly_deaths.json';
// import municipalities from '../data/municipalities.json';

const DataContext = createContext(null);

const Provider = ({ children }) => {
  const [rNumber, setrNumber] = useState(rt);
  const [growthNumber, setrowthNumber] = useState(rg);
  const [fosFit, setfosFit] = useState(fos_fit);
  const [dailyCases, setdailyCases] = useState(daily_cases);
  const [weeklyCases, setweeklyCases] = useState(weekly_cases);
  const [twoweeksCases, settwoweeksCases] = useState(twoweeks_cases);
  const [monthlyCases, setmonthlyCases] = useState(monthly_cases);
  const [dailyDeaths, setdailyDeaths] = useState(daily_deaths);
  const [weeklyDeaths, setweeklyDeaths] = useState(weekly_deaths);
  const [twoweeksDeaths, settwoweeksDeaths] = useState(twoweeks_deaths);
  const [monthlyDeaths, setmonthlyDeaths] = useState(monthly_deaths);
  // const [municipalityList, setMunicipalityList] = useState(municipalities);

  const { Intervalo } = rNumber[rNumber.length - 1];

  const {
    r_conf,
    r,
    halving,
    halving_conf,
    r_before,
    r_conf_before,
    doubling,
    doubling_conf,
  } = growthNumber[0];

  const store = {
    r_number: rNumber,
    interval: Intervalo,
    growth: growthNumber,
    fosfit: fosFit,
    r_conf,
    r,
    halving,
    halving_conf,
    r_before,
    r_conf_before,
    doubling,
    doubling_conf,
    dailycases: dailyCases,
    weeklycases: weeklyCases,
    twoweekscases: twoweeksCases,
    monthlycases: monthlyCases,
    totalcases: monthlyCases
      .map((item) => item.counts)
      .reduce((prev, next) => prev + next),
    dailydeaths: dailyDeaths,
    weeklydeaths: weeklyDeaths,
    twoweeksdeaths: twoweeksDeaths,
    monthlydeaths: monthlyDeaths,
    totaldeaths: monthlyDeaths
      .map((item) => item.counts)
      .reduce((prev, next) => prev + next),
    // municipalitylist: municipalityList,
  };

  return <DataContext.Provider value={store}>{children}</DataContext.Provider>;
};

export { DataContext, Provider };
