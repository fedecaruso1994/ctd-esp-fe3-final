import React, { useState, useEffect } from 'react';
import Card from '../Components/Card';

const Favs = () => {
  const [favDentists, setFavDentists] = useState([]);

  useEffect(() => {
    // Obtener los dentistas destacados del localStorage
    const savedFavs = JSON.parse(localStorage.getItem('favDentists')) || [];
    setFavDentists(savedFavs);
  }, []);

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favDentists.length > 0 ? (
          favDentists.map((dentist) => (
            <Card
              key={dentist.id}
              name={dentist.name}
              username={dentist.username}
              id={dentist.id}
            />
          ))
        ) : (
          <p>No favorite dentists found.</p>
        )}
      </div>
    </>
  );
};

export default Favs;


