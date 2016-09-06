"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.onpress = function (number) {
        var element = document.getElementById(number);
        var div = document.getElementsByClassName("active");
        div[0].className = "";
        element.className = "active";
    };
    SidebarComponent = __decorate([
        core_1.Component({
            selector: 'sidebar',
            directives: [router_1.ROUTER_DIRECTIVES],
            template: "<aside class=\"main-sidebar\">\n    <!-- sidebar: style can be found in sidebar.less -->\n    <section class=\"sidebar\">\n      <!-- Sidebar user panel -->\n      <div class=\"user-panel\">\n        <div class=\"image\">\n          <img src=\"dist/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n        </div>\n      </div>\n      <!-- sidebar menu: : style can be found in sidebar.less -->\n      <ul class=\"sidebar-menu\">\n        <li id=\"1\" [routerLink]=\"['']\" class=\"active\" (click)=\"onpress(1)\"><a ><span>Dashboard</span></a></li>\n        <li id=\"2\" [routerLink]=\"['/users']\" class=\"\" (click)=\"onpress(2)\"><a ><span>Users</span></a></li>\n        <li id=\"3\" [routerLink]=\"['/questions']\" class=\"\" (click)=\"onpress(3)\"><a ><span>Questions</span></a></li>\n        <li><a ><span>Account</span></a></li>\n        <li><a ><span>Payment</span></a></li>\n        <li><a ><span>Logout</span></a></li>\n        \n      </ul>\n    </section>\n    <!-- /.sidebar -->\n  </aside>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;
//# sourceMappingURL=sidebar.component.js.map