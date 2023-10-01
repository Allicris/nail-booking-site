import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_SERVICES } from '../../utils/mutations';

const Services = () => {
  const { loading, error, data } = useQuery(GET_SERVICES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const services = data.services;

  return (
    <div>
      <h1>Services</h1>
      <ul>
        {services.map(service => (
          <li key={service._id}>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            {/* Add other fields as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;