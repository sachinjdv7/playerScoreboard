import { useState } from 'react';

import Player from './Player';
import Header from './Header';
import AddPlayerForm from './AddPlayerForm';

function App() {
  const [players, setPlayers] = useState([
    { name: 'Nikhil', score: 0, id: 1 },
    { name: 'Dnyaneshwar', score: 0, id: 2 },
    { name: 'Harshad', score: 0, id: 3 },
    { name: 'Nitin', score: 0, id: 4 },
  ]);

  const handleScoreChange = (index: number, delta: number) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player, i) =>
        i === index ? { ...player, score: player.score + delta } : player
      )
    );
  };

  const handleAddPlayer = (name: string) => {
    setPlayers((prevPlayers) => [
      ...prevPlayers,
      {
        name,
        score: 0,
        id: prevPlayers.length + 1,
      },
    ]);
  };

  const handleRemovePlayer = (id: number) => {
    setPlayers((prevPlayers) =>
      prevPlayers.filter((player) => player.id !== id)
    );
  };

  return (
    <div className="scoreboard">
      <Header title="Scoreboard" players={players} />
      {players.map((player, index) => (
        <Player
          key={player.id}
          index={index}
          id={player.id}
          name={player.name}
          score={player.score}
          scoreChange={handleScoreChange}
          removePlayer={handleRemovePlayer}
        />
      ))}
      <AddPlayerForm addPlayer={handleAddPlayer} />
    </div>
  );
}

export default App;
