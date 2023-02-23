import React from 'react';
import watch from '../../../assets/images/watch.png'
import appointment from '../../../assets/images/gradient1.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
        <div className="hero h-full mt-[100px] max-w-[1100px] mx-auto" style={{ backgroundImage: `url(${watch})` }}>
            <div className="w-[100%] h-[100%]"><img src={appointment} alt="" /></div>
            <div className="mr-[45%] text-neutral-content">
                <div className="">
                    <h1 className="mb-5 text-5xl text-white font-bold">Awlays keep a positive <br /> mindset</h1>
                    <button className="btn  border-none btn-warning w-[169px] h-[64px] text-primary font-bold  bg-white">Call Now</button>
                </div>
            </div>
        </div>
    );
};

export default MakeAppointment;