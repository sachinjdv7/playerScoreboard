import React from 'react';
import Counter from './Counter';

interface PlayerProps {
  scoreChange: (index: number, delta: number) => void;
  removePlayer: (id: number) => void;
  name: string;
  score: number;
  id: number;
  index: number;
}

const Player: React.FC<PlayerProps> = ({
  id,
  name,
  score,
  index,
  removePlayer,
  scoreChange,
}) => {
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => removePlayer(id)}>
          ✖
        </button>
        {name}
      </span>

      <Counter score={score} index={index} scoreChange={scoreChange} />
    </div>
  );
};

export default React.memo(Player);
