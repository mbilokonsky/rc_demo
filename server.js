var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');

var app = express();
var compiler = webpack(config);

app.use(express.static('public'));
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true
}));

app.post('/save', function(req, res) {
  if (Math.random() > 0.1) {
    res.json({result: "ok"});
  } else {
    res.status(500).end();
  }

});

app.listen(8080, "127.0.0.1", function(err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Listening at http://localhost:8080');
});
