import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Flow from '../component/Flow';
import Loader from '../elements/Loader';

const GetData = () => {
  const [data, setData] = useState(null);
  const [path, setpath] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = 'https://algo-tp.onrender.com/sites'; 
        const response = await axios.get(apiUrl);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
        setLoading(false);
      }

      try {
        const apiUrl = 'https://algo-tp.onrender.com/start';
        const response = await axios.get(apiUrl);
        setpath(response); 

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : data && data.data ? (
        <Flow Allsites={data?.data} path={path?.data} />
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default GetData;
