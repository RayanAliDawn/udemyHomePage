import React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import KeyboardDoubleArrowLeftSharpIcon from '@mui/icons-material/KeyboardDoubleArrowLeftSharp';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import { Navigation } from 'swiper';
export default function FeedbackCarousal() {

    const card = (
        <React.Fragment>
            <CardContent >

                <Typography >
                    <div className="Card-testimonials">
                        <div> <KeyboardDoubleArrowLeftSharpIcon /></div>
                        <span>This course helped me <b>Freshen up on my product manager skills and land a job at Facebook!Thanks guys:)</b></span>

                    </div>
                </Typography>
                <Typography >
                    <div>
                        <Stack direction="row" spacing={1} sx={{ alignItems: "center", margin: '20px 0px 10px 0px ' }}><Avatar
                            sx={{ backgroundColor: '#000', width: 24, height: 24 }}
                            alt="Remy Sharp"


                        >
                            <h6>RF</h6>
                        </Avatar >
                            <h6>Ron F</h6> </Stack></div>
                </Typography>
                <Typography >
                    <div>
                        <hr></hr>
                        <Stack direction='row' spacing={1} sx={{ color: '#5624D0', margin: '10px 0px 0px' }}>
                            <PlayArrowRoundedIcon />
                            <span> <b>Become a product Manager| Learn the Skills & Get the Job</b></span>
                        </Stack>
                    </div>
                </Typography>

            </CardContent>

        </React.Fragment >
    );

    return (
        <Box sx={{ marginTop: '4rem', backgroundColor: '#f7f9fa', marginBottom: '100%', marginX: { xs: '10%', sm: '0%' }, letterSpacing: '0.1px', lineHeight: '1.5' }}>
            <Container >

                <Typography sx={{ lineHeight: '1.1', marginY: '2rem', paddingTop: '2rem' }}><h4>How learners like you are achieving their goals</h4></Typography>
                <Swiper modules={[Navigation]}
                    breakpoints={{

                        0: {
                            spaceBetween: 200,
                        },
                        700: {
                            spaceBetween: 40,
                        }


                    }}
                    navigation loop={true}

                    slidesPerView={3}

                >
                    <SwiperSlide>
                        <Box sx={{ minWidth: 200 }} >
                            <Card variant="outlined" w>{card}</Card>
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box sx={{ minWidth: 200 }}>
                            <Card variant="outlined" w>{card}</Card>
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box sx={{ minWidth: 200 }}>
                            <Card variant="outlined" w>{card}</Card>
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box sx={{ minWidth: 200 }}>
                            <Card variant="outlined" w>{card}</Card>
                        </Box>
                    </SwiperSlide>
                </Swiper>


            </Container >
        </Box>
    )
}
