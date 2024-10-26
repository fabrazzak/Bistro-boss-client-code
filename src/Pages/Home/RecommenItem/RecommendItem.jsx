import React from 'react';

const RecommendItem = () => {
    return (
        <div className='mx-5'>
            <div className='grid md:grid-cols-3 gap-10 my-10'>
                <div className="card card-compact bg-base-100  shadow-xl">
                    <figure>
                        <img className="w-full"
                            src="https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-4-370x247.jpg"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Roast Duck Breast</h2>
                        <p>Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-active text-yellow-700 border-0 border-b-4 border-yellow-700 ">Add To Cart</button>
                        </div>
                    </div>
                </div>
                 {/* 2nd card  */}
                 <div className="card card-compact bg-base-100  shadow-xl">
                    <figure>
                        <img className="w-full"
                            src="https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-1-370x247.jpg"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Fish Parmentier</h2>
                        <p>Sautéed breaded veal escalope with watercress, lemon and veal jus.</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-active bg-black text-yellow-700 border-0 ">Add To Cart</button>
                        </div>
                    </div>
                </div> 
                {/* 3rd cart  */}
                <div className="card card-compact bg-base-100  shadow-xl">
                    <figure>
                        <img className="w-full"
                            src="https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-3-370x247.jpg"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Chicken and Walnut Salad</h2>
                        <p>Pan roasted pork belly with gratin potato, braised Savoy cabbage, apples, thyme and calvados jus</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-active text-yellow-700 border-0 border-b-4 border-yellow-700 ">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default RecommendItem;