import React from 'react';
import img from '../../../assets/home/chef-service.jpg'

const BistroBoss = () => {
    return (
        <div className='my-10'>
            <div
                className="hero "
                style={{
                    backgroundImage: `url(${img})`,
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center  py-28 ">
                    <div className="  bg-white text-black p-16 rounded-lg">
                        <h1 className="mb-5 text-5xl font-bold">Bistro Boss</h1>
                        <p className="mb-5 w-4/6 text-center mx-auto">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                       
                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default BistroBoss;