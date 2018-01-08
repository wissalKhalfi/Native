"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var taskService_1 = require("./taskService");
var task_1 = require("./task");
var tachesComponent = (function () {
    function tachesComponent(nameActivatedRoute, service) {
        var _this = this;
        this.nameActivatedRoute = nameActivatedRoute;
        this.service = service;
        this.tache = new task_1.task();
        nameActivatedRoute.params.subscribe(function (params) { return [_this.userName = params['name']]; });
    }
    tachesComponent.prototype.ngOnInit = function () {
        this.tasksList = this.service.getTasks();
        // console.log("id: "+  this.tasks[0][0] +"  titre: "+this.tasks[0][1]+"  desc: "+this.tasks[0][2]   );
    };
    tachesComponent.prototype.addTask = function () {
        this.service.insertTask(this.tache);
    };
    tachesComponent.prototype.deleteAll = function () {
        this.service.deleteAll();
    };
    tachesComponent = __decorate([
        core_1.Component({
            selector: "taches",
            templateUrl: "ToDo/taches.html",
            styleUrls: [""]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, taskService_1.TaskService])
    ], tachesComponent);
    return tachesComponent;
}());
exports.tachesComponent = tachesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFjaGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGFjaGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBaUMsZUFBZSxDQUFDLENBQUE7QUFDakQsdUJBQXNDLGlCQUFpQixDQUFDLENBQUE7QUFDeEQsNEJBQTRCLGVBQWUsQ0FBQyxDQUFBO0FBQzVDLHFCQUFxQixRQUFRLENBQUMsQ0FBQTtBQU05QjtJQVNBLHlCQUFvQixrQkFBa0MsRUFBVSxPQUFtQjtRQVRuRixpQkFvQ0M7UUEzQm1CLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBZ0I7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBUGhGLFVBQUssR0FBTSxJQUFJLFdBQUksRUFBRSxDQUFDO1FBU3ZCLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFNLElBQUcsT0FBQSxDQUFDLEtBQUksQ0FBQyxRQUFRLEdBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQTlCLENBQThCLENBQUMsQ0FBQztJQUdoRixDQUFDO0lBQ0Qsa0NBQVEsR0FBUjtRQUNBLElBQUksQ0FBQyxTQUFTLEdBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM5Qix1R0FBdUc7SUFFaEgsQ0FBQztJQUVBLGlDQUFPLEdBQVA7UUFDQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFckMsQ0FBQztJQUVGLG1DQUFTLEdBQVQ7UUFFSSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBSzdCLENBQUM7SUF0Q0Q7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLGtCQUFrQjtZQUMvQixTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUM7U0FDbEIsQ0FBQzs7dUJBQUE7SUFxQ0Ysc0JBQUM7QUFBRCxDQUFDLEFBcENELElBb0NDO0FBcENZLHVCQUFlLGtCQW9DM0IsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCxPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFRhc2tTZXJ2aWNlIH0gZnJvbSBcIi4vdGFza1NlcnZpY2VcIjtcclxuaW1wb3J0IHsgdGFzayB9IGZyb20gXCIuL3Rhc2tcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJ0YWNoZXNcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcIlRvRG8vdGFjaGVzLmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyB0YWNoZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgIHVzZXJOYW1lOiBzdHJpbmc7XHJcbiAgIHRhY2hlOnRhc2s9bmV3IHRhc2soKTtcclxuICAgdGFza3NMaXN0OnRhc2tbXTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5jb25zdHJ1Y3Rvcihwcml2YXRlIG5hbWVBY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgc2VydmljZTpUYXNrU2VydmljZSlcclxueyBcclxuICBuYW1lQWN0aXZhdGVkUm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKT0+W3RoaXMudXNlck5hbWU9cGFyYW1zWyduYW1lJ11dKTtcclxuXHJcblxyXG59XHJcbm5nT25Jbml0KCl7XHJcbnRoaXMudGFza3NMaXN0PXRoaXMuc2VydmljZS5nZXRUYXNrcygpO1xyXG4gICAgICAgICAvLyBjb25zb2xlLmxvZyhcImlkOiBcIisgIHRoaXMudGFza3NbMF1bMF0gK1wiICB0aXRyZTogXCIrdGhpcy50YXNrc1swXVsxXStcIiAgZGVzYzogXCIrdGhpcy50YXNrc1swXVsyXSAgICk7XHJcblxyXG59XHJcbiBcclxuIGFkZFRhc2soKVxyXG4ge3RoaXMuc2VydmljZS5pbnNlcnRUYXNrKHRoaXMudGFjaGUpO1xyXG5cclxuIH1cclxuXHJcbmRlbGV0ZUFsbCgpXHJcbntcclxuICAgIHRoaXMuc2VydmljZS5kZWxldGVBbGwoKTtcclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG59XHJcblxyXG5cclxuIl19