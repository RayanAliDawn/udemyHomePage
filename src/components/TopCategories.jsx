import { Box, Container } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import logo from '../assets/logo.png'
import Typography from '@mui/material/Typography';
import Data from '../assets/DataScience.png'
import 'swiper/css';
export default function TopCategories() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    const Buttonn = styled(Button)({
        borderRadius: '1rem',
        color: 'black',
        border: '1px solid #444',
        marginRight: '0.5rem',
        whiteSpace: 'nowrap'

    })
    return (
        <Container >
            <div><h5>Top Categories</h5></div>
            <Box sx={{ display: { xs: 'block', ssm: 'none' } }}>
                <Box sx={{ marginTop: '2rem' }}>
                    <Buttonn variant="outlined" size="small">
                        Design
                    </Buttonn>
                    <Buttonn variant="outlined" size="small">
                        Development
                    </Buttonn>
                    <Buttonn variant="outlined" size="small">
                        Marketing
                    </Buttonn>
                    <Buttonn variant="outlined" size="small">
                        IT ans Software
                    </Buttonn>
                </Box>
                <Box sx={{ marginTop: '10px' }}>
                    <Buttonn variant="outlined" size="small">
                        Design
                    </Buttonn>
                    <Buttonn variant="outlined" size="small">
                        Development
                    </Buttonn>
                    <Buttonn variant="outlined" size="small">
                        Marketing
                    </Buttonn>
                    <Buttonn variant="outlined" size="small">
                        IT ans Software
                    </Buttonn>
                </Box>
            </Box>
            <Box sx={{ display: { xs: 'none', ssm: 'block' } }}>
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                    <Card sx={{ boxShadow: 'none' }} >
                        <CardMedia
                            sx={{ height: { xs: '140px' } }}
                            component="img"
                            alt="green iguana"

                            image={logo}
                        />

                        <Typography sx={{ marginRight: '7rem' }}  >
                            <h5>Design</h5>
                        </Typography>
                    </Card>
                    <Card sx={{ boxShadow: 'none' }} >
                        <CardMedia
                            sx={{ height: { xs: '140px' } }}
                            component="img"
                            alt="green iguana"

                            image={Data}
                        />

                        <Typography sx={{ marginRight: '7rem' }}  >
                            <h5>Development</h5>
                        </Typography>
                    </Card> <Card sx={{ boxShadow: 'none' }} >
                        <CardMedia
                            sx={{ height: { xs: '140px' } }}
                            component="img"
                            alt="green iguana"

                            image={logo}
                        />

                        <Typography sx={{ marginRight: '7rem' }}  >
                            <h5>Marketing</h5>
                        </Typography>
                    </Card> <Card sx={{ boxShadow: 'none' }} >
                        <CardMedia
                            sx={{ height: { xs: '140px' } }}
                            component="img"
                            alt="green iguana"

                            image={Data}
                        />

                        <Typography sx={{ marginRight: '7rem' }}  >
                            <h5>IT and Software</h5>
                        </Typography>
                    </Card> <Card sx={{ boxShadow: 'none' }} >
                        <CardMedia
                            sx={{ height: { xs: '140px' } }}
                            component="img"
                            alt="green iguana"

                            image={logo}
                        />

                        <Typography sx={{ marginRight: '7rem' }}  >
                            <h5>Personal Development</h5>
                        </Typography>
                    </Card> <Card sx={{ boxShadow: 'none' }} >
                        <CardMedia
                            sx={{ height: { xs: '140px' } }}
                            component="img"
                            alt="green iguana"

                            image={Data}
                        />

                        <Typography sx={{ marginRight: '7rem' }}  >
                            <h5>Business</h5>
                        </Typography>
                    </Card>



                </Box>
            </Box>

        </Container>

    )
}
