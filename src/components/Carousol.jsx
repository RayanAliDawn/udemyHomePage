import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import carousal1 from '../assets/carousal1.jpeg';
import carousal2 from '../assets/carousal2.jpg';
import { Box, Button } from '@mui/material';
import styled from '@emotion/styled';
import SearchIcon from '@mui/icons-material/Search';

export default function Carousol() {
    const Buttonn = styled('Button')({
        color: 'white',
        background: 'black',
        fontWeight: '800',
        position: 'relative',
        alignItems: 'center',
        border: 'none',
        cursor: 'pointer',
        display: 'inline-flex',
        padding: ' 8px ',
        justifyContent: 'center',
        WebkitUserSelect: 'none',
        verticalAlign: 'bottom',
        whiteSpace: 'nowrap',
        display: 'block',

        marginTop: '0.8rem',
        marginLeft: '1rem',
        fontSize: '10px'




    });
    const ButtonForCarousalImage = styled('Button')({
        color: 'white',
        background: 'black',
        fontWeight: '700',
        position: 'relative',
        alignItems: 'center',
        border: 'none',
        cursor: 'pointer',
        display: 'inline-flex',
        width: '8rem',
        padding: ' 0 1.2rem',
        justifyContent: 'center',
        WebkitUserSelect: 'none',
        verticalAlign: 'bottom',
        whiteSpace: 'nowrap',
        height: '2.8rem',
        display: 'block',
        marginTop: '0.3rem'







    });
    const ButtonForSearch = styled('Button')({
        fontFamily: 'udemy sans,sf pro text,-apple-system,BlinkMacSystemFont,Roboto,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol ',
        fontWeight: '400',
        padding: '2px ',
        backgroundColor: 'white',
        border: '1px solid black',
        marginTop: '0.9rem',
        color: '#6a6f73',
        fontSize: '10px', marginLeft: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        padding: '4px',
        width: '50vw'



    });
    return (
        <>
            <Box sx={{ marginTop: { xs: '3.5rem', xss: '1rem' }, display: { xs: 'none', sm: 'block' }, height: 'auto', maxWidth: '1350px', margin: '0 auto' }}>

                <Swiper modules={[Navigation]} loop={true}
                    autoplay={{
                        delay: 7000,
                        disableOnInteraction: false
                    }} spaceBetween={0} speed={10}
                    slidesPerView={1} navigation
                >

                    <div className="swiper-wrapper">

                        <SwiperSlide className=" container">
                            <img src={carousal1} alt="Snow" />

                            <div className="centered"><h2 >Unlock the power of your people</h2><p >Udemy Business is trusted by 12.5K+ companies around the world. Find out what we can do for yours.</p>
                                <ButtonForCarousalImage >Request a demo </ButtonForCarousalImage></div>
                        </SwiperSlide>
                        <SwiperSlide className=" container">
                            <img src={carousal2} alt="Snow" />

                            <div className="centered"><h2 className='Alignstart'>Learning that gets you</h2><p className='Alignstart'>Skills for your present (and your future). Get started with us.</p>
                            </div>
                        </SwiperSlide>

                    </div>


                </Swiper >
            </Box>
            <Box sx={{ display: { xs: 'block', sm: 'none' } }} >
                <Swiper modules={[]} loop={true}
                    autoplay={{
                        delay: 7000,
                        disableOnInteraction: false
                    }} spaceBetween={0} speed={5}
                    slidesPerView={1}
                >

                    <div className="swiper-wrapper">

                        <SwiperSlide className=" container">
                            <img src={carousal1} alt="Snow" />
                            <div className='CrousalContent'>
                                <h3 >Unlock the power of your people</h3><p >Udemy Business is trusted by 12.5K+ companies around the world. Find out what we can do for yours.</p>
                                <Buttonn >Request a demo </Buttonn>
                                <ButtonForSearch  >What do you want to learn <SearchIcon /></ButtonForSearch>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide className=" container">
                            <img src={carousal2} alt="Snow" />
                            <div className='CrousalContent'>
                                <h3 >Unlock the power of your people</h3><p >Udemy Business is trusted by 12.5K+ companies around the world. Find out what we can do for yours.</p>
                                <ButtonForSearch className='hi'>What do you want to learn  <SearchIcon /></ButtonForSearch>
                            </div>

                        </SwiperSlide>

                    </div>


                </Swiper >
            </Box>
        </>
    )
}
