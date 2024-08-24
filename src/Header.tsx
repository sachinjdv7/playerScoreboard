import Stats from './Stats';
import Stopwatch from './Stopwatch';

interface Props {
  title: string;
  players: Array<{ name: string; score: number; id: number }>;
}

const Header = ({ title, players }: Props) => {
  return (
    <header>
      <Stats players={players} />
      <h1>{title}</h1>
      <Stopwatch />
    </header>
  );
};

export default Header;
