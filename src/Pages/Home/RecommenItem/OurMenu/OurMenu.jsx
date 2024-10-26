import React from 'react';
import img from "../../../../assets/home/featured.jpg"
import SectionHeading from '../../../../Component/SectionHading/SectionHeading';


const OurMenu = () => {
    return (
        <div className='relative'>
            <div className=' hero  bg-fixed' style={{
                backgroundImage: `url(${img})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className='hero-content text-neutral-content text-center  py-28 flex flex-col'>
                    <SectionHeading heading='From Our Menu' subheading='Check it out'></SectionHeading>
                    <div className="hero  ">
                        <div className="grid md:grid-cols-2 md:gap-10 content-center items-center">
                            <img
                                src={img}
                                className="rounded-lg shadow-2xl" />
                            <div className='text-start '>
                                <h3 className="text-xl font-bold">March 20,2024</h3>
                                <h3 className="text-xl font-bold uppercase">where can i get some?</h3>
                                <p className="py-3">
                                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                                </p>
                                <button className="btn btn-outline text-white border-0 border-b-2 border-white">Read More</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default OurMenu;