const { createProxyMiddleware } = require('http-proxy-middleware');
const proxy = {
    target: 'https://excitel-countries.azurewebsites.net',
    changeOrigin: true
}
module.exports = function(app) {
    app.use(
        '/countries',
        createProxyMiddleware(proxy)
    );
};