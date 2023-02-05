const auth = require("express").Router();

const controller = require("../controllers/auth.controller");
const { verifySignUp, authJwt } = require("../middleware");

auth.post("/register", [verifySignUp.checkDuplicateUsernameOrEmail], controller.signUp);
// auth.post("/login", controller.login);
auth.get('/login', function(req, res){
    res.render('login');
  });

module.exports = auth;
