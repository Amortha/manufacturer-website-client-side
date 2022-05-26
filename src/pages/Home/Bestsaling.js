import React, { useEffect, useState } from 'react';

const Bestsaling = () => {
        const [bestsaling, setBastsaling] = useState([]);
        useEffect(()=>{
            fetch('Bestsaling.json')
            .then(res => res.json())
            .then(data => setBastsaling(data))
        }, [])
    return (
        <div>
        <h2 className="text-3xl text-center font-bold my-5 text-primary">Our Parts</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
        {
                    bestsaling.map(bastsaling =><Bestsaling></Bestsaling>)
                }
        </div>
    </div>
    );
};

export default Bestsaling;
