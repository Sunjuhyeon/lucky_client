const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
      '/mail',
      createProxyMiddleware({
        target: 'http://localhost:8001',
        changeOrigin: true,
      })
      // createProxyMiddleware("/api", {
      //     target: "http://localhost:3002",
      //     changeOrigin: true
      // })
    );
};