/**
 * Background music: Canon in D (looped, 60 s trimmed clip).
 *
 * Browsers block audio-with-sound until the user interacts with the page,
 * so we start playback on the first real gesture (pointer / key / scroll).
 * The mute button:
 *   - first click  → starts the music (with sound)
 *   - later clicks → toggle mute on/off
 * The first-gesture listeners deliberately ignore clicks on the button
 * itself, so it never starts-and-mutes in a single click.
 */
export function initAudio(): void {
  const btn = document.querySelector<HTMLButtonElement>('[data-mute-btn]');
  if (!btn) return;

  const audio = new Audio('/audio/wedding-hymn.mp3');
  audio.loop = true;
  audio.preload = 'auto';
  audio.volume = 0.5;
  audio.muted = false;

  let started = false;

  const sync = (): void => {
    btn.setAttribute('data-muted', String(audio.muted));
    btn.setAttribute('aria-label', audio.muted ? 'Unmute music' : 'Mute music');
  };

  const play = (): void => {
    started = true;
    void audio
      .play()
      .then(sync)
      .catch(() => {
        started = false; // blocked — let the next gesture retry
      });
  };

  const isButton = (e: Event): boolean =>
    e.target instanceof Element && Boolean(e.target.closest('[data-mute-btn]'));

  const onGesture = (e: Event): void => {
    if (started || isButton(e)) return; // the button manages its own clicks
    play();
  };

  const events = ['pointerdown', 'keydown', 'touchstart', 'scroll'] as const;
  events.forEach((ev) => window.addEventListener(ev, onGesture, { passive: true }));

  btn.addEventListener('click', () => {
    if (!started) {
      play(); // first click begins playback with sound
    } else {
      audio.muted = !audio.muted;
    }
    sync();
  });

  sync();
}
