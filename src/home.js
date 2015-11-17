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
var todoService_1 = require("./todoService");
var router_1 = require('angular2/router');
var Joe = require('./routes');
// import {IdentityService} from './moreRoutes';
var identityService_1 = require('./identityService');
console.log(1, Joe);
var Home = (function () {
    function Home(todoService, identityService, router, routes) {
        this.identityService = identityService;
        this.router = router;
        this.routes = routes;
        this.todos = todoService.todos;
        // if not logged in, redirect
        console.log('logged in', !this.identityService.isLoggedIn());
        if (!this.identityService.isLoggedIn()) {
        }
    }
    Home = __decorate([
        angular2_1.Component({
            selector: 'home',
        }),
        angular2_1.View({
            template: "\n      <h1>Family Todo App</h1>\n      <div *ng-for=\"#item of todos\">\n        item: {{item.title}}\n      </div>\n\n  ",
            directives: [angular2_1.NgFor]
        }), 
        __metadata('design:paramtypes', [todoService_1.TodoService, identityService_1.IdentityService, router_1.Router, Object])
    ], Home);
    return Home;
})();
exports.Home = Home;
//# sourceMappingURL=home.js.map