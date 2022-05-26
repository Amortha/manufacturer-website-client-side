import React from 'react';

const Bestsaling = () => {
        const [bestsaling, setBastsaling] = useState([]);
        useEffect(()=>{
            fetch('Bestsaling.json')
            .then(res => res.json())
            .then(data => setBastsaling(data))
        }, [])
    return (
        <div>
            
        </div>
    );
};

export default Bestsaling;
