/** Live countdown to the wedding day. Updates once per second. */
export function initCountdown(targetIso: string): void {
  const root = document.getElementById('countdown');
  if (!root) return;

  const target = new Date(targetIso).getTime();
  const els = {
    days: root.querySelector<HTMLElement>('[data-cd="days"]'),
    hours: root.querySelector<HTMLElement>('[data-cd="hours"]'),
    minutes: root.querySelector<HTMLElement>('[data-cd="minutes"]'),
    seconds: root.querySelector<HTMLElement>('[data-cd="seconds"]'),
  };

  const pad = (n: number): string => String(n).padStart(2, '0');

  const tick = (): boolean => {
    const diff = target - Date.now();
    if (diff <= 0) {
      root.classList.add('countdown--done');
      root.textContent = 'Today we become one — to God be the glory!';
      return true;
    }
    if (els.days) els.days.textContent = String(Math.floor(diff / 86400000));
    if (els.hours) els.hours.textContent = pad(Math.floor((diff / 3600000) % 24));
    if (els.minutes) els.minutes.textContent = pad(Math.floor((diff / 60000) % 60));
    if (els.seconds) els.seconds.textContent = pad(Math.floor((diff / 1000) % 60));
    return false;
  };

  if (tick()) return;
  const timer = window.setInterval(() => {
    if (tick()) window.clearInterval(timer);
  }, 1000);
}
