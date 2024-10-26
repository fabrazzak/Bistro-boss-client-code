import React from 'react';

const SectionHeading = ({ subheading , heading}) => {
    return (
        <div className='flex flex-col justify-center items-center gap-5 my-10'>

            <p className='text-yellow-600'>--- {subheading} ---</p>
            <h2 className='text-4xl  uppercase border-t-2 border-b-2 py-5 '>{heading}</h2>
            
        </div>
    );
};

export default SectionHeading;