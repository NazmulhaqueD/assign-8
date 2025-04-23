import React from 'react';

const Banner = () => {
    return (
        <div className='p-4 md:px-32 py-16 border border-black shadow-sm rounded-2xl'>
            <div className='max-w-[1100px] mx-auto'>
                <div>
                    <h1 className='text-2xl md:text-5xl font-bold text-center'>Dependable Care, Backed by Trusted Professionals.</h1>
                    <p className='py-3 px-10 text-center'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
                    <div className='flex gap-6 my-8'>
                        <input className='border rounded-2xl w-2/3 bg-white' type="text" />
                        <button className='btn bg-[#176AE5] text-white rounded-2xl'>Search Now</button>
                    </div>
                </div>
                <div className='flex gap-6'>
                    <div>
                        <img className='w-full rounded-2xl shad' src="https://i.ibb.co.com/spJgxy7r/banner-img-1.png" alt="" />
                    </div>
                    <div>
                        <img className='w-full rounded-2xl' src="https://i.ibb.co.com/spJgxy7r/banner-img-1.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;