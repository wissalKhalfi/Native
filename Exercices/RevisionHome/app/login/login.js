"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var User_1 = require("../User/User");
var LoginComponent = (function () {
    function LoginComponent(router) {
        this.router = router;
        this.user = new User_1.User("espritmobile@esprit.tn", "");
    }
    LoginComponent.prototype.Login = function () {
        alert("Welcome" + this.user.email);
        //   this.router.navigate(["prods"]);
        //alert("You are logged in with "+ this.user.email+" password: "+this.user.password);
        //this.router.navigate(["home",this.user.email]);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "login",
            templateUrl: "login/login.html",
            styleUrls: ["login/login-common.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3pDLHFCQUFxQixjQUFjLENBQUMsQ0FBQTtBQU9wQztJQUdFLHdCQUFxQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUZuQyxTQUFJLEdBQU8sSUFBSSxXQUFJLENBQUMsd0JBQXdCLEVBQUMsRUFBRSxDQUFDLENBQUM7SUFFWixDQUFDO0lBRXJDLDhCQUFLLEdBQUw7UUFDSSxLQUFLLENBQUMsU0FBUyxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEMscUNBQXFDO1FBQ3BDLHFGQUFxRjtRQUNsRixpREFBaUQ7SUFDcEQsQ0FBQztJQWZKO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFdBQVcsRUFBRSxrQkFBa0I7WUFDL0IsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7U0FDeEMsQ0FBQzs7c0JBQUE7SUFhRixxQkFBQztBQUFELENBQUMsQUFaRCxJQVlDO0FBWlksc0JBQWMsaUJBWTFCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi9Vc2VyL1VzZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibG9naW5cIixcbiAgICB0ZW1wbGF0ZVVybDogXCJsb2dpbi9sb2dpbi5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCJsb2dpbi9sb2dpbi1jb21tb24uY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IHtcbiAgdXNlcjpVc2VyPSBuZXcgVXNlcihcImVzcHJpdG1vYmlsZUBlc3ByaXQudG5cIixcIlwiKTtcblxuICBjb25zdHJ1Y3RvciggcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcil7fVxuXG4gICBMb2dpbigpe1xuICAgICAgIGFsZXJ0KFwiV2VsY29tZVwiK3RoaXMudXNlci5lbWFpbCk7XG4gIC8vICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wicHJvZHNcIl0pO1xuICAgLy9hbGVydChcIllvdSBhcmUgbG9nZ2VkIGluIHdpdGggXCIrIHRoaXMudXNlci5lbWFpbCtcIiBwYXNzd29yZDogXCIrdGhpcy51c2VyLnBhc3N3b3JkKTtcbiAgICAgIC8vdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiaG9tZVwiLHRoaXMudXNlci5lbWFpbF0pO1xuICAgfVxuXG59XG4iXX0=