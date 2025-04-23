import React, { useState } from 'react';
import Doctor from './Doctor';

const Doctors = ({ doctorsData }) => {

    const [showAll, setShowAll] = useState(false);
    const visibleDoctors = showAll ? doctorsData : doctorsData.slice(0, 6);

    return (
        <div className='py-16 px-4 md:px-24'>
            <div className='p-8 md:max-w-2/3 mx-auto'>
                <h1 className='text-2xl md:text-4xl font-semibold text-center'>Our Best Doctors</h1>
                <p className='py-4 text-center'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    visibleDoctors.map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}
                    ></Doctor>)
                }
            </div>
            <div className='flex justify-center'>
                <button onClick={() => setShowAll(!showAll)} className='btn btn-primary mx-auto px-16 text-xl'>{showAll ? 'Hide' : 'showAll'}</button>
            </div>
        </div>
    );
};

export default Doctors;