import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Python from '../assets/python.webp';
import Stack from '@mui/material/Stack';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import ExcelImg from '../assets/Excel.jpg'
import WebImg from '../assets/WebImg.png'
import Container from '@mui/material/Container';

import JavaScript from '../assets/JavaScript.png'

// Import Swiper styles
import 'swiper/css';
export default function CardBox() {
    return (
        <Container sx={{ border: '1px solid #A8A8A8', padding: '3rem', marginY: '2.5%' }} >
            <Box >
                <Box sx={{ display: { xs: 'none', ssm: 'block' } }}>
                    <h2 className='CardBoxInner'>Expand your career opportunities with Python</h2>
                    <p className='CardBoxInner'>Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to</p>
                    <Button sx={{ color: 'black', border: '1px solid black', borderRadius: '0%', marginTop: '2rem' }}><h3>Explore Python</h3></Button>
                </Box>
                <Swiper className='CardBoxInner' breakpoints={{

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
                    modules={[Navigation]} loop={true}


                    navigation
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>  <div>
                        <Card sx={{ maxWidth: 345, boxShadow: 'none', maxHeight: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={Python}
                                    alt="green iguana"
                                />
                                <CardContent>

                                    <Typography sx={{ letterSpacing: '0.1px', lineHeight: '1.2' }}>
                                        <a> <h5>The Complete Python Bootcamp From Zero to ..</h5> </a>
                                        <h6> Jose Portilla</h6>
                                    </Typography>
                                    <Typography  >
                                        <Stack direction="row" >
                                            <h5>4.6</h5><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarHalfIcon fontSize='small' /> <p>(123,321)</p>
                                        </Stack>
                                        <h5>Price</h5>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div></SwiperSlide>
                    <SwiperSlide> <div>
                        <Card sx={{ maxWidth: 345, boxShadow: 'none', maxHeight: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={Python}
                                    alt="green iguana"
                                />
                                <CardContent>

                                    <Typography sx={{ letterSpacing: '0.1px', lineHeight: '1.2' }}>
                                        <a> <h5>The Complete Python Bootcamp From Zero to ..</h5> </a>
                                        <h6> Jose Portilla</h6>
                                    </Typography>
                                    <Typography >
                                        <Stack direction="row" >
                                            <h5>4.6</h5><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarHalfIcon fontSize='small' /> <p>(123,321)</p>
                                        </Stack>
                                        <h5>Price</h5>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div></SwiperSlide>
                    <SwiperSlide>  <div>
                        <Card sx={{ maxWidth: 345, boxShadow: 'none', maxHeight: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={Python}
                                    alt="green iguana"
                                />
                                <CardContent>

                                    <Typography sx={{ letterSpacing: '0.1px', lineHeight: '1.2' }}>
                                        <a> <h5>The Complete Python Bootcamp From Zero to ..</h5> </a>
                                        <h6> Jose Portilla</h6>
                                    </Typography>
                                    <Typography >
                                        <Stack direction="row" >
                                            <h5>4.6</h5><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarHalfIcon fontSize='small' /> <p>(123,321)</p>
                                        </Stack>
                                        <h5>Price</h5>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div></SwiperSlide>
                    <SwiperSlide><div>
                        <Card sx={{ maxWidth: 345, boxShadow: 'none', maxHeight: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={Python}
                                    alt="green iguana"
                                />
                                <CardContent>

                                    <Typography sx={{ letterSpacing: '0.1px', lineHeight: '1.2' }}>
                                        <a> <h5>The Complete Python Bootcamp From Zero to ..</h5> </a>
                                        <h6> Jose Portilla</h6>
                                    </Typography>
                                    <Typography >
                                        <Stack direction="row" >
                                            <h5>4.6</h5><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarHalfIcon fontSize='small' /> <p>(123,321)</p>
                                        </Stack>
                                        <h5>Price</h5>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div></SwiperSlide>
                    <SwiperSlide> <div>
                        <Card sx={{ maxWidth: 345, boxShadow: 'none', maxHeight: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={Python}
                                    alt="green iguana"
                                />
                                <CardContent>

                                    <Typography sx={{ letterSpacing: '0.1px', lineHeight: '1.2' }}>
                                        <a> <h5>The Complete Python Bootcamp From Zero to ..</h5> </a>
                                        <h6> Jose Portilla</h6>
                                    </Typography>
                                    <Typography >
                                        <Stack direction="row" >
                                            <h5>4.6</h5><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarHalfIcon fontSize='small' /> <p>(123,321)</p>
                                        </Stack>
                                        <h5>Price</h5>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div></SwiperSlide>
                    <SwiperSlide> <div>
                        <Card sx={{ maxWidth: 345, boxShadow: 'none', maxHeight: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={Python}
                                    alt="green iguana"
                                />
                                <CardContent>

                                    <Typography sx={{ letterSpacing: '0.1px', lineHeight: '1.2' }}>
                                        <a> <h5>The Complete Python Bootcamp From Zero to ..</h5> </a>
                                        <h6> Jose Portilla</h6>
                                    </Typography>
                                    <Typography >
                                        <Stack direction="row" >
                                            <h5>4.6</h5><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarHalfIcon fontSize='small' /> <p>(123,321)</p>
                                        </Stack>
                                        <h5>Price</h5>
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


export function Excel() {
    return (
        <Box sx={{ border: '1px solid #A8A8A8', padding: '3rem', marginY: '2.5%' }}>
            <Box sx={{ display: { xs: 'none', ssm: 'block' } }}>
                <h2 className='CardBoxInner'>Analyze and visualize data with Excel</h2>
                <p className='CardBoxInner'>Take a Microsoft Excel course from Udemy, and learn how to use this industry-standard software. Real-world experts will show you the basics like how to organize data into sheets, rows and columns, and advanced techniques like creating complex dynamic</p>
                <Button sx={{ color: 'black', border: '1px solid black', borderRadius: '0%', marginTop: '2rem' }}><h3>Explore Excel</h3></Button>
            </Box>
            <Swiper className='CardBoxInner' breakpoints={{

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
                modules={[Navigation]} loop={true}
                spaceBetween={50}

                navigation
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>  <div>
                    <Card sx={{ maxWidth: 345, boxShadow: 'none' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={ExcelImg}
                                alt="green iguana"
                            />
                            <CardContent >

                                <Typography sx={{ letterSpacing: '0.1px', lineHeight: '1.2' }} >
                                    <a> <h5 >Ms Excel/Excel 2022 - The Complete Introduction to ..</h5> </a>
                                    <h6> Yassin Marco</h6>
                                </Typography>
                                <Typography >
                                    <Stack direction="row" >
                                        <h5>4.3</h5><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarHalfIcon fontSize='small' /> <h6>(123,321)</h6>
                                    </Stack>
                                    <h5>Price</h5>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div></SwiperSlide>
                <SwiperSlide>  <div>
                    <Card sx={{ maxWidth: 345, boxShadow: 'none' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={ExcelImg}
                                alt="green iguana"
                            />
                            <CardContent >

                                <Typography sx={{ letterSpacing: '0.1px', lineHeight: '1.2' }} >
                                    <a> <h5 >Ms Excel/Excel 2022 - The Complete Introduction to ..</h5> </a>
                                    <h6> Yassin Marco</h6>
                                </Typography>
                                <Typography >
                                    <Stack direction="row" >
                                        <h5>4.3</h5><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarHalfIcon fontSize='small' /> <h6>(123,321)</h6>
                                    </Stack>
                                    <h5>Price</h5>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div></SwiperSlide>
                <SwiperSlide>  <div>
                    <Card sx={{ maxWidth: 345, boxShadow: 'none' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={ExcelImg}
                                alt="green iguana"
                            />
                            <CardContent >

                                <Typography sx={{ letterSpacing: '0.1px', lineHeight: '1.2' }} >
                                    <a> <h5 >Ms Excel/Excel 2022 - The Complete Introduction to ..</h5> </a>
                                    <h6> Yassin Marco</h6>
                                </Typography>
                                <Typography >
                                    <Stack direction="row" >
                                        <h5>4.3</h5><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarHalfIcon fontSize='small' /> <h6>(123,321)</h6>
                                    </Stack>
                                    <h5>Price</h5>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div></SwiperSlide>
                <SwiperSlide>  <div>
                    <Card sx={{ maxWidth: 345, boxShadow: 'none' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={ExcelImg}
                                alt="green iguana"
                            />
                            <CardContent >

                                <Typography sx={{ letterSpacing: '0.1px', lineHeight: '1.2' }} >
                                    <a> <h5 >Ms Excel/Excel 2022 - The Complete Introduction to ..</h5> </a>
                                    <h6> Yassin Marco</h6>
                                </Typography>
                                <Typography >
                                    <Stack direction="row" >
                                        <h5>4.3</h5><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarHalfIcon fontSize='small' /> <h6>(123,321)</h6>
                                    </Stack>
                                    <h5>Price</h5>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div></SwiperSlide>
                <SwiperSlide>  <div>
                    <Card sx={{ maxWidth: 345, boxShadow: 'none' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={ExcelImg}
                                alt="green iguana"
                            />
                            <CardContent >

                                <Typography sx={{ letterSpacing: '0.1px', lineHeight: '1.2' }} >
                                    <a> <h5 >Ms Excel/Excel 2022 - The Complete Introduction to ..</h5> </a>
                                    <h6> Yassin Marco</h6>
                                </Typography>
                                <Typography >
                                    <Stack direction="row" >
                                        <h5>4.3</h5><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarHalfIcon fontSize='small' /> <h6>(123,321)</h6>
                                    </Stack>
                                    <h5>Price</h5>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div></SwiperSlide>
                <SwiperSlide>  <div>
                    <Card sx={{ maxWidth: 345, boxShadow: 'none' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={ExcelImg}
                                alt="green iguana"
                            />
                            <CardContent >

                                <Typography sx={{ letterSpacing: '0.1px', lineHeight: '1.2' }} >
                                    <a> <h5 >Ms Excel/Excel 2022 - The Complete Introduction to ..</h5> </a>
                                    <h6> Yassin Marco</h6>
                                </Typography>
                                <Typography >
                                    <Stack direction="row" >
                                        <h5>4.3</h5><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarHalfIcon fontSize='small' /> <h6>(123,321)</h6>
                                    </Stack>
                                    <h5>Price</h5>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div></SwiperSlide>




            </Swiper>


        </Box>
    )
}



export function Web() {
    return (
        <Box sx={{ border: '1px solid #A8A8A8', padding: '3rem', marginY: '2.5%' }}>
            <Box sx={{ display: { xs: 'none', ssm: 'block' } }}>
                <h2 className='CardBoxInner'>Build websites and applications with Web Development</h2>
                <p className='CardBoxInner'>The world of web development is as wide as the internet itself. Much of our social and vocational lives play out on the internet, which prompts new industries aimed at creating, managing, and debugging the websites and applications that we increasingly rely on...</p>
                <Button sx={{ color: 'black', border: '1px solid black', borderRadius: '0%', marginTop: '2rem' }}><h3>Explore Web Development</h3></Button>
            </Box>
            <Swiper className='CardBoxInner'
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
                modules={[Navigation]} loop={true}
                spaceBetween={50}

                navigation
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>  <div>
                    <Card sx={{ maxWidth: 345, boxShadow: 'none' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={WebImg}
                                alt="green iguana"
                            />
                            <CardContent >

                                <Typography sx={{ letterSpacing: '0.1px', lineHeight: '1.2' }}>
                                    <a> <h5 >The Complete 2023 Web Development Bootcamp</h5> </a>
                                    <h6> Dr.Angela</h6>
                                </Typography>
                                <Typography >
                                    <Stack direction="row" >
                                        <h5>4.7</h5><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarHalfIcon fontSize='small' /> <h6>(277,866)</h6>
                                    </Stack>
                                    <h5>Price</h5>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div></SwiperSlide>
                <SwiperSlide>  <div>
                    <Card sx={{ maxWidth: 345, boxShadow: 'none' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={WebImg}
                                alt="green iguana"
                            />
                            <CardContent >

                                <Typography sx={{ letterSpacing: '0.1px', lineHeight: '1.2' }}>
                                    <a> <h5 >The Complete 2023 Web Development Bootcamp</h5> </a>
                                    <h6> Dr.Angela</h6>
                                </Typography>
                                <Typography >
                                    <Stack direction="row" >
                                        <h5>4.7</h5><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarHalfIcon fontSize='small' /> <h6>(277,866)</h6>
                                    </Stack>
                                    <h5>Price</h5>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div></SwiperSlide>
                <SwiperSlide>  <div>
                    <Card sx={{ maxWidth: 345, boxShadow: 'none' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={WebImg}
                                alt="green iguana"
                            />
                            <CardContent >

                                <Typography sx={{ letterSpacing: '0.1px', lineHeight: '1.2' }}>
                                    <a> <h5 >The Complete 2023 Web Development Bootcamp</h5> </a>
                                    <h6> Dr.Angela</h6>
                                </Typography>
                                <Typography >
                                    <Stack direction="row" >
                                        <h5>4.7</h5><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarHalfIcon fontSize='small' /> <h6>(277,866)</h6>
                                    </Stack>
                                    <h5>Price</h5>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div></SwiperSlide>
                <SwiperSlide>  <div>
                    <Card sx={{ maxWidth: 345, boxShadow: 'none' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={WebImg}
                                alt="green iguana"
                            />
                            <CardContent >

                                <Typography sx={{ letterSpacing: '0.1px', lineHeight: '1.2' }}>
                                    <a> <h5 >The Complete 2023 Web Development Bootcamp</h5> </a>
                                    <h6> Dr.Angela</h6>
                                </Typography>
                                <Typography >
                                    <Stack direction="row" >
                                        <h5>4.7</h5><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarHalfIcon fontSize='small' /> <h6>(277,866)</h6>
                                    </Stack>
                                    <h5>Price</h5>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div></SwiperSlide>
                <SwiperSlide>  <div>
                    <Card sx={{ maxWidth: 345, boxShadow: 'none' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={WebImg}
                                alt="green iguana"
                            />
                            <CardContent >

                                <Typography sx={{ letterSpacing: '0.1px', lineHeight: '1.2' }}>
                                    <a> <h5 >The Complete 2023 Web Development Bootcamp</h5> </a>
                                    <h6> Dr.Angela</h6>
                                </Typography>
                                <Typography >
                                    <Stack direction="row" >
                                        <h5>4.7</h5><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarHalfIcon fontSize='small' /> <h6>(277,866)</h6>
                                    </Stack>
                                    <h5>Price</h5>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div></SwiperSlide>
                <SwiperSlide>  <div>
                    <Card sx={{ maxWidth: 345, boxShadow: 'none' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={WebImg}
                                alt="green iguana"
                            />
                            <CardContent >

                                <Typography sx={{ letterSpacing: '0.1px', lineHeight: '1.2' }}>
                                    <a> <h5 >The Complete 2023 Web Development Bootcamp</h5> </a>
                                    <h6> Dr.Angela</h6>
                                </Typography>
                                <Typography >
                                    <Stack direction="row" >
                                        <h5>4.7</h5><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarIcon fontSize='small' /><StarHalfIcon fontSize='small' /> <h6>(277,866)</h6>
                                    </Stack>
                                    <h5>Price</h5>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div></SwiperSlide>






            </Swiper>


        </Box>
    )
}



export function JavaScriptButton() {
    return (
        <Box sx={{ border: '1px solid #A8A8A8', padding: '3rem', marginY: '2.5%' }}>
            <Box sx={{ display: { xs: 'none', ssm: 'block' } }}>
                <h2 className='CardBoxInner'>Build websites and applications with Web Development</h2>
                <p className='CardBoxInner'>The world of web development is as wide as the internet itself. Much of our social and vocational lives play out on the internet, which prompts new industries aimed at creating, managing, and debugging the websites and applications that we increasingly rely on...</p>
                <Button sx={{ color: 'black', border: '1px solid black', borderRadius: '0%', marginTop: '2rem' }}><h3>Explore Web Development</h3></Button>
            </Box>
            <Swiper className='CardBoxInner'
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
                modules={[Navigation]} loop={true}
                spaceBetween={50}

                navigation
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>  <div>
                    <Card sx={{ maxWidth: 345, boxShadow: 'none' }}>
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
                    <Card sx={{ maxWidth: 345, boxShadow: 'none' }}>
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
                </div></SwiperSlide>  <SwiperSlide>  <div>
                    <Card sx={{ maxWidth: 345, boxShadow: 'none' }}>
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
                </div></SwiperSlide>  <SwiperSlide>  <div>
                    <Card sx={{ maxWidth: 345, boxShadow: 'none' }}>
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
                </div></SwiperSlide>  <SwiperSlide>  <div>
                    <Card sx={{ maxWidth: 345, boxShadow: 'none' }}>
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
                </div></SwiperSlide>  <SwiperSlide>  <div>
                    <Card sx={{ maxWidth: 345, boxShadow: 'none' }}>
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
    )
}
