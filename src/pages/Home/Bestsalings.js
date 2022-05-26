import React from 'react';



const Bastsalings = (props) => {
    const {  name, image, } = props.product;
    return (
        <div className="col">
            <div className="card product-style">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h3 className="card-title fw-bolder">{name}</h3>
    
            
                
                </div>
            </div>
        </div>
    );
};

export default Bastsalings;