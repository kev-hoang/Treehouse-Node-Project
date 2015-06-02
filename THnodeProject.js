//Problem: We need a simple way to look at a user's badge count and JavaScript points
//Solution: Use Node.js to connect to Treehouse's API to get profile informationto print out.

var profile = require("./profile");
var language = process.argv[2];
var users = process.argv.slice(3);

for (var i = 0; i < users.length; i++){
  profile.get(users[i],language);
}
