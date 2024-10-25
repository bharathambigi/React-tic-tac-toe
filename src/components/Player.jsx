import { useState } from "react";

export default function Player({initialName, symbol, isActive, onChangeName}) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    function handleEditClick() {
        setIsEditing((editing) => !editing); //best practice
        //setIsEditing(!isEditing) // Not recomemded    
        if(isEditing) {
            onChangeName(symbol, playerName);
        }
    }

    function handleChange(event) {
        console.log(event);
        setPlayerName(event.target.value);

    }

    let editedPlayer = <span className="player-name">{playerName}</span>;

    if(isEditing) {
        editedPlayer = <input type="text" required  value={playerName} onChange={handleChange} />
    }

    return(
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {editedPlayer}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}