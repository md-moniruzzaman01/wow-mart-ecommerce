import React from 'react';

const Card = ({cardProduct}) => {
    const { picture, title} = cardProduct;
    return (
        <div>
           <div>
            <img src={picture} alt={title} />
            </div> 
        </div>
    );
};

export default Card;