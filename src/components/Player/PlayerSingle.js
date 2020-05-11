import React from 'react'

export default function PlayerSingle({player}) {
    return (
        <div className="row">
        <div className="col s12">
          <div className="card">
            <div className="card-image">
              <img src="cat.jpeg" alt="it's a cat"/>
              <span className="card-title">{player.firstName} {player.lastName}</span>
            </div>
            <div className="card-content">
              <p>Email: {player.email}</p>
            </div>
            <div className="card-action">
              <p>This is a card</p>
            </div>
          </div>
        </div>
      </div>
    )
}
