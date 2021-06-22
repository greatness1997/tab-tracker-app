const AuthenticationController = require("./Controller/AuthenticationController");
const AuthenticationControllerPolicy = require("./policies/AuthenticationControllerPolicy");
const SongsController = require("./Controller/SongsController");

module.exports = app => {
  app.post(
    "/register",
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
  )

  app.post(
    "/login",
    AuthenticationController.login
  )

  app.get(
    "/songs",
    SongsController.index
    )
  app.post(
    "/songs",
    SongsController.post
    )
  
};
