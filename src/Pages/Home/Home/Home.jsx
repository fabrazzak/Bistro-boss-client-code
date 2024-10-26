import React from 'react';
import Banner from '../Banner/Banner';
import SectionHeading from '../../../Component/SectionHading/SectionHeading';
import ItemSlider from '../ItemSlider/ItemSlider';
import BistroBoss from '../BistroBoss/BistroBoss';
import MenuItem from '../MenuItem/MenuItem';
import CallUs from '../CallUs/CallUs';
import RecommendItem from '../RecommenItem/RecommendItem';
import OurMenu from '../RecommenItem/OurMenu/OurMenu';
import Testimonials from '../Testimonials/Testimonials';



const Home = () => {
    return (
        <div>
          
          <Banner></Banner>

          <div className='container mx-auto '>

          <SectionHeading subheading='Form 11:00am to 10:00pm ' heading='Order Online'></SectionHeading>
          <ItemSlider></ItemSlider>
          <BistroBoss></BistroBoss>
          <SectionHeading subheading='Check it out' heading='From our menu'></SectionHeading>
          <MenuItem></MenuItem>
          <CallUs></CallUs>
          <SectionHeading subheading='Should Try' heading='Chef Recommends'></SectionHeading>
          <RecommendItem></RecommendItem>
          <OurMenu></OurMenu>
          <SectionHeading subheading='What Our Clients Say' heading='Testimonials'></SectionHeading>
          <Testimonials></Testimonials>
          </div>
            
        </div>
    );
};

export default Home;