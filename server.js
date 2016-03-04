import express from 'express';
import http from 'http';
import io from 'socket.io';

// middlewares
import reactRouterMiddleware from './server/middleware/reactRouter';

// routes
import serverRoute from './server/route';

const app = express();

const env = process.env.NODE_ENV || 'development';

if (env === 'development') {
  const webpack = require('webpack');
  const config = require('./webpack.config.development.babel');
  const compiler = webpack(config);

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));

  console.log('dev mode with hot reload');
}

app.use('/static', express.static('./build'));
app.use(serverRoute);
app.use(reactRouterMiddleware());

var server = http.Server(app);
var socketServer = io(server);

server.listen(3000, () => console.log('Go to localhost:3000'));

socketServer.on('connection', function (socket) {
  socket.on('newFrame', function (img) {
    socket.emit('setFrame', img);
  })
});
