const proxy = require("http-proxy-middleware");
module.exports = function(app) {
  if (process.env.REACT_APP_WITH_DOCKER) {
    app.use(
      '/senders',
      proxy({
        target: 'http://money-challenge-server:5001',
        changeOrigin: true,
      })
    );
  } else {
    app.use(
      '/senders',
      proxy({
        target: 'http://localhost:5001',
        changeOrigin: true,
      })
    );
  }
};