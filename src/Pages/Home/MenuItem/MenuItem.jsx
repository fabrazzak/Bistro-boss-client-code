import React, { useEffect, useState } from 'react';
import PopularMenu from './PopularMenu';

const MenuItem = () => {

    const [menus, setMenus]=useState([]);
    useEffect(()=>{

        fetch('/menu.json')
        .then(res => res.json())
        .then(data => {
           const popularMenus = data.filter(menu => menu.category == 'popular')          

            setMenus(popularMenus)
        })

    },[])
    console.log(menus)
    return (
        <div>
            <div className='grid md:grid-cols-2 gap-10 mx-5 my-10'>

                {menus.map(menu => <PopularMenu menu={menu} key={menu._id}></PopularMenu>)}

            </div>

            <div className='flex mx-auto items-center mb-10'>
                <button className='uppercase btn btn-active  mx-auto border-black border-b-4 border-0'>View full menu</button>
            </div>
            
        </div>
    );
};

export default MenuItem;