var express = require('express')
var app = express();

PORT = process.env.PORT || 4400
DIRECTORY = __dirname 
app.use(express.static(DIRECTORY))

app.get('/', function(request, response) {
  response.sendFile(DIRECTORY + '/index.html')
});


app.listen(PORT, function(error) {
  if (error) {
	console.error(error);
  } else {
	console.info("==> 🌎  Listening on port %s for %s. Visit http://localhost:%s/ in your browser.", PORT, __dirname, PORT);
  }
});