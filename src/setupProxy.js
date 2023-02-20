const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/naver", {
      target: "https://nid.naver.com",
      pathRewrite: {
        "^/naver": "",
      },
      changeOrigin: true,
    })
  );

  app.use(
    createProxyMiddleware("/openapi", {
      target: "https://openapi.naver.com",
      pathRewrite: {
        "^/openapi": "",
      },
      changeOrigin: true,
    })
  );

  app.use(
    createProxyMiddleware("/aladin", {
      target: "http://www.aladin.co.kr",
      pathRewrite: {
        "^/aladin": "",
      },
      changeOrigin: true,
    })
  );
};
