import { React, useState } from "react";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import ne from '../assets/new.webp';
import styled from '@emotion/styled';
import '@fontsource/roboto/100.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LanguageIcon from '@mui/icons-material/Language';

import { Button, Input, Stack, autocompleteClasses } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const pages = ['Products', 'Pricing', 'Blog'];

export default function Navbar() {
    const [anchorElNav, setAnchorElNav] = useState(null);


    const handleOpenNavMenu = (event = MouseEvent) => {
        setAnchorElNav(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const Appbar = styled(AppBar)({
        backgroundColor: 'white',
        alignItems: 'center',

    });

    const SearchBox = styled('div')({
        flexGrow: "0.5",

        border: '1px solid #1c1d1f',
        borderRadius: '9999px',

        alignItems: 'center',
        display: 'flex',


    });




    return (
        <Appbar  >
            <Container sx={{ display: { md: 'none', xs: 'block' }, padding: '0%' }} >
                <Toolbar sx={{ justifyContent: 'space-between', display: 'flex', alignItems: 'center' }}>

                    <Box >
                        <IconButton
                            sx={{ color: 'black' }}
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}

                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}

                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography component='a' href="/"><img src={ne} alt="Udemy" height='40' /></Typography>

                    <Box>
                        <Stack direction='row' sx={{ color: 'black' }} >
                            <IconButton sx={{ color: 'black' }}

                            >
                                <SearchOutlinedIcon />
                            </IconButton>
                            <IconButton sx={{ color: 'black' }}

                            >
                                <ShoppingCartOutlinedIcon />
                            </IconButton>


                        </Stack>
                    </Box>


                </Toolbar>
            </Container>

            <Container maxWidth='100%' sx={{ display: { md: 'block', xs: 'none' }, color: 'black', fontWeight: '400', fontSize: '0.9rem', margin: '0.2rem' }} >
                <Toolbar sx={{ justifyContent: 'space-between', display: 'flex', alignItems: 'center' }}>


                    <a href="/"><img src={ne} alt="Udemy" height='40' /></a>
                    <span style={{ cursor: 'pointer' }}  >Categories</span>
                    <SearchBox>
                        <SearchIcon fontSize="medium" sx={{ color: 'grey', marginLeft: '1rem' }} />
                        <Input sx={{
                            padding: '0.6rem', width: '100%', marginX: '1rem', '&:before': {
                                borderBottom: 'none',
                            },
                        }} placeholder='Search for anything' />
                    </SearchBox>
                    <span style={{ cursor: 'pointer' }}   >Udemy Business</span>
                    <span style={{ cursor: 'pointer' }}  >Teach On Udemy</span>
                    <Box>


                        <IconButton sx={{ color: 'black' }}

                        >
                            <ShoppingCartOutlinedIcon />
                        </IconButton>



                    </Box>
                    <Stack spacing={1} direction="row">
                        <Button variant="outlined" sx={{ color: 'black', border: '1px solid #1c1d1f', borderRadius: '0%', fontSize: "0.75rem" }}>Log In</Button>
                        <Button sx={{ backgroundColor: 'black', color: 'white', borderRadius: '0%', fontSize: "0.75rem", border: '1px solid gray' }} >Sign Up</Button>
                        <Button sx={{ color: 'black', border: '1px solid #1c1d1f', borderRadius: '0%' }} > <LanguageIcon /> </Button>


                    </Stack>

                </Toolbar>
            </Container>
        </Appbar>
    )
}
