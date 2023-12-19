"use client";

import React, { useEffect, useState } from 'react';
import Button from '../../libraries/ui/Button';
import Person from '../../libraries/models/Person';

export default function Home() {
  const person = new Person();
  const [serverNames, setServerNames] = useState<string[]>([]);
  const [clientNames, setClientNames] = useState<string[]>([]);

  useEffect(() => {
    setServerNames(person.getAll());
  }, []);

  const handleButtonClick = async () => {
    try {
      const response = await fetch('/api');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const newNames = await response.json();
      setClientNames(newNames.message);
      console.log(clientNames, newNames, newNames.message);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      <h1>Server-side List of Names</h1>
      <ul>
        {serverNames.map((serverName, index) => (
          <li key={index}>{serverName}</li>
        ))}
      </ul>

      <h1>Client-side List of Names</h1>
      <Button onClick={handleButtonClick}>Click me</Button>
      {clientNames.length > 0 && (
        <ul>
          {clientNames.map((clientName, index) => (
            <li key={index}>{clientName}</li>
          ))}
        </ul>
      )}
    </>
  );
};
