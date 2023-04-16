import { Container } from '@mui/material'
import React from 'react'
import Grid from '@mui/system/Unstable_Grid';
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

import Student from '../assets/hi.avif'
export default function Featured() {
    const TypoButton = styled(Typography)({
        color: '#5624d0',
        textDecorationLine: 'underline',
        fontWeight: '700'

    })
    const TypoButton2 = styled(Typography)({
        color: '#6a6f73',

        marginTop: '7rem'
    })
    return (
        <Container>

            <Box sx={{ width: '100%', display: { xs: 'block', ssm: 'none' } }}>
                <h5 style={{ marginTop: '3rem', marginBottom: '1rem' }}>Featured topics by category</h5>
                <Grid container rowSpacing={3} columnSpacing={3} >
                    <Grid xs={6}>
                        <h6>Development</h6>
                        <TypoButton sx={{ marginTop: '0.2rem', fontSize: '12px' }}> <h6>Python</h6></TypoButton>
                        <TypoButton2 sx={{ marginTop: '0.2rem', fontSize: '8px' }}><span>23,54,66 students</span></TypoButton2>
                        <TypoButton sx={{ marginTop: '0.2rem', fontSize: '12px' }}> <h6>Web Development</h6></TypoButton>
                        <TypoButton2 sx={{ marginTop: '0.2rem', fontSize: '8px' }}><span>23,54,66 students</span></TypoButton2><TypoButton sx={{ marginTop: '0.2rem', fontSize: '12px' }}> <h6>Machine Learning</h6></TypoButton>
                        <TypoButton2 sx={{ marginTop: '0.2rem', fontSize: '8px' }}><span>23,54,66 students</span></TypoButton2>
                    </Grid>
                    <Grid xs={6}>
                        <h6>Business</h6>
                        <TypoButton sx={{ marginTop: '0.2rem', fontSize: '12px' }}> <h6>Python</h6></TypoButton>
                        <TypoButton2 sx={{ marginTop: '0.2rem', fontSize: '8px' }}><span>23,54,66 students</span></TypoButton2>
                        <TypoButton sx={{ marginTop: '0.2rem', fontSize: '12px' }}> <h6>Web Development</h6></TypoButton>
                        <TypoButton2 sx={{ marginTop: '0.2rem', fontSize: '8px' }}><span>23,54,66 students</span></TypoButton2><TypoButton sx={{ marginTop: '0.2rem', fontSize: '12px' }}> <h6>Machine Learning</h6></TypoButton>
                        <TypoButton2 sx={{ marginTop: '0.2rem', fontSize: '8px' }}><span>23,54,66 students</span></TypoButton2>

                    </Grid>
                    <Grid xs={6}>
                        <h6>IT and Software</h6>
                        <TypoButton sx={{ marginTop: '0.2rem', fontSize: '12px' }}> <h6>Python</h6></TypoButton>
                        <TypoButton2 sx={{ marginTop: '0.2rem', fontSize: '8px' }}><span>23,54,66 students</span></TypoButton2>
                        <TypoButton sx={{ marginTop: '0.2rem', fontSize: '12px' }}> <h6>Web Development</h6></TypoButton>
                        <TypoButton2 sx={{ marginTop: '0.2rem', fontSize: '8px' }}><span>23,54,66 students</span></TypoButton2><TypoButton sx={{ marginTop: '0.2rem', fontSize: '12px' }}> <h6>Machine Learning</h6></TypoButton>
                        <TypoButton2 sx={{ marginTop: '0.2rem', fontSize: '8px' }}><span>23,54,66 students</span></TypoButton2>
                    </Grid>
                    <Grid xs={6}>
                        <h6>Design</h6>
                        <TypoButton sx={{ marginTop: '0.2rem', fontSize: '12px' }}> <h6>Python</h6></TypoButton>
                        <TypoButton2 sx={{ marginTop: '0.2rem', fontSize: '8px' }}><span>23,54,66 students</span></TypoButton2>
                        <TypoButton sx={{ marginTop: '0.2rem', fontSize: '12px' }}> <h6>Web Development</h6></TypoButton>
                        <TypoButton2 sx={{ marginTop: '0.2rem', fontSize: '8px' }}><span>23,54,66 students</span></TypoButton2><TypoButton sx={{ marginTop: '0.2rem', fontSize: '12px' }}> <h6>Machine Learning</h6></TypoButton>
                        <TypoButton2 sx={{ marginTop: '0.2rem', fontSize: '8px' }}><span>23,54,66 students</span></TypoButton2>
                    </Grid>
                </Grid>
                <img className='imgg' src={Student} />

            </Box>







            <Box sx={{ width: '100%', display: { xs: 'none', ssm: 'block' } }}>
                <h2 style={{ marginTop: '3rem', marginBottom: '1rem' }}>Featured topics by category</h2>
                <Grid container columnSpacing={1} >
                    <Grid xs={3}>
                        <h3>Development</h3>
                        <TypoButton sx={{ marginTop: '0.2rem', fontSize: '1.8rem' }}> <h6>Python</h6></TypoButton>
                        <TypoButton2 sx={{ marginTop: '0.2rem', fontSize: '1rem' }}><span>23,54,66 students</span></TypoButton2>
                        <TypoButton sx={{ marginTop: '0.2rem', fontSize: '1.8rem' }}> <h6>Python</h6></TypoButton>
                        <TypoButton2 sx={{ marginTop: '0.2rem', fontSize: '1rem' }}><span>23,54,66 students</span></TypoButton2><TypoButton sx={{ marginTop: '0.2rem', fontSize: '1.8rem' }}> <h6>Python</h6></TypoButton>
                        <TypoButton2 sx={{ marginTop: '0.2rem', fontSize: '1rem' }}><span>23,54,66 students</span></TypoButton2>
                    </Grid>
                    <Grid xs={3}>
                        <h3>Machine Learning</h3>
                        <TypoButton sx={{ marginTop: '0.2rem', fontSize: '1.8rem' }}> <h6>Python</h6></TypoButton>
                        <TypoButton2 sx={{ marginTop: '0.2rem', fontSize: '1rem' }}><span>23,54,66 students</span></TypoButton2>
                        <TypoButton sx={{ marginTop: '0.2rem', fontSize: '1.8rem' }}> <h6>Python</h6></TypoButton>
                        <TypoButton2 sx={{ marginTop: '0.2rem', fontSize: '1rem' }}><span>23,54,66 students</span></TypoButton2><TypoButton sx={{ marginTop: '0.2rem', fontSize: '1.8rem' }}> <h6>Python</h6></TypoButton>
                        <TypoButton2 sx={{ marginTop: '0.2rem', fontSize: '1rem' }}><span>23,54,66 students</span></TypoButton2>

                    </Grid>
                    <Grid xs={3}>
                        <h3>IT and Software</h3>
                        <TypoButton sx={{ marginTop: '0.2rem', fontSize: '1.8rem' }}> <h6>Python</h6></TypoButton>
                        <TypoButton2 sx={{ marginTop: '0.2rem', fontSize: '1rem' }}><span>23,54,66 students</span></TypoButton2>
                        <TypoButton sx={{ marginTop: '0.2rem', fontSize: '1.8rem' }}> <h6>Python</h6></TypoButton>
                        <TypoButton2 sx={{ marginTop: '0.2rem', fontSize: '1rem' }}><span>23,54,66 students</span></TypoButton2><TypoButton sx={{ marginTop: '0.2rem', fontSize: '1.8rem' }}> <h6>Python</h6></TypoButton>
                        <TypoButton2 sx={{ marginTop: '0.2rem', fontSize: '1rem' }}><span>23,54,66 students</span></TypoButton2>
                    </Grid>
                    <Grid xs={3}>
                        <h3>Design</h3>
                        <TypoButton sx={{ marginTop: '0.2rem', fontSize: '1.8rem' }}> <h6>Python</h6></TypoButton>
                        <TypoButton2 sx={{ marginTop: '0.2rem', fontSize: '1rem' }}><span>23,54,66 students</span></TypoButton2>
                        <TypoButton sx={{ marginTop: '0.2rem', fontSize: '1.8rem' }}> <h6>Python</h6></TypoButton>
                        <TypoButton2 sx={{ marginTop: '0.2rem', fontSize: '1rem' }}><span>23,54,66 students</span></TypoButton2><TypoButton sx={{ marginTop: '0.2rem', fontSize: '1.8rem' }}> <h6>Python</h6></TypoButton>
                        <TypoButton2 sx={{ marginTop: '0.2rem', fontSize: '1rem' }}><span>23,54,66 students</span></TypoButton2>
                    </Grid>
                </Grid>
                <img className='imgg' src={Student} />
            </Box>
        </Container >
    )
}
