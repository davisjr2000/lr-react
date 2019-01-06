var path = require('path');
var express = require('express');

var app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.set('port', process.env.PORT || 8080);
app.use(require('webpack-dev-middleware')(compiler, {
      noInfo: true,
      publicPath: config.output.path
    }));

var server = app.listen(app.get('port'), function() {
  console.log('listening on port ', server.address().port);
});
