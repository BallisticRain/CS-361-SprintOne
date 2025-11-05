import { useState } from 'react';
import { AddGameFormProps, Game } from './types';

const AddGameForm = ({ onAdd, onClose, isHighContrast }: AddGameFormProps) => {
  const [formData, setFormData] = useState<Omit<Game, 'id'>>({
    title: '',
    genre: '',
    platforms: [],
    description: '',
    accessibility: {
      subtitles: false,
      colorblind: false,
      controllerRemap: false
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.genre) {
      alert('Title and genre are required!');
      return;
    }
    onAdd(formData);
  };

  const handlePlatformToggle = (platform: string) => {
    setFormData(prev => ({
      ...prev,
      platforms: prev.platforms.includes(platform)
        ? prev.platforms.filter(p => p !== platform)
        : [...prev.platforms, platform]
    }));
  };

  const availablePlatforms = ['PC', 'PS5', 'Xbox', 'Switch', 'Mobile'];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className={`rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto ${
        isHighContrast ? 'bg-black border-2 border-white' : 'bg-white'
      }`}>
        <h2 className={`text-2xl font-bold mb-4 ${
          isHighContrast ? 'text-white' : ''
        }`}>Add New Game</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className={`block mb-2 ${isHighContrast ? 'text-white' : ''}`}>
              Title
              <span className={isHighContrast ? 'text-red-300' : 'text-red-500'}>*</span>
            </label>
            <input
              id="title"
              type="text"
              value={formData.title}
              onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              className={`w-full p-2 rounded ${
                isHighContrast 
                  ? 'bg-black text-white border-2 border-white' 
                  : 'border text-black'
              }`}
              aria-required="true"
            />
            <p className={`text-sm mt-1 ${
              isHighContrast ? 'text-gray-300' : 'text-gray-600'
            }`}>Enter the game's full title</p>
          </div>

          <div className="mb-4">
            <label htmlFor="genre" className={`block mb-2 ${isHighContrast ? 'text-white' : ''}`}>
              Genre
              <span className={isHighContrast ? 'text-red-300' : 'text-red-500'}>*</span>
            </label>
            <input
              id="genre"
              type="text"
              value={formData.genre}
              onChange={(e) => setFormData(prev => ({ ...prev, genre: e.target.value }))}
              className={`w-full p-2 rounded ${
                isHighContrast 
                  ? 'bg-black text-white border-2 border-white' 
                  : 'border text-black'
              }`}
              aria-required="true"
            />
            <p className={`text-sm mt-1 ${
              isHighContrast ? 'text-gray-300' : 'text-gray-600'
            }`}>E.g., RPG, Action, Strategy</p>
          </div>

          <div className="mb-4">
            <label className={`block mb-2 ${isHighContrast ? 'text-white' : ''}`}>Platforms</label>
            <div className="flex flex-wrap gap-2">
              {availablePlatforms.map(platform => (
                <button
                  key={platform}
                  type="button"
                  onClick={() => handlePlatformToggle(platform)}
                  className={`px-3 py-1 rounded ${
                    isHighContrast
                      ? (formData.platforms.includes(platform)
                          ? 'bg-white text-black'
                          : 'bg-black text-white border-2 border-white')
                      : (formData.platforms.includes(platform)
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-200')
                  }`}
                  aria-pressed={formData.platforms.includes(platform)}
                >
                  {platform}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="description" className={`block mb-2 ${isHighContrast ? 'text-white' : ''}`}>Description</label>
            <textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              className={`w-full p-2 rounded ${
                isHighContrast 
                  ? 'bg-black text-white border-2 border-white' 
                  : 'border text-black'
              }`}
              rows={3}
            />
          </div>

          <fieldset className="mb-6">
            <legend className={`mb-2 ${isHighContrast ? 'text-white' : ''}`}>Accessibility Features</legend>
            <div className="space-y-2">
              <label className={`flex items-center gap-2 ${isHighContrast ? 'text-white' : ''}`}>
                <input
                  type="checkbox"
                  checked={formData.accessibility.subtitles}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    accessibility: {
                      ...prev.accessibility,
                      subtitles: e.target.checked
                    }
                  }))}
                  className={isHighContrast ? 'border-white' : ''}
                />
                Subtitle Support
              </label>
              <label className={`flex items-center gap-2 ${isHighContrast ? 'text-white' : ''}`}>
                <input
                  type="checkbox"
                  checked={formData.accessibility.colorblind}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    accessibility: {
                      ...prev.accessibility,
                      colorblind: e.target.checked
                    }
                  }))}
                  className={isHighContrast ? 'border-white' : ''}
                />
                Colorblind Mode
              </label>
              <label className={`flex items-center gap-2 ${isHighContrast ? 'text-white' : ''}`}>
                <input
                  type="checkbox"
                  checked={formData.accessibility.controllerRemap}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    accessibility: {
                      ...prev.accessibility,
                      controllerRemap: e.target.checked
                    }
                  }))}
                  className={isHighContrast ? 'border-white' : ''}
                />
                Controller Remapping
              </label>
            </div>
          </fieldset>

          <div className="flex gap-2 justify-end">
            <button
              type="button"
              onClick={onClose}
              className={`px-4 py-2 rounded ${
                isHighContrast 
                  ? 'bg-black text-white border-2 border-white hover:bg-gray-900' 
                  : 'border hover:bg-gray-100'
              }`}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`px-4 py-2 rounded ${
                isHighContrast 
                  ? 'bg-white text-black hover:bg-gray-200' 
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              Add Game
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddGameForm;