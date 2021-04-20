const { createProxyMiddleware } = require("http-proxy-middleware");

const BACKEND_URL = process.env.BACKEND_URL;

module.exports = function (app) {
  app.use(
    "/movies",
    createProxyMiddleware({
      target: BACKEND_URL,
      changeOrigin: true,
    })
  );
};
