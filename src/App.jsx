import Player from "./components/Player/Player";

function App() {

  const listPlayer = [
    {
      playerName: "Alif",
      playerSymbol: "X",
    },
    {
      playerName: "Razan",
      playerSymbol: "O",
    },
  ];

  const PlayerSection = listPlayer.map((item) => {
    return (
      <Player
        key={item.playerName}
        PlayerName={item.playerName}
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
      </div>
    </main>
  );
}

export default App;
