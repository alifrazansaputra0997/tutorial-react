import { useState } from "react";

export default function Player({ PlayerName, PlayerSymbol, onEdit }) {
  const [isEditPlayer, setIsEditPlayer] = useState(false);
  const PlayerInputSpan = isEditPlayer ? (
    <input type="text" required value={PlayerName}/>
  ) : (
    <span className="player-name">{PlayerName}</span>
  );
  const buttonCaption = isEditPlayer ? <button onClick={onEditAct}>Save</button> : <button onClick={onEditAct}>Edit</button>

  function onEditAct() {
    setIsEditPlayer(!isEditPlayer);
  }

  return (
    <li>
      <span className="player">
        {PlayerInputSpan}
        {/* <span className="player-name">{PlayerName}</span> */}
        <span className="player-symbol">{PlayerSymbol}</span>
      </span>
      {buttonCaption}
    </li>
  );
}
