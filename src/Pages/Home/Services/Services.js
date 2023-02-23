import React from 'react';
import web from '../../../assets/icons/web.png'
import js from '../../../assets/icons/js.png'
import smoke from '../../../assets/icons/smoke.png'
import ecom from '../../../assets/icons/ecom.png'
import Service from './Service';

const Services = () => {

    const servicesData = [
        {
            id: 1,
            name: 'Web Development',
            description: 'I want to start',
            img: web
        },
        {
            id: 2,
            name: 'Javascript',
            description: 'I want to start',
            img: js
        },
        {
            id: 3,
            name: 'Smoking Habit',
            description: 'I want to start',
            img: smoke
        },
        {
            id: 4,
            name: 'commerce',
            description: 'I want to start',
            img: ecom
        },
    ]

    return (
        <div className='mt-16 '>
            <div className='text-center '>
                <h3 className='text-3xl font-bold '>My Plans</h3>
            </div>
            <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[1100px] mx-auto'>
                {
                    servicesData.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;