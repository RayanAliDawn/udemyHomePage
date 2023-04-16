import { Card, CardActionArea, CardContent, CardMedia, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import JavaScript from '../assets/JavaScript.png'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import Box from '@mui/material/Box';

export default function StudentsViewing() {
    return (
        <Container>
            <Box sx={{ marginY: '2.5rem', maxWidth: '1350px' }}>
                <Typography>
                    <h5>Students are viewing</h5>
                </Typography>
                <Swiper className='CardBoxInner'

                    modules={[Navigation]} loop={true}
                    navigation
                    breakpoints={{

                        0: {
                            spaceBetween: 20,
                            slidesPerView: 1,
                        },

                        600: {
                            spaceBetween: 20,
                            slidesPerView: 2,
                        },
                        spaceBetween: 20,

                        701: {
                            spaceBetween: 20,
                            slidesPerView: 3,
                        },
                        981: {
                            spaceBetween: 20,
                            slidesPerView: 4,
                        },
                        1200: {
                            spaceBetween: 20,
                            slidesPerView: 5,
                        },
                    }}


                >

                    <SwiperSlide>  <div>
                        <Card sx={{ maxWidth: 345, boxShadow: 'none', margin: '0 auto' }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={JavaScript}
                                    alt="green iguana"
                                />
                                <CardContent >

                                    <Typography sx={{ letterSpacing: '0.1px', lineHeight: '1.2' }}>
                                        <a> <h5 >The Complete JavaScript Course 2023: From Zero to ..</h5> </a>
                                        <h6> Dr.Angela</h6>
                                    </Typography>
                                    <Typography >
                                        <Stack direction="row" >
                                            <h6>4.7</h6><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarHalfIcon fontSize='small' /> <h6>(277,866)</h6>
                                        </Stack>
                                        <h6>Price</h6>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div></SwiperSlide>
                    <SwiperSlide>  <div>
                        <Card sx={{ maxWidth: 345, boxShadow: 'none', margin: '0 auto' }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={JavaScript}
                                    alt="green iguana"
                                />
                                <CardContent >

                                    <Typography sx={{ letterSpacing: '0.1px', lineHeight: '1.2' }}>
                                        <a> <h5 >The Complete JavaScript Course 2023: From Zero to ..</h5> </a>
                                        <h6> Dr.Angela</h6>
                                    </Typography>
                                    <Typography >
                                        <Stack direction="row" >
                                            <h6>4.7</h6><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarHalfIcon fontSize='small' /> <h6>(277,866)</h6>
                                        </Stack>
                                        <h6>Price</h6>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div></SwiperSlide><SwiperSlide>  <div>
                        <Card sx={{ maxWidth: 345, boxShadow: 'none', margin: '0 auto' }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={JavaScript}
                                    alt="green iguana"
                                />
                                <CardContent >

                                    <Typography sx={{ letterSpacing: '0.1px', lineHeight: '1.2' }}>
                                        <a> <h5 >The Complete JavaScript Course 2023: From Zero to ..</h5> </a>
                                        <h6> Dr.Angela</h6>
                                    </Typography>
                                    <Typography >
                                        <Stack direction="row" >
                                            <h6>4.7</h6><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarHalfIcon fontSize='small' /> <h6>(277,866)</h6>
                                        </Stack>
                                        <h6>Price</h6>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div></SwiperSlide>
                    <SwiperSlide>  <div>
                        <Card sx={{ maxWidth: 345, boxShadow: 'none', margin: '0 auto' }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={JavaScript}
                                    alt="green iguana"
                                />
                                <CardContent >

                                    <Typography sx={{ letterSpacing: '0.1px', lineHeight: '1.2' }}>
                                        <a> <h5 >The Complete JavaScript Course 2023: From Zero to ..</h5> </a>
                                        <h6> Dr.Angela</h6>
                                    </Typography>
                                    <Typography >
                                        <Stack direction="row" >
                                            <h6>4.7</h6><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarHalfIcon fontSize='small' /> <h6>(277,866)</h6>
                                        </Stack>
                                        <h6>Price</h6>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div></SwiperSlide><SwiperSlide>  <div>
                        <Card sx={{ maxWidth: 345, boxShadow: 'none', margin: '0 auto' }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={JavaScript}
                                    alt="green iguana"
                                />
                                <CardContent >

                                    <Typography sx={{ letterSpacing: '0.1px', lineHeight: '1.2' }}>
                                        <a> <h5 >The Complete JavaScript Course 2023: From Zero to ..</h5> </a>
                                        <h6> Dr.Angela</h6>
                                    </Typography>
                                    <Typography >
                                        <Stack direction="row" >
                                            <h6>4.7</h6><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarHalfIcon fontSize='small' /> <h6>(277,866)</h6>
                                        </Stack>
                                        <h6>Price</h6>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div></SwiperSlide><SwiperSlide>  <div>
                        <Card sx={{ maxWidth: 345, boxShadow: 'none', margin: '0 auto' }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={JavaScript}
                                    alt="green iguana"
                                />
                                <CardContent >

                                    <Typography sx={{ letterSpacing: '0.1px', lineHeight: '1.2' }}>
                                        <a> <h5 >The Complete JavaScript Course 2023: From Zero to ..</h5> </a>
                                        <h6> Dr.Angela</h6>
                                    </Typography>
                                    <Typography >
                                        <Stack direction="row" >
                                            <h6>4.7</h6><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarHalfIcon fontSize='small' /> <h6>(277,866)</h6>
                                        </Stack>
                                        <h6>Price</h6>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div></SwiperSlide><SwiperSlide>  <div>
                        <Card sx={{ maxWidth: 345, boxShadow: 'none', margin: '0 auto' }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={JavaScript}
                                    alt="green iguana"
                                />
                                <CardContent >

                                    <Typography sx={{ letterSpacing: '0.1px', lineHeight: '1.2' }}>
                                        <a> <h5 >The Complete JavaScript Course 2023: From Zero to ..</h5> </a>
                                        <h6> Dr.Angela</h6>
                                    </Typography>
                                    <Typography >
                                        <Stack direction="row" >
                                            <h6>4.7</h6><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarHalfIcon fontSize='small' /> <h6>(277,866)</h6>
                                        </Stack>
                                        <h6>Price</h6>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div></SwiperSlide><SwiperSlide>  <div>
                        <Card sx={{ maxWidth: 345, boxShadow: 'none', margin: '0 auto' }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={JavaScript}
                                    alt="green iguana"
                                />
                                <CardContent >

                                    <Typography sx={{ letterSpacing: '0.1px', lineHeight: '1.2' }}>
                                        <a> <h5 >The Complete JavaScript Course 2023: From Zero to ..</h5> </a>
                                        <h6> Dr.Angela</h6>
                                    </Typography>
                                    <Typography >
                                        <Stack direction="row" >
                                            <h6>4.7</h6><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarHalfIcon fontSize='small' /> <h6>(277,866)</h6>
                                        </Stack>
                                        <h6>Price</h6>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div></SwiperSlide>







                </Swiper>
            </Box>
        </Container>
    )
}
