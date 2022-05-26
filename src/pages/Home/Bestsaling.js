import React, { useEffect, useState } from 'react';
import Bastsaling from '../Home/Bestsaling'
const Bestsaling = () => {
        const [bestsaling, setBestsalings] = useState([]);
        useEffect(()=>{
            fetch('Bestsaling.json')
            .then(res => res.json())
            .then(data => setBestsalings(data))
        }, [])
    return (
        <div>
        <h2 className="text-3xl text-center font-bold my-5 text-primary">this is </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
        {
                    bestsaling.map(bastsaling =><Bastsaling></Bastsaling>)
                }
        </div>
    </div>
    );
};

export default Bestsaling;
