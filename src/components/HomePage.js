import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>

      <Link to="/users">Go to Users Page</Link>
    </div>
  );
}
