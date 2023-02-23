import React from 'react';
import banner2 from '../../../assets/images/banner/banner3.png';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{
            background: `url(${banner2})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',


        }}>
            <div className="text-end ml-[50%]">
                <div>
                    <h1 className="text-8xl text-white  font-bold">All Thinks Are <br /> Possible If You <br />
                        believe</h1>
                    <p className="py-6 text-white text-lg">There are many variations of passages of Lorem Ipsum <br /> available, but the majority have suffered alteration in some <br /> form, by injected humour, or randomised words</p>
                    <button className="btn  border-none btn-warning w-[169px] h-[64px] text-primary font-bold  bg-white">Contact Us</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;