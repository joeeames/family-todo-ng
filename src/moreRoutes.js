exports.IDENTITIES = {
    Jen: { name: 'Jen', id: 1 },
    Joe: { name: 'Joe', id: 2 }
};
var IdentityService = (function () {
    function IdentityService() {
    }
    IdentityService.prototype.setIdentity = function (userName) {
        this.currentIdentity = exports.IDENTITIES[userName];
    };
    IdentityService.prototype.isLoggedIn = function () {
        return !!this.currentIdentity;
    };
    return IdentityService;
})();
exports.IdentityService = IdentityService;
//# sourceMappingURL=moreRoutes.js.map