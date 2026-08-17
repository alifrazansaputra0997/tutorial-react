import { useState } from "react";

export default function Player({ PlayerName, PlayerSymbol, onEdit }) {
  const [isEditPlayer, setIsEditPlayer] = useState(false);
  const PlayerInputSpan = isEditPlayer ? (
    <input type="text" required/>
  ) : (
    <span className="player-name">{PlayerName}</span>
  );

  function onEditAct() {
    setIsEditPlayer(true);
  }

  return (
    <li>
      <span className="player">
        {PlayerInputSpan}
        {/* <span className="player-name">{PlayerName}</span> */}
        <span className="player-symbol">{PlayerSymbol}</span>
      </span>
      <button onClick={onEditAct}>Edit</button>
    </li>
  );
}
