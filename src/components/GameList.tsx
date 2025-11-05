import { GameListProps } from './types';
import GameItem from './GameItem';

const GameList = ({ games, onViewGame, isHighContrast }: GameListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {games.map(game => (
        <GameItem
          key={game.id}
          game={game}
          onView={() => onViewGame(game)}
          isHighContrast={isHighContrast}
        />
      ))}
    </div>
  );
};

export default GameList;