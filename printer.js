//print out message
function printMessage(username, badgeCount, points, codeLanguage) {
  var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in " + codeLanguage + ".";
  console.log(message);
}

//print out error messages
function printError(error){
  console.error(error.message);
}

module.exports.printMessage = printMessage;
module.exports.printError = printError;
