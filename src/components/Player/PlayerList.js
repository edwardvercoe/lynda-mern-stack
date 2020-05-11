import React from 'react'

export default function PlayerList({players, updateCurrentPlayer}) {
    const showPlayers =  players.map((item) => (
        <a href="#!" className="collection-item" key={item._id} onClick={updateCurrentPlayer.bind(this,item)}>{item.firstName} {item.lastName}</a>
    ))
    return (
        <div>
            <ul className="collection with-header">
                <li className="collection-header"><h4>Players</h4></li>
                {showPlayers}
            </ul>
        </div>
    )
}
