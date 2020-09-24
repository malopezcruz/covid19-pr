import React, { useState, createContext } from 'react';
import { calcReportDate, formatDate } from '../utils/utils';
import rt from '../data/rt.json';
import rt_7 from '../data/rt_7.json';
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
import municipalities from '../data/municipalities.json';

const DataContext = createContext(null);

const Provider = ({ children }) => {
  const [rNumber] = useState(rt);
  const [rNumber_7] = useState(rt_7);
  const [growthNumber] = useState(rg);
  const [fosFit] = useState(fos_fit);
  const [dailyCases] = useState(daily_cases);
  const [weeklyCases] = useState(weekly_cases);
  const [twoweeksCases] = useState(twoweeks_cases);
  const [monthlyCases] = useState(monthly_cases);
  const [dailyDeaths] = useState(daily_deaths);
  const [weeklyDeaths] = useState(weekly_deaths);
  const [twoweeksDeaths] = useState(twoweeks_deaths);
  const [monthlyDeaths] = useState(monthly_deaths);
  const [municipalityList] = useState(municipalities);

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

  const { dates: lastDate } = municipalityList[municipalityList.length - 1];

  const reportDate = formatDate(calcReportDate(lastDate));

  const store = {
    r_number: rNumber,
    r_number_7: rNumber_7,
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
    municipalitylist: municipalityList,
    reportDate,
  };

  return <DataContext.Provider value={store}>{children}</DataContext.Provider>;
};

export { DataContext, Provider };
