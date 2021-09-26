import React from 'react';

const CartName = (receive) => {
    console.log(receive)
    return (
        <div>
            <p>{receive.name}</p>
        </div>
    );
};

export default CartName;