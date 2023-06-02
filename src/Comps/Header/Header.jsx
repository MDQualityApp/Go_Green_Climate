import React from 'react'
import { Box, Typography } from '@mui/material';
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
          <Box className="auto-group-wh57-8wY">
              <img className="removebg-preview-1-FoC" src={RemoveBg} alt='removebg' />
              <Typography className="home-VSe" onClick={() => navigate('/')}>Home</Typography>
              <Typography className="how-it-works-H7c" onClick={handleClick}>
                  Menu
                  <br />
              </Typography>
              <Box className="auto-group-vigd-kWz">
                  <Box className="frame-1-Suc"></Box>
                  <Box className="rectangle-5-XAN"></Box>
                  <Typography className="connect-your-wallet-y2N">{location.pathname === '/' ? 'Connect Your Wallet' : '5r4Pv7u6WTyijnM...'}</Typography>
              </Box>
          </Box>
          <Box>
              <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                      'aria-labelledby': 'basic-button',
                  }}
                  sx={{ padding: 2, marginTop: 1 }}
              >
                  <MenuItem onClick={() => handleOpenPage('desktop2')} sx={{ fontSize: 16 }}>Contribution</MenuItem>
                  <MenuItem onClick={() => handleOpenPage('desktop3')} sx={{ fontSize: 16 }}>Carbon Footprint</MenuItem>
                  <MenuItem onClick={() => handleOpenPage('desktop4')} sx={{ fontSize: 16 }}>Project Tracking</MenuItem>
                  <MenuItem onClick={() => handleOpenPage('desktop5')} sx={{ fontSize: 16 }}>Carbon Offset</MenuItem>
                  <MenuItem onClick={() => handleOpenPage('desktop6')} sx={{ fontSize: 16 }}>Renewal</MenuItem>
              </Menu>
          </Box>
    </div>
  )
}
