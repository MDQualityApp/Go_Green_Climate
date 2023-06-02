import { Box, Typography} from '@mui/material';
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
                <Box className="auto-group-4bx3-w34">
                    <Box className="rectangle-1-1oc"></Box>
                    <Box className="rectangle-2-WVU"></Box>
                    <Box className="rectangle-6-ZyY"></Box>
                    <Box className="rectangle-4-nrJ"></Box>
                    <Typography className="r4pv7u6wtyijnmelfi7hcqrvath2r4yatqgvjdbvg3r-s74">
                        5r4Pv7u6WTyijnMELfi7hCqrVATH2r4YATQgvjDBVG3r
                    </Typography>
                    <Typography className="number-of-nfts-JCN">Number of NFTs</Typography>
                    <Typography className="mint-your-nft-vUe">Mint your NFT</Typography>
                    <Typography className="enter-the-number-of-nfts-kia">Enter the number of NFTs</Typography>
                    <Typography className="mint-ZAE">Mint</Typography>
                    <img className="pngwing-3-EXG" src={pngwing3} alt='pngwing' />
                </Box>
            </Box>
        </Box>
    );
};


export default DesktopComponent1;
