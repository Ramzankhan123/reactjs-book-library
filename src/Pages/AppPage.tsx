import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderComponent from '../components/Header/HeaderComponent';

export default function HomePage() {
  
  return (
    <div>
      <HeaderComponent />
      <Outlet />
    </div>
  );
}