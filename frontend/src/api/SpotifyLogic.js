const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-modify-playback-state",
  "user-top-read",
  "user-read-playback-state",
  "user-modify-playback-state",
  "playlist-read-collaborative",
  "user-read-email",
  "user-library-read",
];
const web = "https://spotify-clone-mcem.herokuapp.com/callback";
const SPOTIFY_BASE_URL = "https://accounts.spotify.com/authorize";
const SPOTIFY_REDIRECT_URL = web;
export const SPOTIFY_CLIENT_ID = "6185fd56fb0c47fcb3da5ed934519153";
export const SPOTIFY_FULL_URL = `${SPOTIFY_BASE_URL}?client_id=${SPOTIFY_CLIENT_ID}&response_type=token&redirect_uri=${SPOTIFY_REDIRECT_URL}&scope=${scopes.join(
  "%20"
)}&show_dialog=true`;

export const getTokenFromURL = () => {
  var hash = window.location.hash.substring(1);

  var result = hash.split("&").reduce(function (res, item) {
    var parts = item.split("=");
    res[parts[0]] = decodeURIComponent(parts[1]);
    return res;
  }, {});
  return result.access_token;
};
