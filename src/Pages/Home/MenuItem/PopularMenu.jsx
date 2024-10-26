import React from 'react';

const PopularMenu = ({menu}) => {
    const { _id, price, category, image, recipe, name }=menu;
    return (
        <div className='flex gap-5 content-center items-center'>
            <img className='w-28 h-28 border' style={{borderRadius:"0px 100px 100px 100px"}} src={image} alt="menu-img" />
            <div className='flex flex-col gap-5'>
                <div className='flex justify-between'>
                    <h3 className='text-2xl font-semibold'>{name}---------</h3>
                    <p className='text-yellow-600 font-semibold'>${price}</p>
                </div>
                <p>{recipe}</p>
            </div>
            
            
        </div>
    );
};

export default PopularMenu;