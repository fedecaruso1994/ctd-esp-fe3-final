import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Components/Card';

const Home = () => {
  const [dentists, setDentists] = useState([]);

  useEffect(() => {
    // Obtener datos de la API
    axios('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setDentists(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <main className="">
      <h1>Home</h1>
      <div className='card-grid'>
        {dentists.map(dentist => (
          <Card
            key={dentist.id}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
