import React from 'react';

const Doctor = ({ doctor }) => {

    const { doctorImage, name, speciality, registrationNumber } = doctor;

    console.log(doctor)
    return (
        <div className='bg-white p-8 rounded-2xl'>
            <div className='grid justify-center'>
                <div>
                    <img className='rounded-2xl w-[350px] h-[250px]' src={doctorImage} alt="" />
                </div>

                <div className='flex gap-6 my-6'>
                    <button className='btn rounded-full text-[#09982F] border-[#09982F]'>Available</button>

                    <button className='btn rounded-full text-[#176AE5] bg-[#cadfff]'>5+ Years Experience</button>
                </div>

                <div className='border-b border-dashed pb-4'>
                    <h1 className='text-2xl font-bold'>{name}</h1>
                    <p className='text-xl py-2'>{speciality}</p>
                </div>

                <div className='my-6'>
                    <p className='text-xl'>{registrationNumber}</p>
                    <button className='text-[#176AE5] btn text-xl border-[#176AE5] w-full rounded-full mt-4'>View Details</button>
                </div>
            </div>

        </div>
    );
};

export default Doctor;