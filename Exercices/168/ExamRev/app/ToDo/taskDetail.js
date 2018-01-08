"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var taskService_1 = require("./taskService");
var task_1 = require("./task");
var tachesDetComponent = (function () {
    //tasksList:task[];
    function tachesDetComponent(nameActivatedRoute, service) {
        this.nameActivatedRoute = nameActivatedRoute;
        this.service = service;
        // userName: string;
        this.tache = new task_1.task();
    }
    tachesDetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nameActivatedRoute.params.subscribe(function (params) { return _this.tache = _this.service.getTask(params["id"]); });
        // console.log("id: "+  this.tasks[0][0] +"  titre: "+this.tasks[0][1]+"  desc: "+this.tasks[0][2]   );
    };
    tachesDetComponent.prototype.deleteOne = function () {
        this.service.deleteOneItem(this.tache.id);
    };
    tachesDetComponent = __decorate([
        core_1.Component({
            selector: "taches",
            templateUrl: "ToDo/taskDetails.html",
            styleUrls: [""]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, taskService_1.TaskService])
    ], tachesDetComponent);
    return tachesDetComponent;
}());
exports.tachesDetComponent = tachesDetComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFza0RldGFpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRhc2tEZXRhaWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUFpQyxlQUFlLENBQUMsQ0FBQTtBQUNqRCx1QkFBc0MsaUJBQWlCLENBQUMsQ0FBQTtBQUN4RCw0QkFBNEIsZUFBZSxDQUFDLENBQUE7QUFDNUMscUJBQXFCLFFBQVEsQ0FBQyxDQUFBO0FBTTlCO0lBR0csbUJBQW1CO0lBTXRCLDRCQUFvQixrQkFBa0MsRUFBVSxPQUFtQjtRQUEvRCx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQWdCO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQVJqRixvQkFBb0I7UUFDbkIsVUFBSyxHQUFNLElBQUksV0FBSSxFQUFFLENBQUM7SUFXekIsQ0FBQztJQUNELHFDQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhBLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTSxJQUFFLE9BQUEsS0FBSSxDQUFDLEtBQUssR0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBN0MsQ0FBNkMsQ0FBRSxDQUFDO1FBQ3pGLHVHQUF1RztJQUVoSCxDQUFDO0lBQ0Qsc0NBQVMsR0FBVDtRQUdJLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFNOUMsQ0FBQztJQWpDRDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQztTQUNsQixDQUFDOzswQkFBQTtJQWtDRix5QkFBQztBQUFELENBQUMsQUFqQ0QsSUFpQ0M7QUFqQ1ksMEJBQWtCLHFCQWlDOUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCxPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFRhc2tTZXJ2aWNlIH0gZnJvbSBcIi4vdGFza1NlcnZpY2VcIjtcclxuaW1wb3J0IHsgdGFzayB9IGZyb20gXCIuL3Rhc2tcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJ0YWNoZXNcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcIlRvRG8vdGFza0RldGFpbHMuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIHRhY2hlc0RldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICAvLyB1c2VyTmFtZTogc3RyaW5nO1xyXG4gICB0YWNoZTp0YXNrPW5ldyB0YXNrKCk7XHJcbiAgIC8vdGFza3NMaXN0OnRhc2tbXTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5jb25zdHJ1Y3Rvcihwcml2YXRlIG5hbWVBY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgc2VydmljZTpUYXNrU2VydmljZSlcclxueyBcclxuXHJcblxyXG59XHJcbm5nT25Jbml0KCl7XHJcblx0dGhpcy5uYW1lQWN0aXZhdGVkUm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXM9PnRoaXMudGFjaGU9dGhpcy5zZXJ2aWNlLmdldFRhc2socGFyYW1zW1wiaWRcIl0pICk7XHJcbiAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaWQ6IFwiKyAgdGhpcy50YXNrc1swXVswXSArXCIgIHRpdHJlOiBcIit0aGlzLnRhc2tzWzBdWzFdK1wiICBkZXNjOiBcIit0aGlzLnRhc2tzWzBdWzJdICAgKTtcclxuXHJcbn1cclxuZGVsZXRlT25lKClcclxue1xyXG5cclxuICAgIHRoaXMuc2VydmljZS5kZWxldGVPbmVJdGVtKHRoaXMudGFjaGUuaWQpO1xyXG4gICAgXHJcblxyXG5cclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG59XHJcblxyXG5cclxuIl19