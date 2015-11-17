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
var routes_1 = require('./routes');
var identityService_1 = require('./identityService');
var Login = (function () {
    function Login(identityService, router, appRoutes) {
        this.identityService = identityService;
        this.router = router;
        this.appRoutes = appRoutes;
    }
    Login.prototype.setIdentity = function (userName) {
        this.identityService.setIdentity(userName);
        console.log('identity set to ' + userName);
        // this.router.navigate([this.appRoutes.routes.Home.as])
    };
    Login = __decorate([
        angular2_1.Component({
            selector: 'login',
        }),
        angular2_1.View({
            template: "\n    <h1>This is the login page</h1>\n    <h2>Who are you?</h2>\n    <button (click)=\"setIdentity('Jen')\">Jen</button>\n    <button (click)=\"setIdentity('Joe')\">Joe</button>\n  ",
            directives: []
        }), 
        __metadata('design:paramtypes', [identityService_1.IdentityService, router_1.Router, routes_1.AppRoutes])
    ], Login);
    return Login;
})();
exports.Login = Login;
//# sourceMappingURL=login.js.map