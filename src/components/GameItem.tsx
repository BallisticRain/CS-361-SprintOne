import { GameItemProps } from './types';

const GameItem = ({ game, onView, isHighContrast }: GameItemProps) => {

  return (
    <div className={`border p-4 rounded shadow ${isHighContrast ? 'border-white' : ''}`}>
      <h3 className="text-xl font-semibold mb-2">{game.title}</h3>
      <p className={`mb-2 ${isHighContrast ? 'text-white' : 'text-gray-600'}`}>{game.genre}</p>
      <p className={`mb-4 ${isHighContrast ? 'text-white' : 'text-sm'}`}>
        Platforms: {game.platforms.join(', ')}
      </p>
      <button
        onClick={onView}
        className={`px-4 py-2 rounded w-full ${
          isHighContrast 
            ? 'bg-white text-black border-2 border-white hover:bg-gray-200' 
            : 'bg-blue-500 text-white hover:bg-blue-600'
        }`}
        aria-label={`View details for ${game.title}`}
      >
        View Details
      </button>
    </div>
  );
};

export default GameItem;