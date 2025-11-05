
# Game Catalog

A comprehensive game catalog application that allows users to browse, search, and add games with accessibility features.

## User Stories and Acceptance Criteria

### User Story 1: Adding New Games
**As a user**, I want to add a new game so that I can keep a record of games I play.

**Acceptance Criterion:**
- Given: I am on the catalog page and the Add Game form is open
- When: I fill a valid Title and Genre and press Save
- Then: The new game is added to the visible list and persisted so it remains after a page reload

**Video Demo:** Open Add Game, type Title + Genre + accessibility flags, click Save, show new card added, refresh page, show the same new card still present.

### User Story 2: Search and Filter Games
**As a user**, I want to search or filter games by title and/or genre so that I can find a game quickly.

**Acceptance Criterion:**
- Given: The catalog contains games
- When: I type a search term or select a genre
- Then: The visible list immediately filters to only games matching the search term and selected genre (filters can be combined)

**Video Demo:** Type in Search (show immediate narrowing), then select genre dropdown and show combined filtering.

### User Story 3: View Accessibility Details
**As a user**, I want to view a game's accessibility details so that I can decide whether it meets my needs.

**Acceptance Criterion:**
- Given: A game is visible in the list
- When: I open the game's Details view
- Then: The Details view shows labeled accessibility items (Subtitles, Controller remapping, Colorblind mode) and their values

**Video Demo:** Click View/Details on a game, point to each accessibility row and read the label + value.

## Inclusivity Heuristics Implementation

### 1. Perceivable — Text Size and Contrast
**Implementation:**
- "Large text" toggle in header increases base font-size
- WCAG-friendly color contrasts
- Clear visual hierarchy

**Video Demo:** Toggle large text, show before/after text size and color contrast.

### 2. Operable — Keyboard Accessibility
**Implementation:**
- All controls reachable by Tab
- Add Game opened by pressing "n"
- Forms submit with Enter
- Visible focus outlines

**Video Demo:** Tab through controls, press Enter on Add Game or Save, show focus ring navigation.

### 3. Understandable — Clear Labels
**Implementation:**
- Every form field has label + helper text
- Tooltips for accessibility flags
- Clear validation messages

**Video Demo:** Point to labels and helper text while explaining their purpose.

### 4. Robust — Semantic HTML
**Implementation:**
- Proper semantic elements (<button>, <label>)
- ARIA roles for modals (role="dialog")
- Descriptive aria-labels

**Video Demo:** Show semantic structure and ARIA implementation.

### 5. Flexible — Multiple Interaction Methods
**Implementation:**
- Add Game via button or keyboard
- View details through click or Enter
- Multiple navigation paths

**Video Demo:** Demonstrate multiple ways to perform core actions.

### 6. Inclusive Content — Accessibility Metadata
**Implementation:**
- Structured accessibility data per game
- Consistent property names
- Clear Yes/No indicators

**Video Demo:** Show accessibility information across multiple games.

### 7. Personalization — Display Preferences
**Implementation:**
- Large text toggle
- High contrast mode
- Preferences saved to localStorage

**Video Demo:** Toggle display modes, show persistence after reload.

### 8. Privacy and Consent — Local Data
**Implementation:**
- localStorage-only storage
- Clear data storage notice
- No external data transmission

**Video Demo:** Point to footer notice, demonstrate local storage persistence.

## Quality Attributes

### 1. Reliability (Persistence)
**Non-functional Acceptance:**
- The catalog preserves added games across page reloads
- Data persists in localStorage
- No data loss during browser restarts

**Video Demo:** Add game → refresh → show persistence

### 2. Usability (Efficient Task Completion)
**Non-functional Acceptance:**
- Core flows complete within three clicks/keystrokes
- Clear labels and validation
- Intuitive navigation patterns

**Video Demo:** Narrate add → search → view details flows

### 3. Performance (Responsive Interface)
**Non-functional Acceptance:**
- Instant filtering and UI updates
- No loading delays
- Client-side operations only

**Video Demo:** Type quickly in search, show immediate updates

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

## Keyboard Navigation

- Press 'n' to open Add Game form
- Tab to navigate elements
- Enter to activate/submit
- Escape to close modals

## Technologies

- React with TypeScript
- Tailwind CSS for styling
- Vite for development
- localStorage for persistence