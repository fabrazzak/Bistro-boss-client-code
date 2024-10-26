import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";
import quote from '../../../assets/home/qoute.png'

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

const Testimonials = () => {
    return (
        <div className='md:w-4/6 mx-auto my-10'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                <SwiperSlide>
                    <div className='flex flex-col justify-center items-center content-center w-4/6 mx-auto py-5 gap-5'>
                        <ReactStars
                            count={5}
                            value={5}
                            size={38}
                            activeColor="#ca8a04"
                        />
                        <img className='w-16 h-16' src={quote} alt="quote" />
                        <p>"This platform has transformed my workflow. Everything I need is in one place, making my tasks a breeze!"</p>
                        <h2 className='text-2xl text-yellow-600'>SAMUEL SMITH</h2>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='flex flex-col justify-center items-center content-center w-4/6 mx-auto py-5 gap-5'>
                        <ReactStars
                            count={5}
                            value={3}
                            size={38}
                            activeColor="#ca8a04"
                        />
                        <img className='w-16 h-16' src={quote} alt="quote" />
                        <p>"Good service but needs a few improvements. The customer support was helpful, though!"</p>
                        <h2 className='text-2xl text-yellow-600'>ANNA WHITE</h2>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='flex flex-col justify-center items-center content-center w-4/6 mx-auto py-5 gap-5'>
                        <ReactStars
                            count={5}
                            value={4}
                            size={38}
                            activeColor="#ca8a04"
                        />
                        <img className='w-16 h-16' src={quote} alt="quote" />
                        <p>"I’ve seen a significant boost in productivity since using this tool. It's a game-changer!"</p>
                        <h2 className='text-2xl text-yellow-600'>DAVID LEE</h2>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='flex flex-col justify-center items-center content-center w-4/6 mx-auto py-5 gap-5'>
                        <ReactStars
                            count={5}
                            value={2}
                            size={38}
                            activeColor="#ca8a04"
                        />
                        <img className='w-16 h-16' src={quote} alt="quote" />
                        <p>"Not entirely satisfied. There are some issues, but it has potential to improve."</p>
                        <h2 className='text-2xl text-yellow-600'>JESSICA KIM</h2>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='flex flex-col justify-center items-center content-center w-4/6 mx-auto py-5 gap-5'>
                        <ReactStars
                            count={5}
                            value={4}
                            size={38}
                            activeColor="#ca8a04"
                        />
                        <img className='w-16 h-16' src={quote} alt="quote" />
                        <p>"Highly recommended! The ease of use and the efficiency are unmatched."</p>
                        <h2 className='text-2xl text-yellow-600'>ROBERT BROWN</h2>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='flex flex-col justify-center items-center content-center w-4/6 mx-auto py-5 gap-5'>
                        <ReactStars
                            count={5}
                            value={5}
                            size={38}
                            activeColor="#ca8a04"
                        />
                        <img className='w-16 h-16' src={quote} alt="quote" />
                        <p>"Fantastic experience! It’s amazing how seamlessly everything works together."</p>
                        <h2 className='text-2xl text-yellow-600'>EMMA WILLIAMS</h2>
                    </div>
                </SwiperSlide>

            </Swiper>


        </div>
    );
};

export default Testimonials;