import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from '@mui/material/Button';
import { Navigation } from 'swiper';
import styled from '@emotion/styled';
import CardBox from './CardBox';
import { Excel } from './CardBox';
import { Web } from './CardBox';
import Container from '@mui/material/Container';
import { JavaScriptButton } from './CardBox';
function CarousalCard() {

    const [param, setParam] = useState(null);
    function handleClick(value) {
        setParam(value);

    }

    const Buttonn = styled(Button)({
        color: 'black',
        cursor: 'pointer',
        fontSize: '12px',
        fontWeight: '700',
        fontFamily: 'sans-serif',
        textTransform: 'capitalize',
        whiteSpace: 'nowrap',

    })
    return (
        <Container sx={{ maxWidth: '1350px' }}>
            <Box  >
                <div>
                    <h2 className='CardBox' >A broad selection of courses</h2>
                    <h4 className='CardBox'>Choose from 213,000 online video courses with new additions published every month</h4>
                </div>
                <div className='CardBox'>
                    <Swiper
                        breakpoints={{

                            0: {
                                spaceBetween: 1,
                                slidesPerView: 3,
                            },

                            500: {
                                spaceBetween: 1,
                                slidesPerView: 4,
                            },
                            600: {
                                spaceBetween: 1,
                                slidesPerView: 5,
                            },
                            750: {
                                spaceBetween: 1,
                                slidesPerView: 6,
                            },
                        }}
                        modules={[Navigation]}
                        navigation

                    >
                        <SwiperSlide onClick={() => handleClick(0)}> <Buttonn  >Excel</Buttonn></SwiperSlide>
                        <SwiperSlide onClick={() => handleClick(1)}> <Buttonn >Python</Buttonn></SwiperSlide>
                        <SwiperSlide onClick={() => handleClick(2)} > <Buttonn >Web Development</Buttonn></SwiperSlide>
                        <SwiperSlide onClick={() => handleClick(3)}><Buttonn >javaScript</Buttonn> </SwiperSlide>
                        <SwiperSlide onClick={() => handleClick(4)}><Buttonn >Data Science</Buttonn> </SwiperSlide>
                        <SwiperSlide onClick={() => handleClick(5)}><Buttonn >AWS Certification</Buttonn> </SwiperSlide>
                        <SwiperSlide onClick={() => handleClick(6)}><Buttonn >Drawing</Buttonn> </SwiperSlide>

                    </Swiper>

                </div>

                <div className='CardBox'>
                    {param === 0 ? (
                        <Excel />
                    ) :
                        param === 1 ? (
                            <CardBox />
                        ) : param === 2 ? (
                            <Web />
                        ) : param === 3 ? (
                            <JavaScriptButton />
                        ) : param === 4 ? (
                            <Excel />
                        ) : param === 5 ? (
                            <Excel />
                        ) : param === 6 ? (
                            <Excel />
                        ) : (
                            <CardBox />
                        )}
                </div>

            </Box>
        </Container>
    )
}

export default CarousalCard