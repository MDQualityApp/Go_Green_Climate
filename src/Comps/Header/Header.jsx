import React from 'react'
import { Box, Typography, Grid } from '@mui/material';
import RemoveBg from '../../assets/removebg-preview-1-cNA.png'
import pngwing from '../../assets/pngwing-2-tqL.png'
import gotlogouncut from '../../assets/gotlogouncut-removebg-preview-1.png'
import solana from '../../assets/full-solana-logo-1.png'
import pngwing3 from '../../assets/pngwing-3.png'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { useNavigate , useLocation } from 'react-router-dom';
import './Header.styles.css';

export default function Header() {

    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleOpenPage = (item) => {
        navigate(`/${item}`)
    }
 
    const location = useLocation();


  return (
      <div className="desktop-1-42aa">
        <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Box className="auto-group-wh57-8wY">
                    <Box>
                    <img className="removebg-preview-1-FoC" src={RemoveBg} alt='removebg' />
                    </Box>
                      <Box display='flex' flexDirection='row'>
                          <Typography className="home-VSe" onClick={() => navigate('/')}>Home</Typography>
                          <Typography className="home-VSe" onClick={() => navigate('/desktop2')}>Contribution</Typography>
                          <Typography className="home-VSe" onClick={() => navigate('/desktop3')}>Carbon Footprint</Typography>
                          <Typography className="home-VSe" onClick={() => navigate('/desktop4')}>Project Tracking</Typography>
                          <Typography className="home-VSe" onClick={() => navigate('/desktop5')}>Carbon Offset</Typography>
                          <Typography className="home-VSe" onClick={() => navigate('/desktop6')}>Renewal</Typography>
                      </Box>
                  </Box>
        </Grid>
        </Grid>
    </div>
  )
}
