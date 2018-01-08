"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_1 = require("../user/user");
var loginComponent = (function () {
    function loginComponent(router) {
        this.router = router;
        this.user = new user_1.user("sarra", "123");
    }
    loginComponent.prototype.connect = function () {
        if (this.user.name == "") {
            alert("You're logged in with " + this.user.name);
        }
        console.log(this.user.name);
        this.router.navigate(["taches", this.user.name]);
        /*this.route.navigate(["home"],{queryParams :
           {email:this.user.email ,
             password:this.user.password}
           });*/
        // this.route.navigate(["prods"]);
    };
    loginComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "login/login.html",
            styleUrls: ["login/login.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], loginComponent);
    return loginComponent;
}());
exports.loginComponent = loginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHVCQUF1QixpQkFDdkIsQ0FBQyxDQUR1QztBQUN4QyxxQkFBb0IsY0FFcEIsQ0FBQyxDQUZpQztBQU9sQztJQUVBLHdCQUFvQixNQUFhO1FBQWIsV0FBTSxHQUFOLE1BQU0sQ0FBTztRQUQ3QixTQUFJLEdBQVEsSUFBSSxXQUFJLENBQUMsT0FBTyxFQUFDLEtBQUssQ0FBQyxDQUFDO0lBSXhDLENBQUM7SUFFQSxnQ0FBTyxHQUFQO1FBQ0ksRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUUsRUFBRSxDQUFDLENBQ3RCLENBQUM7WUFDRixLQUFLLENBQUMsd0JBQXdCLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUUsQ0FBQztRQUNwRCxDQUFDO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNqRDs7O2dCQUdRO1FBQ04sa0NBQWtDO0lBQ2xDLENBQUM7SUF4Qkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLGtCQUFrQjtZQUMvQixTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztTQUNqQyxDQUFDOztzQkFBQTtJQXNCRixxQkFBQztBQUFELENBQUMsQUFyQkQsSUFxQkM7QUFyQlksc0JBQWMsaUJBcUIxQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiXHJcbmltcG9ydCB7IHVzZXJ9IGZyb20gXCIuLi91c2VyL3VzZXJcIlxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJteS1hcHBcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcImxvZ2luL2xvZ2luLmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wibG9naW4vbG9naW4uY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBsb2dpbkNvbXBvbmVudCB7XHJcbiAgICB1c2VyIDogdXNlcj1uZXcgdXNlcihcInNhcnJhXCIsXCIxMjNcIik7XHJcbmNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOlJvdXRlcilcclxue1xyXG5cclxufVxyXG5cclxuIGNvbm5lY3QoKXtcclxuICAgICBpZih0aGlzLnVzZXIubmFtZT09XCJcIilcclxuICAgICB7XHJcbiAgICBhbGVydChcIllvdSdyZSBsb2dnZWQgaW4gd2l0aCBcIit0aGlzLnVzZXIubmFtZSApO1xyXG59XHJcbmNvbnNvbGUubG9nKHRoaXMudXNlci5uYW1lKTtcclxuICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1widGFjaGVzXCIsdGhpcy51c2VyLm5hbWVdKTtcclxuICAvKnRoaXMucm91dGUubmF2aWdhdGUoW1wiaG9tZVwiXSx7cXVlcnlQYXJhbXMgOlxyXG4gICAgIHtlbWFpbDp0aGlzLnVzZXIuZW1haWwgLFxyXG4gICAgICAgcGFzc3dvcmQ6dGhpcy51c2VyLnBhc3N3b3JkfVxyXG4gICAgIH0pOyovXHJcbiAgICAvLyB0aGlzLnJvdXRlLm5hdmlnYXRlKFtcInByb2RzXCJdKTtcclxuICAgIH1cclxuICBcclxufVxyXG5cclxuXHJcbiJdfQ==