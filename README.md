# <p align="center" style="font-weight:800">APA - Small Music Player</p>

<p align="center">
  <img src="https://media.giphy.com/media/fCBdICflRKixHRGUQA/giphy.gif" />
</p>

<br/>

## Overview

---

This app integrates the Spotify Web API to allow a user to search for their favorite songs and play a chosen track. It was creatively named apa (audio playback app).



<br>

## Table of Contents

---

- [Description](#Description)
- [Usage - User Interactions](#Usage)
- [Views - Components](#Views)
- [API Service](#Api)
- [Technical](#Technical)
- [Getting Started](#GettingStarted)

<br>

<h2 id="Description">Description - Architecture</h2>

---

This project was built using TypeScript, React and node.js running express on the backend.
The entire project was written in TypeScript both on the frontend and backend and follows the MVC pattern. Users must login using Spotify like many other music api providers without an account on the platform no services such as searching, or audio playback files are accessible. In this case the Users Spotify account serves as the 'Model'. Users agree to the scope desired by this project when logging this includes read and write/update capabilites to a Spotify User's data with the exception of fields such as emails and passwords.

The server in this project hosts the application environment variables to access and pass the Spotify Web API authentication layer. The server provides a service for getting and refreshing access tokens. Users are provided with their access tokens stored as cookies in their browser. By providing the client with cookies requests for features such as searching can be made by the client. Most capabilities of the 'Controller' live in the client-side as the client makes requests for refresh tokens to the server and uses the tokens in the browsers cookies to make requests for songs or any other Spotify User services directly to the Spotify Web API.

The Views were created with React and Material UI. Style hooks were used for applying specific styling. The View components are 'dumb' mostly only displaying data with small bits of logic such as disabling a play button if no audio play back url exists for a search result.

<br>

<p align="center">
  <img src="https://raw.githubusercontent.com/K-minutti/readme-images/main/architecture.png"
  height="340px" />
</p>

<br>

<br>

<h2 id="Usage">Usage</h2>

---

<p align="center">
  <img src=https://raw.githubusercontent.com/K-minutti/readme-images/main/apa-userflow.png
  height="340px" />
    <figcaption align="center"> User Flow </figcaption>
</p>

### Brief

Upon landing on the site a user only has one option to login using Spotify.They can create an account if they don't have one or Login using Facebook. After Logging in. Users can interact with apa in several ways including searching for songs via the search bar, playing songs by clicking play on a song from the search results. Once a song is playing a user can control the audio via the app bar on the bottom which allows a user to toggle pause and play. Users can also adjust volume by using a slider in addition to seeking a specific position in a song by using the slider provided. Images of the components are provided below.

<br>

<h2 id="Views">Views - UI Components</h2>

---

**Landing/Login**

<p align="center">
  <img src=https://raw.githubusercontent.com/K-minutti/readme-images/main/apalanding.png
  height="316px" />
</p>

**Home**

<p align="center">
  <img src=https://raw.githubusercontent.com/K-minutti/readme-images/main/apahome.png
  height="340px" />
</p>

**Search Result Card**

<p align="center">
  <img src=https://raw.githubusercontent.com/K-minutti/readme-images/main/apaButton.png
  width="210" />
  <img src=https://raw.githubusercontent.com/K-minutti/readme-images/main/apaDisbaled.png
    width="210" />
</p>

**App Bar**

<p align="center">
  <img src=https://raw.githubusercontent.com/K-minutti/readme-images/main/Apabottom.png
  width="100%" />
</p>

<br>

## UI Components

This app uses several components from the Material UI core library including the following: Buttons, Grid, Slider, AppBar, Card, and TextField. In the images above these components can be seen as :

- Search bar - TextField
- Login - Button
- Search results - Grid
- Music Track - Card
- Bottom App bar - AppBar, Grid
- Audio and Time Sliders - Slider

<br>

## Reusable Component

Much of the apps functionality rests on making requests to Spotify's API. I created a small reusable class that helps making secondary API requests to the Spotify API more manageable it also handles things such as preset env variables which are needed for multiple requests to Spotify. The code can be found in this file [here.](https://github.com/K-minutti/twitch-apa/blob/main/src/server/spotify/spotifyApi.ts)

```TypeScript
/* Spotify Authentication */
app.get("/login", (req: Request, res: Response, next: NextFunction): void => {
  const spotifyApi = new SpotifyApiWrapper();
  const authorizeURL: string = spotifyApi.getAuthorizeURL();
  res.redirect(authorizeURL);
});
```

<br>

<h2 id="Api">API Service</h2>

---

Surface of the APIs created on the Backend.

**/login** - Initiates the Spotify Authentication process by redirecting to Spotify's authorization portal.

**/success** - Spotify redirects to this url after a user logins. This end point expects a 'code' query parameter in the request body by Spotify if its is missing it routes a user back to login.

**/refresh** - This endpoint will send a new access token as a cookie to a users browser if a valid refresh token is provided. It makes a request to Spotify in order to obtain the new token.

**/logout** - Clears access tokens stored as cookies on client browser and redirects to base url.

For more information on Spotify's API visit: [Web API](https://developer.spotify.com/documentation/web-api/) and
[Authentication](https://developer.spotify.com/documentation/general/guides/authorization-guide/)

<br>

<h2 id="Technical">Technical Decisions</h2>

---

Given the tight scope of this app React Hooks were used for state management. The depedencies are as follows the Client must obtain a cookie from the apa backend if it exists a Home component is rendered. A User can now interact with the app. Otherwise a User will see a Login component which serves as the root View. Once a user is authenticated the app keeps track of two states the searchbar value and a chosen/current track. Search results are dependent on the state of the search bar which fires a api request to search for songs via Spotify when a user inputs text. If results are returned search results will render. Clicking play on a track will update the state of the current track and depending on the browser play sound immediately.

Audio as well as audio contorls were provided by creating a audio DOM node which allows for loading songs via mp3, ogg, etc. sources into an audio node and calling methods on that element such as play, pause, load, amongst many other built methods.

### Alternatives

Users must login using Spotify because there are no robust resources available for querying for songs or playing without an account on a platform. This is true across major API provides such as Apple Music, Lastfm, Sound Cloud etc. A better choice would be to allow users to login using their platform of choice.

Not storing, sessions or users? After authentication interactions between the backend service of this app and the client are managed using cookies. Since there is no data being stored on any users I did not see the need to provision a database. Users data lives with Spotify. However, in the future if I wanted to add features such as analytics on a users music preferences. The app could be extened to using express-session and or passport.js for authentication for our backend services and a Postgres database to store user account information, and data from Spotify.

<br>

<h2 id="GettingStarted">Getting Started</h2>

---

### Introduction

This project was built using TypeScript. Config files for TS compilation options can be found in the root directory. There are two files one for the client code and one for the server code. Types are required for most dependencies. Nodemon was used to run a local server during development config options can be found in the nodemon.json file in the root directory.

You must create a Spotify developer account in order to properly run the project locally as Spotify requires a client ID and client secret for access tokens.

You can create an account here: https://developer.spotify.com/dashboard/login

### Dependencies - Requirements

- React
- TypeScript
- node.js 12+
- express
- webpack 5
- Material UI
- axios
- Spotify Developer Account

### Installing

- Fork and clone the repo to your local computer
- Make sure you have atleast node version 12.16 or higher installed
- You must have TypeScript installed in order to run tsc commands

<br>

### Executing program

---

Before running the project locally if you want to search and see results as well as play songs you must create a Spotify Developer account and start a new project. You will need to whitelist a redirect URL which Spotify will use after authenticating a User. Then you must configure the following environment variables using a `.env` file in the root directory of the project. The file only needs to contain the following.

<br>

```
REDIRECT_URI=http://localhost:[PORT]/[an-endpoint-you-specify]
CLIENT_ID=Your-client-id-from-Spotify-dev-account
CLIENT_SECRET=Your-client-secret-from-Spotify-dev-account
```

Run to download dependencies.

```
> npm install
```

To run server locally using nodemon.

```
> npm run dev:server
```

To build the project using webpack and run server locally.

```
> npm run dev
```

- This command will compile files and output a separate server directory with JavaScript files and insert a `bundle.js` file in the `dist` directory. The bundle.js contains client code.
- In this mode files are watched so you can edit `src` files and the project will recompile and build on save.

<br>

## Author

Kevin Minutti. [My Portoflio.](https://kevinminutti.me/)
