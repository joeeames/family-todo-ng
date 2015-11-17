var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var todoService_1 = require('./todoService');
var identityService_1 = require('./identityService');
var header_1 = require('./header');
var routes_1 = require('./routes');
console.log(2, routes_1.AppRoutes);
var App = (function () {
    function App() {
        this.routes = new routes_1.AppRoutes().routes;
    }
    App = __decorate([
        angular2_1.Component({
            selector: 'app',
        }),
        angular2_1.View({
            template: "\n    <div>\n      <header></header>\n      <main>\n        <router-outlet></router-outlet>\n      </main>\n\n    <a [router-link]=\"[routes.Home.as]\" class=\"router-link\">Home</a>\n    <a [router-link]=\"[routes.Login.as]\" class=\"router-link\">Login</a>\n    <router-outlet></router-outlet>\n          </div>\n  ",
            directives: [header_1.Header, router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig(routes_1.APP_ROUTES), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
exports.App = App;
// console.log('approutes', new AppRoutes());
angular2_1.bootstrap(App, [router_1.ROUTER_PROVIDERS, todoService_1.TodoService, identityService_1.IdentityService, routes_1.AppRoutes]);
//# sourceMappingURL=app.js.map