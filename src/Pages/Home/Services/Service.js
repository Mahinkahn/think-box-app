import React from 'react';

const Service = ({ service }) => {
    const { name, description, img } = service;
    return (
        <div className="card">
            <figure className="px-10 pt-10 ">
                <img src={img} alt="Shoes" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl font-bold">{name}</h2>
                <p className='text-xl'>{description}</p>
            </div>
        </div>
    );
};

export default Service;