import React from 'react'
import Grid from '@mui/system/Unstable_Grid';
import Box from '@mui/system/Box';
import { Button } from '@mui/material';
import styled from '@emotion/styled';
import LanguageIcon from '@mui/icons-material/Language';
import New from '../assets/new.webp'
import { Block } from '@mui/icons-material';
export default function Footer() {
    const Buttonn = styled(Button)({
        color: 'white',
        border: '1px solid white',
        borderRadius: '0%',
        marginTop: '1rem',
        marginBottom: '1rem',
    })
    return (
        <>
            <Box sx={{ width: '100%', backgroundColor: 'black', display: { xs: 'block', sm: 'none' } }} >
                <div className='footera'>
                    <Buttonn><LanguageIcon fontSize='small' />English</Buttonn>
                    <Grid container rowSpacing={1} columnSpacing={1}>
                        <Grid xs={12}>
                            <a ><span>Udemy Business</span></a><br />

                            <a><span>Teach on Udemy</span><br /></a> <a><span>Get the app</span></a><br /> <a><span>About Us</span></a> <br /><a><span>Career</span></a><br /> <a><span>Blog</span></a> <br /><a><span>Help and Support</span></a><br /> <a><span>Affilliate</span></a><br /> <a><span>Investors</span></a> <br /><a><span>Terms</span></a> <br /><a><span>Privacy Policy</span></a><br />   <a><span>Cookie setting</span></a><br /> <a><span>Sitemap</span></a><br /><a><span>Accessibility statement</span></a>
                            <br />      <img src={New} style={{ width: '40px', height: "40px", marginTop: '0.8rem' }} />
                            <br /><a><span>@2023 Udemy, Inc.</span></a>
                        </Grid>

                    </Grid>
                </div>
            </Box>
            <Box sx={{ width: '100%', backgroundColor: 'black', display: { xs: 'none', sm: 'block' } }}>
                <div className='footerforlarge'>
                    <Grid container rowSpacing={3} columnSpacing={3} >
                        <Grid xs={3}>
                            <a ><span>Udemy Business</span></a><br />

                            <a><span>Teach on Udemy</span><br /></a> <a><span>Get the app</span></a><br /> <a><span>About Us</span></a> <br /><a><span>Career</span></a>
                        </Grid>
                        <Grid xs={3}>

                            <a><span>Blog</span></a> <br /><a><span>Help and Support</span></a><br /> <a><span>Affilliate</span></a><br /> <a><span>Investors</span></a> <br /><a><span>Terms</span></a>
                        </Grid>
                        <Grid xs={3}>
                            <a ><span>Udemy Business</span></a><br />

                            <a><span>Teach on Udemy</span><br /></a> <a><span>Get the app</span></a><br /> <a><span>About Us</span></a> <br /><a><span>Career</span></a>
                        </Grid>
                        <Grid xs={3}>
                            <Buttonn><LanguageIcon fontSize='small' />English</Buttonn>

                        </Grid>

                    </Grid>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>  <img src={New} style={{ width: '40px', height: "40px", marginTop: '0.8rem' }} /> <a>@2023Udemy,Inc.</a></Box>

                </div>
            </Box>

        </>
    )
}
