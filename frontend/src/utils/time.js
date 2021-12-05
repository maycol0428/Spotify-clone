export function millisToMinutesAndSeconds(ms) {
  const minutes = Math.floor(ms / 60000);
  const seconds = ((ms % 60000) / 1000).toFixed(0);
  let time = `${minutes}:${seconds}`;
  if (seconds < 10) {
    time = `${minutes}:0${seconds}`;
  }
  if (seconds === 60) {
    time = minutes + 1;
    seconds = "00";
    time = `${minutes}:${seconds}`;
  }
  return time;
}
