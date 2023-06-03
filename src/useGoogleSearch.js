// import { useState, useEffect } from 'react';

// const CONTEXT_KEY = "15a84037148c34a1d";
// const API_KEY = "AIzaSyDmWegrzJ-HGVauWPd3UplpxrIVk4a7-Gw";

// const useGoogleSearch = (term) => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`http://localhost:3001/search?query=${term}`);
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     };

//     fetchData();
//   }, [term]);

//   return { data };
// };

// export default useGoogleSearch;


// import { useState, useEffect } from 'react';
// import API_KEY from './keys';

// const CONTEXT_KEY = '15a84037148c34a1d';

// const useGoogleSearch = (term) => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       fetch(
//         `https://www.googleapis.com/customersearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
//       )
//         .then((response) => response.json())
//         .then((result) => {
//           setData(result);
//         });
//     };

//     fetchData();
//   }, [term]);

//   return { data };
// };

// export default useGoogleSearch;

import { useState, useEffect } from 'react';

const CONTEXT_KEY = '15a84037148c34a1d';
const API_KEY = 'AIzaSyDmWegrzJ-HGVauWPd3UplpxrIVk4a7-Gw'; // Replace 'your_api_key' with your actual API key

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



