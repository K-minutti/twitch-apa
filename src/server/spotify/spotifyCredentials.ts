export type Credentials = {
  clientId: string;
  clientSecret: string;
  redirectURI: string;
  scopes: string;
};

const allScopes: string[] = [
  "streaming",
  "user-top-read",
  "user-read-email",
  "user-read-private",
  "user-library-read",
  "user-read-playback-state",
  "user-read-currently-playing",
  "user-modify-playback-state",
];

export const credentials: Credentials = {
  clientId: String(process.env.CLIENT_ID),
  clientSecret: String(process.env.CLIENT_SECRET),
  redirectURI: String(process.env.REDIRECT_URI),
  scopes: allScopes.join(" "),
};
