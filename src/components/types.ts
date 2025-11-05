export interface Game {
  id: string;
  title: string;
  genre: string;
  platforms: string[];
  accessibility: {
    subtitles: boolean;
    colorblind: boolean;
    controllerRemap: boolean;
  };
  description: string;
}

export interface GameListProps {
  games: Game[];
  onViewGame: (game: Game) => void;
  isHighContrast: boolean;
}

export interface GameItemProps {
  game: Game;
  onView: () => void;
  isHighContrast: boolean;
}

export interface AddGameFormProps {
  onAdd: (game: Omit<Game, 'id'>) => void;
  onClose: () => void;
  isHighContrast: boolean;
}

export interface GameDetailProps {
  game: Game;
  onClose: () => void;
  isHighContrast: boolean;
}