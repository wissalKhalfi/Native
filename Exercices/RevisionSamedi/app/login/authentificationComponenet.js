"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var User_1 = require("../User/User");
var AuthentificationComponent = (function () {
    function AuthentificationComponent(router) {
        this.router = router;
        this.userLog = new User_1.User("pilot@airport.tn", "");
    }
    //email:string= "espritmobile@esprit.tn" ;
    AuthentificationComponent.prototype.AuthUser = function () {
        //this.router.navigate(["prods"]);
        //  alert("You are logged in with "+ this.userLog.email+" password: "+this.userLog.password);
        this.router.navigate(["flightsSchedule", this.userLog.email]);
    };
    AuthentificationComponent.prototype.RegisterP = function () {
        this.router.navigate(["register"]);
    };
    AuthentificationComponent = __decorate([
        core_1.Component({
            selector: "authentification",
            templateUrl: "login/auth.html",
            styleUrls: ["login/login-common.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AuthentificationComponent);
    return AuthentificationComponent;
}());
exports.AuthentificationComponent = AuthentificationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGlmaWNhdGlvbkNvbXBvbmVuZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoZW50aWZpY2F0aW9uQ29tcG9uZW5ldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3pDLHFCQUFxQixjQUFjLENBQUMsQ0FBQTtBQVFwQztJQUdBLG1DQUFxQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQURuQyxZQUFPLEdBQU8sSUFBSSxXQUFJLENBQUMsa0JBQWtCLEVBQUMsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDO0lBQ3JDLDBDQUEwQztJQUUzQyw0Q0FBUSxHQUFSO1FBQ0csa0NBQWtDO1FBQ3JDLDZGQUE2RjtRQUczRixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGlCQUFpQixFQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBQ0QsNkNBQVMsR0FBVDtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBdEJGO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsV0FBVyxFQUFFLGlCQUFpQjtZQUM5QixTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztTQUd4QyxDQUFDOztpQ0FBQTtJQWlCRixnQ0FBQztBQUFELENBQUMsQUFoQkQsSUFnQkM7QUFoQlksaUNBQXlCLDRCQWdCckMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL1VzZXIvVXNlclwiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiYXV0aGVudGlmaWNhdGlvblwiLFxuICAgIHRlbXBsYXRlVXJsOiBcImxvZ2luL2F1dGguaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wibG9naW4vbG9naW4tY29tbW9uLmNzc1wiXVxuXG5cbn0pXG5leHBvcnQgY2xhc3MgQXV0aGVudGlmaWNhdGlvbkNvbXBvbmVudCB7XG5cbnVzZXJMb2c6VXNlcj0gbmV3IFVzZXIoXCJwaWxvdEBhaXJwb3J0LnRuXCIsXCJcIik7XG5jb25zdHJ1Y3RvciggcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcil7fVxuIC8vZW1haWw6c3RyaW5nPSBcImVzcHJpdG1vYmlsZUBlc3ByaXQudG5cIiA7XG5cbkF1dGhVc2VyKCl7XG4gICAvL3RoaXMucm91dGVyLm5hdmlnYXRlKFtcInByb2RzXCJdKTtcbi8vICBhbGVydChcIllvdSBhcmUgbG9nZ2VkIGluIHdpdGggXCIrIHRoaXMudXNlckxvZy5lbWFpbCtcIiBwYXNzd29yZDogXCIrdGhpcy51c2VyTG9nLnBhc3N3b3JkKTtcblxuXG4gIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImZsaWdodHNTY2hlZHVsZVwiLHRoaXMudXNlckxvZy5lbWFpbF0pO1xuIH1cbiBSZWdpc3RlclAoKXtcbiAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInJlZ2lzdGVyXCJdKTtcbiB9XG59XG4iXX0=