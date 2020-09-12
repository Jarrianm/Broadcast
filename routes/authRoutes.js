const passport = require("passport");

module.exports = (app) => {
  //route that a user gets sent to when loggin in with google profile
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );
  //route to check the user is logged in correctly
  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect('/surveys')
    }
  );

  //logout route

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send(req.user);
  });
  // route confirming current user˝
  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
