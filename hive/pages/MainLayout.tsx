"use client"

import React from 'react';
import Sidebarheader from '../../components/Sidebar/Sidebarheader';
import {Main} from '../../components/Sidebar/Sidebarheader'
import { useTheme } from '@mui/material';


const MainLayout = ({children}:any) => {
  const theme = useTheme();

  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <div>
        <Sidebarheader>
        <Main theme={theme} className="main-content" open={open} style={{backgroundColor:'#efefef', height: '100vh',overflow:'scroll', paddingTop:'80px'}}> 
          {children}
        </Main>
        </Sidebarheader>
    </div>
  )
}

export default MainLayout;