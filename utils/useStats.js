import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useStats(url) {
  const [stats, setStats] = useState();
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url);
        setStats(res.data);
      } catch (error) {
        setIsError(true);
      }
    };
    fetchData();
  }, [url]);
  return [stats, isError];
}
