/* eslint-disable import/prefer-default-export */
import { useState, useEffect } from 'react';

export const useGoogleBooksAPI = (query) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (query.length > 1) {
        setLoading(true);
        setError(null);
        try {
          const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=35`);
          const booksData = await response.json();
          setData(booksData);
        } catch (err) {
          setError(err);
        }
        setLoading(false);
      }
    };
    fetchData();
  }, [query]);

  return { data, loading, error };
};
