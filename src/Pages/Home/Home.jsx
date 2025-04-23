import React, { Suspense } from 'react';
import Banner from '../../components/Header/Banner';
import { useLoaderData } from 'react-router';
import Doctors from '../Doctors/Doctors';

const Home = () => {
    
    const doctorsData = useLoaderData();
    
    return (
        <div className='bg-[#EFEFEF]'>
            <Banner></Banner>
            <Suspense fallback={<span>Loading..........</span>}>
                <Doctors doctorsData={doctorsData}></Doctors>
            </Suspense>
        </div>
    );
};

export default Home;