

import { useState, useEffect } from 'react';

const CONTEXT_KEY = '15a84037148c34a1d';
const API_KEY = 'YOUR_API_KEY'; 

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    fetchData();
  }, [term]);

  return { data };
};

export default useGoogleSearch;



