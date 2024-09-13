import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const Detail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);
  const url = 'https://jsonplaceholder.typicode.com/users/' + id;

  useEffect(() => {
    axios(url)
      .then((response) => setDentist(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, [id]);

  return (
    <div className="detail-container">
      {dentist ? (
        <div className="detail-card">
          <h1 className="detail-title">Detail Dentist</h1>
          <p><strong>Name:</strong> {dentist.name}</p>
          <p><strong>Email:</strong> {dentist.email}</p>
          <p><strong>Phone:</strong> {dentist.phone}</p>
          <p><strong>Website:</strong> {dentist.website}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Detail;

