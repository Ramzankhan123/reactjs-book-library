import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderComponent from '../../components/Header/HeaderComponent';
import SidebarComponent from './Sidebar/SidebarComponent';

export default function DashboardPage() {
  return (
    <div className='flex'>
      <SidebarComponent />
      <div className='w-full'>
        <HeaderComponent />
        <Outlet />
      </div>
    </div>
  );
}