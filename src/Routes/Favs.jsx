import React, { useState, useEffect, useContext } from 'react';
import Card from '../Components/Card';
import { ContextGlobal } from '../Components/utils/global.context';

const Favs = () => {
  const [favDentists, setFavDentists] = useState([]);
  const { state } = useContext(ContextGlobal);

  useEffect(() => {
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



