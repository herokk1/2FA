const speakeasy = require("speakeasy");

var verified = speakeasy.totp.verify({
  secret: "7yTKnSUGt)krh$)UD<62@k&eQw>}n<Tb",
  encoding: "ascii",
  token: "646248",
});

console.log(verified);
