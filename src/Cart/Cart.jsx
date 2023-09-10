import React from 'react';
import './Cart.css'
const Cart = ({ buyPlayer }) => {

    console.log(buyPlayer)
    let totalPrice = 0;
    for (const player of buyPlayer) {
        totalPrice = totalPrice + player.player_price
    }
    // console.log(buyPlayer) 
    return (
        <div className='cart-container'>
            <h1>Summery</h1>
            <h4>Total Player: {buyPlayer.length} </h4>
            <h2>Total: ${totalPrice}</h2>
        </div>
    );
};

export default Cart;