export type Credentials = {
  clientId: string;
  clientSecret: string;
  redirectURI: string;
  scopes: string;
};

export const credentials: Credentials = {
  clientId: String(process.env.CLIENT_ID),
  clientSecret: String(process.env.CLIENT_SECRET),
  redirectURI: String(process.env.REDIRECT_URI),
  scopes: "user-read-private user-read-email",
};
