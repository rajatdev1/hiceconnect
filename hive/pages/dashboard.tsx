"use client"

import React from 'react';
import '../styles/globals.css';
import '../styles/style.css'
import '../styles/fonts.css'

import TableComp from './TableComp';
import UserManagementComp from './UserManagement'
import MainLayout from './MainLayout'


const Dashboard = () => {
  return (
  
    <div>
        <MainLayout>  
          <>
            <UserManagementComp />
            <TableComp />
          </>
        </MainLayout>
    </div>
    
   
  );
}

export default Dashboard;
