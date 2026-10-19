* {
  box-sizing: border-box;
}

html, body, #root {
  margin: 0;
  min-height: 100%;
  height: 100%;
  font-family: Inter, 'Segoe UI', sans-serif;
  background: #070b12;
  color: #eaf6ff;
}

body {
  min-height: 100vh;
  overflow: hidden;
}

button, input, textarea, select {
  font: inherit;
}

button {
  border: none;
  cursor: pointer;
}

.wonder-shell {
  --accent: #71d4ff;
  --glass-amount: 72%;
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #070b12;
  color: #edf7ff;
}

.wonder-shell.dark {
  background: #05080d;
}

.wonder-shell.midnight {
  background: #050a17;
}

.wallpaper-layer,
.ambient-grid {
  position: absolute;
  inset: 0;
}

.wallpaper-layer {
  filter: saturate(1.15) brightness(0.78);
}

.ambient-grid {
  background-image: linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
  background-size: 28px 28px;
  mask-image: radial-gradient(circle at center, rgba(0,0,0,1), rgba(0,0,0,0.2));
  opacity: 0.3;
}

.glass-panel {
  background: rgba(22, 29, 41, calc(var(--glass-amount) / 100));
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.2), 0 18px 40px rgba(5, 10, 18, 0.35);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

.status-bar {
  position: absolute;
  top: 14px;
  left: 18px;
  right: 18px;
  height: 44px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 18px;
  z-index: 30;
}

.status-left,
.status-center,
.status-right {
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(243, 248, 255, 0.9);
}

.status-right {
  display: flex;
  gap: 12px;
  align-items: center;
}

.desktop-shell {
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  padding-top: 72px;
  padding-bottom: 88px;
}

.home-screen {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 26px;
  height: 100%;
  padding: 20px 24px 0;
}

.home-scene {
  position: relative;
  border-radius: 36px;
  overflow: hidden;
  min-height: 320px;
  background: linear-gradient(180deg, rgba(8,12,19,0.2), rgba(8,12,19,0.6));
  border: 1px solid rgba(255,255,255,0.12);
}

.hero-panel {
  border-radius: 32px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 220px;
}

.eyebrow {
  color: var(--accent);
  letter-spacing: 0.2em;
  font-size: 0.65rem;
  text-transform: uppercase;
}

.hero-copy h1 {
  font-size: clamp(2.5rem, 5vw, 5rem);
  margin: 14px 0 10px;
  letter-spacing: -0.06em;
}

.hero-copy p {
  max-width: 34ch;
  color: rgba(233,240,255,0.82);
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.primary-button,
.secondary-button,
.browser-go,
.quick-cell,
.window-button,
.control-button,
.note-row,
.file-row,
.calc-button,
.app-tile,
.toast button {
  transition: transform 0.18s ease, opacity 0.18s ease, box-shadow 0.2s ease;
}

.primary-button,
.secondary-button,
.browser-go,
.control-button {
  border-radius: 14px;
  padding: 0.85rem 1.1rem;
  font-weight: 700;
}

.primary-button {
  background: linear-gradient(135deg, var(--accent), #8ad0ff);
  color: #07111d;
}

.secondary-button {
  background: rgba(255,255,255,0.08);
  color: #edf8ff;
}

.primary-button:hover,
.secondary-button:hover,
.browser-go:hover,
.calc-button:hover,
.window-button:hover,
.control-button:hover,
.app-tile:hover,
.quick-cell:hover,
.note-row:hover,
.file-row:hover,
.toast button:hover {
  transform: translateY(-1px);
}

.quick-panel {
  border-radius: 30px;
  padding: 18px;
  grid-column: 1 / span 2;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.quick-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(232,242,255,0.9);
}

.quick-header button {
  border-radius: 12px;
  padding: 0.6rem 0.95rem;
  background: rgba(255,255,255,0.06);
  color: inherit;
}

.quick-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(90px, 1fr));
  gap: 12px;
}

.quick-cell,
.app-tile {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 22px;
  padding: 16px 10px;
  background: rgba(255,255,255,0.06);
  color: #edf6ff;
}

.quick-cell span,
.app-tile span {
  font-size: 1.8rem;
}

.dock {
  position: absolute;
  left: 50%;
  bottom: 18px;
  transform: translateX(-50%);
  z-index: 40;
  display: flex;
  gap: 12px;
  padding: 10px 14px;
  border-radius: 24px;
  min-width: min(78vw, 540px);
  justify-content: center;
}

.dock-button {
  width: 52px;
  height: 52px;
  border-radius: 16px;
  background: rgba(255,255,255,0.08);
  color: #edf8ff;
  font-size: 1.8rem;
  position: relative;
}

.dock-button.active {
  box-shadow: 0 0 0 1px rgba(255,255,255,0.14), 0 0 24px rgba(112, 204, 255, 0.25);
  background: rgba(255,255,255,0.12);
}

.launcher-overlay {
  position: absolute;
  inset: 0;
  background: rgba(8,12,21,0.32);
  z-index: 60;
  display: grid;
  place-items: center;
}

.launcher-panel {
  width: min(740px, 86vw);
  border-radius: 32px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.launcher-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.launcher-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(110px, 1fr));
  gap: 14px;
}

.close-button,
.window-button,
.circle-button,
.toast button {
  background: rgba(255,255,255,0.08);
  color: #edf7ff;
  border-radius: 10px;
}

.close-button {
  width: 34px;
  height: 34px;
}

.control-button {
  position: absolute;
  right: 22px;
  top: 76px;
  z-index: 35;
  background: rgba(11,16,24,0.38);
  color: #edf7ff;
}

.control-center {
  position: absolute;
  top: 80px;
  right: 22px;
  width: min(330px, calc(100vw - 28px));
  border-radius: 28px;
  padding: 18px;
  z-index: 50;
}

.center-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
}

.center-grid {
  display: grid;
  gap: 12px;
}

.center-card {
  background: rgba(255,255,255,0.04);
  border-radius: 16px;
  padding: 12px 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.center-card input[type='range'] {
  width: 100%;
}

.toggle {
  flex-direction: row !important;
  justify-content: space-between;
  align-items: center;
}

.notification-tray {
  position: absolute;
  right: 22px;
  bottom: 110px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 40;
}

.toast {
  display: flex;
  gap: 12px;
  align-items: center;
  border-radius: 16px;
  padding: 12px 14px;
  min-width: 220px;
  justify-content: space-between;
}

.toast button {
  width: 28px;
  height: 28px;
}

.system-window {
  position: absolute;
  border-radius: 24px;
  overflow: hidden;
  background: rgba(13, 18, 24, 0.65);
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 24px 40px rgba(3,7,12,0.52);
  z-index: 10;
}

.system-window.active {
  box-shadow: 0 28px 52px rgba(5,10,18,0.62);
}

.window-header {
  cursor: grab;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

.window-title {
  font-weight: 700;
}

.window-actions {
  display: flex;
  gap: 8px;
}

.window-button {
  width: 28px;
  height: 28px;
}

.window-button.danger {
  color: #ffd7d7;
}

.window-body {
  padding: 12px;
  height: calc(100% - 52px);
  overflow: auto;
  background: rgba(12, 16, 22, 0.2);
}

.browser-view,
.notes-app,
.settings-grid,
.files-view,
.terminal-view {
  height: 100%;
}

.browser-view {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.browser-toolbar {
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 14px;
  padding: 8px 10px;
}

.circle-button {
  width: 28px;
  height: 28px;
}

.browser-address {
  flex: 1;
  padding: 8px 12px;
  border-radius: 10px;
  background: rgba(255,255,255,0.06);
  color: rgba(240,247,255,0.9);
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.browser-go {
  background: linear-gradient(135deg, rgba(99,189,255,0.82), rgba(161,222,255,0.9));
  color: #06131d;
}

.browser-body {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 12px;
  flex: 1;
}

.browser-sidebar,
.browser-main {
  border-radius: 16px;
  padding: 12px;
}

.browser-sidebar {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.chip {
  background: rgba(255,255,255,0.04);
  border-radius: 12px;
  padding: 10px 8px;
  text-align: center;
}

.chip.active {
  background: rgba(113,212,255,0.2);
}

.browser-main {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.browser-search-row {
  display: flex;
  gap: 8px;
}

.browser-search-row input {
  flex: 1;
  border: none;
  background: rgba(255,255,255,0.05);
  color: #edf7ff;
  border-radius: 12px;
  padding: 11px 12px;
}

.browser-search-row button {
  border-radius: 12px;
  padding: 0.8rem 1rem;
  background: rgba(255,255,255,0.1);
  color: #eaf7ff;
}

.browser-result {
  background: linear-gradient(135deg, rgba(82,160,255,0.18), rgba(255,255,255,0.04));
  border-radius: 16px;
  padding: 16px;
}

.browser-badge {
  color: var(--accent);
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.browser-result h3 {
  margin: 12px 0 8px;
}

.browser-result p {
  margin: 0;
  color: rgba(245,248,255,0.8);
  line-height: 1.5;
}

.browser-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  gap: 10px;
}

.mini-card {
  background: rgba(255,255,255,0.05);
  border-radius: 12px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.mini-card span {
  color: rgba(215,228,244,0.8);
  font-size: 0.72rem;
  text-transform: uppercase;
}

.notes-app {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 12px;
}

.note-list,
.note-editor,
.file-panel,
.file-preview {
  border-radius: 16px;
  padding: 12px;
}

.note-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.note-row {
  background: rgba(255,255,255,0.04);
  border-radius: 12px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: flex-start;
  color: #edf5ff;
}

.note-row.selected {
  background: rgba(98,196,255,0.16);
}

.note-row small {
  opacity: 0.72;
}

.note-editor {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.note-editor input,
.note-editor textarea,
.terminal-input-row input {
  width: 100%;
  border: none;
  background: rgba(255,255,255,0.05);
  color: #edf7ff;
  border-radius: 12px;
  padding: 12px 14px;
}

.note-editor textarea {
  min-height: 180px;
  resize: vertical;
}

.notes-actions {
  display: flex;
  justify-content: flex-end;
}

.danger-button {
  border-radius: 12px;
  padding: 0.7rem 1rem;
  background: rgba(255,99,132,0.18);
  color: #ffeaf2;
}

.calculator-view {
  display: flex;
  flex-direction: column;
  gap: 14px;
  height: 100%;
}

.calc-display {
  min-height: 80px;
  border-radius: 16px;
  background: rgba(255,255,255,0.04);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 2rem;
  padding: 16px;
}

.calc-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(60px, 1fr));
  gap: 8px;
  flex: 1;
}

.calc-button {
  border-radius: 14px;
  background: rgba(255,255,255,0.05);
  color: #edf8ff;
  font-size: 1.2rem;
  min-height: 54px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(130px, 1fr));
  gap: 14px;
  height: 100%;
}

.wallpaper-card {
  min-height: 140px;
  border-radius: 18px;
  padding: 16px;
  color: white;
  display: flex;
  align-items: end;
  border: 1px solid rgba(255,255,255,0.14);
}

.wallpaper-card.selected {
  box-shadow: inset 0 0 0 2px rgba(255,255,255,0.7);
}

.music-player {
  display: flex;
  flex-direction: column;
  gap: 18px;
  height: 100%;
}

.album-art {
  width: 100%;
  height: 170px;
  border-radius: 22px;
  background: linear-gradient(135deg, rgba(121,175,255,0.78), rgba(224,195,255,0.32));
}

.track-meta {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.track-meta span,
.track-meta small {
  color: rgba(227,240,255,0.62);
}

.track-meta strong {
  font-size: 1.5rem;
}

.player-controls {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.player-controls button {
  background: rgba(255,255,255,0.08);
  color: white;
  border-radius: 12px;
  padding: 0.8rem 1rem;
}

.player-controls input {
  width: 100%;
}

.files-view {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 12px;
}

.file-panel,
.file-preview {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.file-row {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255,255,255,0.04);
  padding: 10px 12px;
  border-radius: 12px;
  color: #edf8ff;
}

.file-row.selected {
  background: rgba(107,200,255,0.14);
}

.file-preview {
  white-space: pre-wrap;
  line-height: 1.6;
}

.settings-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(170px, 1fr));
  gap: 16px;
}

.settings-grid label {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: rgba(255,255,255,0.04);
  border-radius: 14px;
  padding: 12px;
}

.settings-grid input,
.settings-grid select {
  background: rgba(255,255,255,0.05);
  color: #edf7ff;
  border: none;
  border-radius: 10px;
  padding: 10px 12px;
}

.terminal-view {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
}

.terminal-output {
  flex: 1;
  overflow: auto;
  border-radius: 16px;
  background: rgba(2,4,8,0.42);
  padding: 12px;
  color: #d7f9d1;
  font-family: 'SFMono-Regular', 'Consolas', monospace;
  line-height: 1.8;
}

.terminal-input-row {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255,255,255,0.04);
  border-radius: 12px;
  padding: 8px 10px;
}

.terminal-input-row span {
  color: var(--accent);
}

.empty-state {
  display: grid;
  place-items: center;
  height: 100%;
  color: rgba(239,246,255,0.8);
}

@media (max-width: 860px) {
  .home-screen {
    grid-template-columns: 1fr;
  }

  .quick-panel {
    grid-column: auto;
  }

  .quick-grid {
    grid-template-columns: repeat(2, minmax(90px, 1fr));
  }

  .browser-body,
  .notes-app,
  .files-view {
    grid-template-columns: 1fr;
  }

  .status-right {
    display: none;
  }

  .launcher-grid {
    grid-template-columns: repeat(2, minmax(110px, 1fr));
  }
}

@media (max-width: 540px) {
  body {
    overflow: auto;
  }

  .status-bar {
    left: 10px;
    right: 10px;
    padding: 0 12px;
  }

  .desktop-shell {
    padding: 72px 10px 98px;
  }

  .home-screen {
    padding: 6px 8px 0;
  }

  .hero-panel,
  .quick-panel {
    padding: 16px;
  }

  .dock {
    width: calc(100vw - 24px);
    min-width: 0;
    padding: 10px 12px;
  }

  .dock-button {
    width: 46px;
    height: 46px;
  }

  .system-window {
    left: 12px !important;
    top: 80px !important;
    width: calc(100vw - 24px) !important;
    height: calc(100vh - 150px) !important;
  }

  .notification-tray {
    left: 12px;
    right: 12px;
    bottom: 110px;
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
}
