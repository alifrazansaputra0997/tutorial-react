import Player from "./components/Player/Player";
import GameBoard from "./components/GameBoard/GameBoard";
function App() {

  const listPlayer = [
    {
      playerName: "Player 1",
      playerSymbol: "X",
    },
    {
      playerName: "Player 2",
      playerSymbol: "O",
    },
  ];

  const PlayerSection = listPlayer.map((item) => {
    return (
      <Player
        key={item.playerName}
        initialName={item.playerName}
        PlayerSymbol={item.playerSymbol}
        onEdit={(param) => onEdit(param)}

      />
    );
  });

  function onEdit(param) {
    console.log("param", param);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players">{PlayerSection}</ol>
        <GameBoard />
      </div>
    </main>
  );
}

export default App;
