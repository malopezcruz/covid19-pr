import { useState, useEffect } from "react";
import axios from "axios";

export default function useStats(url) {
  const [stats, setStats] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(url);
      setStats(res.data);
    };
    fetchData();
  }, [url]);
  return stats;
}
