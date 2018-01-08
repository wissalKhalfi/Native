"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var User_1 = require("../User/User");
var ServiceUser_1 = require("../User/ServiceUser");
var RegisterComponent = (function () {
    function RegisterComponent(service, router) {
        this.service = service;
        this.router = router;
        this.userRegistred = new User_1.User("pilot@airport.tn", "");
    }
    //email:string= "espritmobile@esprit.tn" ;
    RegisterComponent.prototype.Registration = function () {
        if (this.userRegistred.email == "") {
            alert("Email must be filled");
        }
        else if (this.userRegistred.password == "") {
            alert("Password must be filled");
        }
        else {
            this.service.insertUser(this.userRegistred);
            this.service.getAll();
            this.router.navigate([""]);
        }
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: "register",
            templateUrl: "register/register.html"
        }), 
        __metadata('design:paramtypes', [ServiceUser_1.ServiceUser, router_1.Router])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZWdpc3Rlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3pDLHFCQUFxQixjQUFjLENBQUMsQ0FBQTtBQUNwQyw0QkFBMEIscUJBQXFCLENBQUMsQ0FBQTtBQU9oRDtJQUdBLDJCQUFxQixPQUFtQixFQUFTLE1BQWM7UUFBMUMsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVE7UUFEL0Qsa0JBQWEsR0FBTyxJQUFJLFdBQUksQ0FBQyxrQkFBa0IsRUFBQyxFQUFFLENBQUMsQ0FBQztJQUNjLENBQUM7SUFDbEUsMENBQTBDO0lBRzFDLHdDQUFZLEdBQVo7UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQSxDQUFDO1lBQ2xDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ2hDLENBQUM7UUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUEsQ0FBQztZQUMxQyxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUNuQyxDQUFDO1FBRUosSUFBSSxDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0IsQ0FBQztJQUVBLENBQUM7SUE1QkY7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLHdCQUF3QjtTQUd4QyxDQUFDOzt5QkFBQTtJQXdCRix3QkFBQztBQUFELENBQUMsQUF2QkQsSUF1QkM7QUF2QlkseUJBQWlCLG9CQXVCN0IsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL1VzZXIvVXNlclwiO1xuaW1wb3J0IHtTZXJ2aWNlVXNlcn0gZnJvbSBcIi4uL1VzZXIvU2VydmljZVVzZXJcIjtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInJlZ2lzdGVyXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwicmVnaXN0ZXIvcmVnaXN0ZXIuaHRtbFwiXG5cblxufSlcbmV4cG9ydCBjbGFzcyBSZWdpc3RlckNvbXBvbmVudCB7XG5cbnVzZXJSZWdpc3RyZWQ6VXNlcj0gbmV3IFVzZXIoXCJwaWxvdEBhaXJwb3J0LnRuXCIsXCJcIik7XG5jb25zdHJ1Y3RvciggcHJpdmF0ZSBzZXJ2aWNlOlNlcnZpY2VVc2VyLHByaXZhdGUgcm91dGVyOiBSb3V0ZXIgKXt9XG4gLy9lbWFpbDpzdHJpbmc9IFwiZXNwcml0bW9iaWxlQGVzcHJpdC50blwiIDtcblxuXG4gUmVnaXN0cmF0aW9uKCl7XG4gICBpZiAodGhpcy51c2VyUmVnaXN0cmVkLmVtYWlsID09IFwiXCIpe1xuICAgICBhbGVydChcIkVtYWlsIG11c3QgYmUgZmlsbGVkXCIpO1xuICAgfVxuICAgZWxzZSBpZiAodGhpcy51c2VyUmVnaXN0cmVkLnBhc3N3b3JkID09IFwiXCIpe1xuICAgICBhbGVydChcIlBhc3N3b3JkIG11c3QgYmUgZmlsbGVkXCIpO1xuICAgfVxuXG5lbHNlIHtcblxuICAgdGhpcy5zZXJ2aWNlLmluc2VydFVzZXIodGhpcy51c2VyUmVnaXN0cmVkKTtcbiAgIHRoaXMuc2VydmljZS5nZXRBbGwoKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJcIl0pO1xufVxuXG4gfVxufVxuIl19