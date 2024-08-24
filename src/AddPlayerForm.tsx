import React, { useRef } from 'react';

interface Props {
  addPlayer: (name: string) => void;
}

const AddPlayerForm: React.FC<Props> = ({ addPlayer }) => {
  const playerInput = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (playerInput.current && playerInput.current.value.trim()) {
      addPlayer(playerInput.current.value);
      e.currentTarget.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        ref={playerInput}
        placeholder="Enter a player's name"
      />
      <input type="submit" value="Add Player" />
    </form>
  );
};

export default AddPlayerForm;
