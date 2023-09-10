import React from 'react';
import './Players.css'
const Players = ({ player, cartHandle }) => {
    const { player_id, player_image, player_name, player_price } = player;
    // console.log(player)

    return (
        <div className='player'>
            <img src={player_image} alt="" />
            <h2>{player_name}</h2>
            <h3>Player Id: {player_id}</h3>
            <h2>${player_price}</h2>
            <div>
                <button onClick={() => cartHandle(player_id)} className='btn-player'>Buy Player</button>
            </div>
        </div>

    );
};

export default Players;