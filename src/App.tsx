import { useState, useEffect } from 'react';
import GameList from './components/GameList';
import AddGameForm from './components/AddGameForm';
import GameDetail from './components/GameDetail';
import seedData from './data/seed.json';
import { Game } from './components/types';

function App() {
  const [games, setGames] = useState<Game[]>([]);
  const [searchText, setSearchText] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [isLargeText, setIsLargeText] = useState(() => {
    const stored = localStorage.getItem('isLargeText');
    return stored ? JSON.parse(stored) : false;
  });
  const [isHighContrast, setIsHighContrast] = useState(() => {
    const stored = localStorage.getItem('isHighContrast');
    return stored ? JSON.parse(stored) : false;
  });
  const [showAddGame, setShowAddGame] = useState(false);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  useEffect(() => {
    const storedGames = localStorage.getItem('games');
    if (storedGames) {
      setGames(JSON.parse(storedGames));
    } else {
      setGames(seedData.games);
      localStorage.setItem('games', JSON.stringify(seedData.games));
    }
  }, []);

  const genres = Array.from(new Set(games.map(game => game.genre)));

  const filteredGames = games.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchText.toLowerCase());
    const matchesGenre = !selectedGenre || game.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  const handleAddGame = (newGame: Omit<Game, 'id'>) => {
    const gameWithId = {
      ...newGame,
      id: `g${games.length + 1}`
    };
    const updatedGames = [...games, gameWithId];
    setGames(updatedGames);
    localStorage.setItem('games', JSON.stringify(updatedGames));
    setShowAddGame(false);
  };

  // Save preferences when they change
  useEffect(() => {
    localStorage.setItem('isLargeText', JSON.stringify(isLargeText));
  }, [isLargeText]);

  useEffect(() => {
    localStorage.setItem('isHighContrast', JSON.stringify(isHighContrast));
    if (isHighContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  }, [isHighContrast]);

  // Keyboard navigation - press 'n' to open Add Game form
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'n' || event.key === 'N') {
        // Only trigger if not typing in an input field
        if (!(event.target instanceof HTMLInputElement) && 
            !(event.target instanceof HTMLTextAreaElement) && 
            !(event.target instanceof HTMLSelectElement)) {
          event.preventDefault();
          setShowAddGame(true);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={`min-h-screen p-4 ${isLargeText ? 'text-lg' : 'text-base'} ${isHighContrast ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <header className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className={`text-3xl font-bold ${isHighContrast ? 'text-white' : 'text-black'}`}>Game Catalog</h1>
          <div className="flex gap-4 items-center">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={isLargeText}
                onChange={(e) => setIsLargeText(e.target.checked)}
                aria-label="Toggle large text"
              />
              Large Text
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={isHighContrast}
                onChange={(e) => setIsHighContrast(e.target.checked)}
                aria-label="Toggle high contrast mode"
              />
              High Contrast
            </label>
            <button
              onClick={() => setShowAddGame(true)}
              className={`px-4 py-2 rounded ${
                isHighContrast 
                  ? 'bg-white text-black' 
                  : 'bg-blue-500 text-white'
              }`}
              aria-label="Add new game"
            >
              Add Game
            </button>
          </div>
        </div>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search games..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className={`p-2 rounded flex-grow ${
              isHighContrast 
                ? 'bg-black text-white border-2 border-white' 
                : 'border text-black'
            }`}
            aria-label="Search games"
          />
          <select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
            className={`p-2 rounded ${
              isHighContrast 
                ? 'bg-black text-white border-2 border-white' 
                : 'border text-black'
            }`}
            aria-label="Filter by genre"
          >
            <option value="">All Genres</option>
            {genres.map(genre => (
              <option 
                key={genre} 
                value={genre}
                className={isHighContrast ? 'bg-black text-white' : ''}
              >
                {genre}
              </option>
            ))}
          </select>
        </div>
      </header>

      <main>
        <GameList 
          games={filteredGames} 
          onViewGame={setSelectedGame}
          isHighContrast={isHighContrast}
        />
      </main>

      {showAddGame && (
        <AddGameForm
          onAdd={handleAddGame}
          onClose={() => setShowAddGame(false)}
          isHighContrast={isHighContrast}
        />
      )}

      {selectedGame && (
        <GameDetail
          game={selectedGame}
          onClose={() => setSelectedGame(null)}
          isHighContrast={isHighContrast}
        />
      )}

      <footer className="mt-8 text-sm text-center border-t pt-4">
        <p>All game data is stored locally in your browser and is not sent to any servers.</p>
      </footer>
    </div>
  );
}

export default App;