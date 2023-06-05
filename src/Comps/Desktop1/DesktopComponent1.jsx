import { Box, Typography ,TextField, Button} from '@mui/material';
import './desktop-1.css';
import RemoveBg from '../../assets/removebg-preview-1-cNA.png'
import pngwing from '../../assets/pngwing-2-tqL.png'
import gotlogouncut from '../../assets/gotlogouncut-removebg-preview-1.png'
import solana from '../../assets/full-solana-logo-1.png'
import pngwing3 from '../../assets/pngwing-3.png'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';

const DesktopComponent1 = () => {




    return (
        <Box className="desktop-1-42a">
            <Header />
            <Box className="auto-group-zlsh-nEi">
                <Box className="auto-group-gjdw-qin">
                    <img className="gotlogouncut-removebg-preview-1-j3U" src={gotlogouncut} alt='removebg' />
                    <img className="pngwing-2-PNv" src={pngwing} alt='pngwing' />
                    <img className="full-solana-logo-1-3iN" src={solana} alt='solana' />
                </Box>
            </Box>
        </Box>

    );
};


export default DesktopComponent1;
