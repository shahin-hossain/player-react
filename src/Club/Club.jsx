import React, { useEffect, useState } from 'react';
import Players from '../Players/Players';
import Cart from '../Cart/Cart';
import './Club.css'
import { getDataFromDB, setDataToDb } from '../Utilities/FakeDb';

const Club = () => {
    const [players, setPlayers] = useState([]);
    const [buyPlayer, setBuyPlayer] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])



    const cartHandle = (id) => {
        const addedPlayer = players.find(player => player.player_id === id);

        const oldPlayer = buyPlayer.find(player => player.player_id === id)
        if (oldPlayer === addedPlayer) {
            return alert('This Player Already Added')
        }

        setBuyPlayer([...buyPlayer, addedPlayer])
        setDataToDb(id)
    }

    useEffect(() => {
        const storedCart = getDataFromDB();
        const savedCart = [];
        for (const playerId in storedCart) {

            const storedPlayer = players.find(player => player.player_id === playerId);
            if (storedPlayer) {
                savedCart.push(storedPlayer)
                setBuyPlayer(savedCart)
            }

        }
        // setBuyPlayer(savedCart)
    }, [players])


    // console.log(buyPlayer)
    return (
        <div className='club-container'>
            <div className='players-container'>
                {players.map(player => <Players player={player} key={player.player_id} cartHandle={cartHandle}></Players>)}
            </div>
            <div>
                <Cart buyPlayer={buyPlayer}></Cart>
            </div>
        </div>
    );
};

export default Club;