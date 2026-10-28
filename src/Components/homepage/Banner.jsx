import React from 'react';
import bookimg from '../../assets/hero_img.jpg'
const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-[70vh] rounded-2xl my-8 container mx-auto mt-25">
                <div className="hero-content flex-col lg:flex-row-reverse w-full gap-70">
                    <img
                    alt="Tailwind CSS hero component"
                    src={bookimg}
                    className="max-w-sm rounded-lg shadow-2xl w-70 h-auto"
                    />
                    <div className='space-y-10'>
                        <h1 className="text-5xl font-bold">Books to freshen up <br/> your bookshelf</h1>
                        
                        <button className="btn btn-success">View the list</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;