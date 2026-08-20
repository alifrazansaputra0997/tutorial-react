import { useState } from "react";

export default function Player({ initialName, PlayerSymbol, onEdit }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditPlayer, setIsEditPlayer] = useState(false);
  const PlayerInputSpan = isEditPlayer ? (
    <input type="text" required value={playerName} onChange={handleChange}/>
  ) : (
    <span className="player-name">{playerName}</span>
  );
  const buttonCaption = isEditPlayer ? (
    <button onClick={onEditAct}>Save</button>
  ) : (
    <button onClick={onEditAct}>Edit</button>
  );
  const playerSymbolSpan = (
    <span className="player-symbol">{PlayerSymbol}</span>
  );

  function handleChange(event){
    setPlayerName(event.target.value);
  }

  function onEditAct() {
    setIsEditPlayer((wasEditing) => !wasEditing);
  }

  return (
    <li>
      <span className="player">
        {PlayerInputSpan}
        {playerSymbolSpan}
      </span>
      {buttonCaption}
    </li>
  );
}
