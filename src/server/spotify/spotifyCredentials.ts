export type Credentials = {
  clientId: string;
  clientSecret: string;
  redirectURI: string;
  scopes: string;
};

const allScopes: string[] = [
  "streaming",
  "user-read-mail",
  "user-read-private",
  "user-library-read",
  "user-top-read",
  "user-read-recently-played",
  "user-read-currently-playing",
  "user-read-playback-position",
  "user-read-playback-state",
  "user-modify-playback-state",
  "playlist-read-private",
  "playlist-read-collaborative",
];

export const credentials: Credentials = {
  clientId: String(process.env.CLIENT_ID),
  clientSecret: String(process.env.CLIENT_SECRET),
  redirectURI: String(process.env.REDIRECT_URI),
  scopes: allScopes.join(" "),
};
