import React from 'react';
import person from '../../../assets/images/person.png';
import { AiOutlineCheck } from 'react-icons/ai';
const InfoCards = () => {


    return (
        <div className="hero mt-32">
            <div className="hero-content flex-col gap-24 lg:flex-row">
                <img src={person} className="" alt='' />
                <div className='mt-36'>
                    <h1 className="text-5xl font-bold">My failures of <br />
                        previous year</h1>
                    <p className="py-6 text-lg mt-4">Contrary to popular belief, Lorem Ipsum is not <br /> simply random text. It has roots in a piece of <br />
                        classical Latin literature from 45 BC, making it
                        over <br /> 2000 years old. Richard McClintock.</p>
                    <div className=''>
                        <p className='flex items-center text-lg'><AiOutlineCheck className=' text-accent font-bold w-8 h-8 mr-4' />Contrary to popular belief, is not simply.</p>
                        <p className=' flex items-center text-lg'><AiOutlineCheck className=' text-accent font-bold w-8 h-8 mr-4' />Contrary to popular belief.</p>
                        <p className=' flex items-center text-lg'><AiOutlineCheck className=' text-accent font-bold w-8 h-8 mr-4' />Contrary to popular , is not simply.</p>
                        <p className=' flex items-center text-lg'><AiOutlineCheck className=' text-accent font-bold w-8 h-8 mr-4' />Contrary to popular belief, is not simply.</p>
                        <p className=' flex items-center text-lg'><AiOutlineCheck className=' text-accent font-bold w-8 h-8 mr-4' />Contrary to popular belief</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default InfoCards;