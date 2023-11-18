"use client"
import React from 'react';
import '../styles/globals.css';
import '../styles/style.css'
import '../styles/fonts.css'

import TableComp from './TableComp';
import MainLayout from './MainLayout'
import Link from 'next/link'
import '../styles/global.css'
import { useRouter } from 'next/navigation';
import { Grid } from '@mui/material';
import CustomButton from '../../components/CustomButton/CustomButton';


const Outlet = () => {
    const router = useRouter();
    const handleClick = () => {
        console.log("outlet")
          router.push('/outletForm');
      };
  return (
  
    <div>
        <MainLayout>  
          <>
            <Grid container className='outlet_header box_shadow' sx={{borderRadius: '5px'}}>
                <Grid item lg={9} md={9}>
                <p style={{fontSize:'14px'}}>
                    <Link href='/dashboard' style={{textDecoration: 'none'}}><span>Home</span></Link> / Outlet Master 
                </p>
                <h3>Outlets</h3>
                </Grid>
                <Grid item lg={3} md={3} sx={{position:'relative'}}>
                    <CustomButton onClick={handleClick} sx={{
                        backgroundColor: 'black',
                        color:'white',
                        position: 'absolute',
                        bottom: '15px',
                        height:'50px',
                        right:'10px',
                        '&:hover': {
                            backgroundColor: '#ff6b00', // Change this to the desired hover color
                          },
                    }}>Add Outlet</CustomButton>
                </Grid>
            </Grid>
            <TableComp />
          </>
        </MainLayout>
    </div>
    
   
  );
}

export default Outlet;
