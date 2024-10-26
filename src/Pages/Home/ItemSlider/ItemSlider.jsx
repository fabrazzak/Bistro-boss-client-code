import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'

const ItemSlider = () => {
    return (
        <div  className='my-10'>
            
            <Swiper
                slidesPerView={5}
                spaceBetween={10}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className='relative'>
                    <img src={ slide1 } alt="" />
                    <h2 className='text-3xl text-slate-50 font-bold uppercase absolute bottom-8 left-[25%]   '>Salads</h2>

                </SwiperSlide>

                <SwiperSlide><img src={ slide2 } alt="" />
                    <h2 className='text-3xl text-slate-50 font-bold uppercase absolute bottom-8 left-[25%]   '>soups</h2>
                </SwiperSlide>

                <SwiperSlide><img src={slide3} alt="" />
                <h2 className='text-3xl text-slate-50 font-bold uppercase absolute bottom-8 left-[25%]   '>Pizzas</h2>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={ slide4 } alt="" />
                    <h2 className='text-3xl text-slate-50 font-bold uppercase absolute bottom-8 left-[25%]   '>Deserts</h2>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={ slide5 } alt="" />
                    <h2 className='text-3xl text-slate-50 font-bold uppercase absolute bottom-8 left-[25%]   '>Salads</h2>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h2 className='text-3xl text-slate-50 font-bold uppercase absolute bottom-8 left-[25%]   '>Salads</h2>
                    </SwiperSlide>

                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h2 className='text-3xl text-slate-50 font-bold uppercase absolute bottom-8 left-[25%]   '>Soups</h2>
                    </SwiperSlide>
            
            </Swiper>
        </div>
    );
};

export default ItemSlider;