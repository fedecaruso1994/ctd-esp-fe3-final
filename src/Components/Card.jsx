import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ name, username, id }) => {
  const addFav = () => {
    // Lógica para agregar la Card en el localStorage
    const favs = JSON.parse(localStorage.getItem('favDentists')) || [];
    // Verificar si el dentista ya está en favoritos
    if (!favs.some(dentist => dentist.id === id)) {
      favs.push({ name, username, id });
      localStorage.setItem('favDentists', JSON.stringify(favs));
    }
  };

  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{username}</p>
      <Link to={`/dentist/${id}`} className="details-link">View Details</Link>
      <div className="card-buttons">
        <button onClick={addFav} className="favButton">Add fav</button>
      </div>
    </div>
  );
};

export default Card;



