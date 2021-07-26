import express, { Request, Response, NextFunction } from "express";
import { SpotifyServices } from "../spotify/spotifyServices";
import { spotifyApi } from "../app";

const spotifyServices = new SpotifyServices();
const apiRouter = express.Router();

apiRouter.get(
  "/user",
  (req: Request, res: Response, next: NextFunction): void => {
    const headerAuthorization: string =
      spotifyApi.getServicesAuthorizationHeader();
    const user: string = spotifyServices.getUser(headerAuthorization);
    res.json({
      message: "You hit the /api/user endpoint for the user " + user,
    });
  }
);

apiRouter.get(
  "/search",
  (req: Request, res: Response, next: NextFunction): void => {
    const headerAuthorization: string =
      spotifyApi.getServicesAuthorizationHeader();

    const queryParams: string = String(req.query.q);
    spotifyServices
      .search(headerAuthorization, queryParams)
      .then((response) => {
        res.json(response);
      })
      .catch((error) => {
        res.redirect("/");
      });
  }
);

export default apiRouter;
