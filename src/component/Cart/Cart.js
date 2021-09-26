import React from 'react';
import './Cart.css'

const Cart = (receive) => {
    console.log(receive)
    const {cart} = receive
    let pick = []
    let payment = 0
    for(const ceo of cart){
        pick += ceo.name
        payment += ceo.salary
    }
    return (
        <div className='cart'>
            <h4>Your PIck: {cart.length}</h4>
            <h4>Payment: ${payment} </h4>
            <p>{pick}</p>
    
        </div>
    );
};

export default Cart