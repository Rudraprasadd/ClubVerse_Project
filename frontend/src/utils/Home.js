import React, { useEffect, useState } from 'react';

const Home = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/api/hello')  // Adjust URL if needed
      .then(response => response.text())
      .then(data => setMessage(data))
      .catch(error => console.error('Error fetching message:', error));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Backend says:</h1>
      <p className="mt-2">{message}</p>
    </div>
  );
};

export default Home;
