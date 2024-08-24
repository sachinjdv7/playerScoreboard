interface CounterProps {
  index: number;
  score: number;
  scoreChange: (index: number, delta: number) => void;
}

const Counter = ({ scoreChange, index, score }: CounterProps) => {
  return (
    <div className="counter">
      <button
        className="counter-action decrement"
        onClick={() => scoreChange(index, -1)}
      >
        -
      </button>
      <span className="counter-score">{score}</span>
      <button
        className="counter-action increment"
        onClick={() => scoreChange(index, +1)}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
