import React from 'react';
import { Box, Typography } from '@mui/material';
import './desktop-5.css';
import logo from '../../assets/removebg-preview-1-6sQ.png'
import pngwing4 from '../../assets/pngwing-4.png'
import pngwing2 from '../../assets/pngwing-2.png'
import Header from '../Header/Header';

const DesktopComponent5 = () => {
    return (
        <Box className="desktop-5-QXp">
            <Header />
            <Typography variant="body1" className="carbon-offset-nyc">Carbon offset</Typography>
            <Typography variant="body1" className="offset-metrics-6zJ">Offset metrics</Typography>
            <Box className="auto-group-twfo-QVC">
                <img className="pngwing-4-jXU" src={pngwing4} alt="pngwing4" />
                <Box className="auto-group-6rt5-qqQ">
                    <img className="pngwing-2-NqL" src={pngwing2} alt="icon" />
                    <Box className="rectangle-20-hsc"></Box>
                    <Box className="rectangle-21-EMk"></Box>
                    <Box className="rectangle-22-mMg"></Box>
                    <Box className="rectangle-23-VoU"></Box>
                    <Box className="rectangle-24-ct6"></Box>
                    <Box className="rectangle-25-kUW"></Box>
                    <Box className="rectangle-26-HUS"></Box>
                    <Typography variant="body1" className="offset-validation-pUN">Offset Validation</Typography>
                    <Typography variant="body1" className="emissions-reduction-XNn">Emissions Reduction</Typography>
                    <Typography variant="body1" className="offset-calculation-q8a">Offset Calculation</Typography>
                    <Typography variant="body1" className="offset-verification-8dU">Offset Verification</Typography>
                    <Typography variant="body1" className="impactassessment-dKL">Impact Assessment</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default DesktopComponent5;
