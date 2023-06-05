import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import './desktop-6.css';
import Header from '../Header/Header';
import BottomImage from '../../assets/f325653570f530b582479c8e909c6f48bf13ffmv2-removebg-preview-1.png'

const DesktopComponent6 = () => {
    return (
            <Box className="desktop-6-RwC">
                <Header />
            <Typography className="measuring-and-reporting-AJS">Measuring and Reporting</Typography>
                 <Box className="auto-group-czst-tVL">
                <Box maxWidth={400} display='flex' justifyContent='center' textAlign='left' flexDirection='column' gap={3} p={3}>
                    <Typography variant='h4'>Total returns</Typography>
                    <Typography variant='h4'>Total investment</Typography>
                    <Typography variant='h4'>Total revenue</Typography>
                    <Typography variant='h4'>Total tCO2e Sequestered</Typography>
                    </Box>
                <img className="line-5-ck6" src={BottomImage} alt="line" />
                </Box>
            </Box>
    );
};

export default DesktopComponent6;
