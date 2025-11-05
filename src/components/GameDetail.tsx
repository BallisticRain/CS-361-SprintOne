import { GameDetailProps } from './types';

const GameDetail = ({ game, onClose }: GameDetailProps) => {
  const isHighContrast = document.documentElement.classList.contains('high-contrast');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className={`rounded-lg p-6 max-w-md w-full ${
        isHighContrast ? 'bg-black border-2 border-white' : 'bg-white'
      }`}>
        <div className="flex justify-between items-start mb-4">
          <h2 className={`text-2xl font-bold ${isHighContrast ? 'text-white' : ''}`}>
            {game.title}
          </h2>
          <button
            onClick={onClose}
            className={`${
              isHighContrast 
                ? 'text-white hover:text-gray-300' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
            aria-label="Close details"
          >
            ✕
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className={`font-semibold mb-1 ${isHighContrast ? 'text-white' : ''}`}>Genre</h3>
            <p className={isHighContrast ? 'text-white' : ''}>{game.genre}</p>
          </div>

          <div>
            <h3 className={`font-semibold mb-1 ${isHighContrast ? 'text-white' : ''}`}>Platforms</h3>
            <p className={isHighContrast ? 'text-white' : ''}>{game.platforms.join(', ')}</p>
          </div>

          <div>
            <h3 className={`font-semibold mb-1 ${isHighContrast ? 'text-white' : ''}`}>Description</h3>
            <p className={isHighContrast ? 'text-white' : ''}>{game.description}</p>
          </div>

          <div>
            <h3 className={`font-semibold mb-2 ${isHighContrast ? 'text-white' : ''}`}>
              Accessibility Features
            </h3>
            <ul className="space-y-2">
              <li className={`flex items-center gap-2 ${isHighContrast ? 'text-white' : ''}`}>
                <span className={isHighContrast 
                  ? (game.accessibility.subtitles ? 'text-green-300' : 'text-red-300')
                  : (game.accessibility.subtitles ? 'text-green-500' : 'text-red-500')
                }>
                  {game.accessibility.subtitles ? '✓' : '✕'}
                </span>
                Subtitle Support
              </li>
              <li className={`flex items-center gap-2 ${isHighContrast ? 'text-white' : ''}`}>
                <span className={isHighContrast 
                  ? (game.accessibility.colorblind ? 'text-green-300' : 'text-red-300')
                  : (game.accessibility.colorblind ? 'text-green-500' : 'text-red-500')
                }>
                  {game.accessibility.colorblind ? '✓' : '✕'}
                </span>
                Colorblind Mode
              </li>
              <li className={`flex items-center gap-2 ${isHighContrast ? 'text-white' : ''}`}>
                <span className={isHighContrast 
                  ? (game.accessibility.controllerRemap ? 'text-green-300' : 'text-red-300')
                  : (game.accessibility.controllerRemap ? 'text-green-500' : 'text-red-500')
                }>
                  {game.accessibility.controllerRemap ? '✓' : '✕'}
                </span>
                Controller Remapping
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetail;