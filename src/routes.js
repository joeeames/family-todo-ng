var home_1 = require('./home');
var login_1 = require('./login');
var AppRoutes = (function () {
    function AppRoutes() {
        this.routes = {
            Home: { path: '/', as: 'Home', component: home_1.Home },
            Login: { path: '/login', as: 'Login', component: login_1.Login }
        };
    }
    return AppRoutes;
})();
exports.AppRoutes = AppRoutes;
exports.APP_ROUTES = [
    { path: '/', as: 'Home', component: home_1.Home },
    { path: '/login', as: 'Login', component: login_1.Login }
];
//# sourceMappingURL=routes.js.map