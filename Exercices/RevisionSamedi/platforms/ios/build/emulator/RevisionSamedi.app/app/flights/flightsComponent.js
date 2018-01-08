"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var flight_1 = require("../flight/flight");
var ServiceFlights_1 = require("../flight/ServiceFlights");
var FlightsComponent = (function () {
    function FlightsComponent(nameActivatedRoute, service) {
        var _this = this;
        this.nameActivatedRoute = nameActivatedRoute;
        this.service = service;
        this.vol = new flight_1.flight();
        nameActivatedRoute.params.subscribe(function (params) { return [_this.userName = params['userName']]; });
    }
    FlightsComponent.prototype.ngOnInit = function () {
        this.flightsList = this.service.getFlights();
        console.log('welcome abord');
        // console.log("id: "+  this.tasks[0][0] +"  titre: "+this.tasks[0][1]+"  desc: "+this.tasks[0][2]   );
    };
    FlightsComponent.prototype.ajouterFlight = function () {
        this.service.insertFlight(this.vol);
    };
    FlightsComponent.prototype.deleteAll = function () {
        this.service.deleteAll();
    };
    FlightsComponent = __decorate([
        core_1.Component({
            selector: "flights",
            templateUrl: "flights/flights.html",
            styleUrls: [""]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, ServiceFlights_1.FlightService])
    ], FlightsComponent);
    return FlightsComponent;
}());
exports.FlightsComponent = FlightsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxpZ2h0c0NvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZsaWdodHNDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUFpQyxlQUFlLENBQUMsQ0FBQTtBQUNqRCx1QkFBc0MsaUJBQWlCLENBQUMsQ0FBQTtBQUN4RCx1QkFBdUIsa0JBQWtCLENBQUMsQ0FBQTtBQUMxQywrQkFBNEIsMEJBQTBCLENBQUMsQ0FBQTtBQU12RDtJQVNBLDBCQUFvQixrQkFBa0MsRUFBVSxPQUFxQjtRQVRyRixpQkF3Q0M7UUEvQm1CLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBZ0I7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFjO1FBUGxGLFFBQUcsR0FBUSxJQUFJLGVBQU0sRUFBRSxDQUFDO1FBU3pCLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFNLElBQUcsT0FBQSxDQUFDLEtBQUksQ0FBQyxRQUFRLEdBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQWxDLENBQWtDLENBQUMsQ0FBQztJQUdwRixDQUFDO0lBQ0QsbUNBQVEsR0FBUjtRQUVBLElBQUksQ0FBQyxXQUFXLEdBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3BCLHVHQUF1RztJQUVoSCxDQUFDO0lBRUQsd0NBQWEsR0FBYjtRQUdHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUV0QyxDQUFDO0lBRUYsb0NBQVMsR0FBVDtRQUVDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7SUFLMUIsQ0FBQztJQTFDRDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQztTQUNsQixDQUFDOzt3QkFBQTtJQXlDRix1QkFBQztBQUFELENBQUMsQUF4Q0QsSUF3Q0M7QUF4Q1ksd0JBQWdCLG1CQXdDNUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCxPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyLEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgZmxpZ2h0IH0gZnJvbSBcIi4uL2ZsaWdodC9mbGlnaHRcIjtcbmltcG9ydCB7RmxpZ2h0U2VydmljZX0gZnJvbSBcIi4uL2ZsaWdodC9TZXJ2aWNlRmxpZ2h0c1wiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiZmxpZ2h0c1wiLFxuICAgIHRlbXBsYXRlVXJsOiBcImZsaWdodHMvZmxpZ2h0cy5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCJcIl1cbn0pXG5leHBvcnQgY2xhc3MgRmxpZ2h0c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgIHVzZXJOYW1lOiBzdHJpbmc7XG4gICB2b2w6ZmxpZ2h0PW5ldyBmbGlnaHQoKTtcbiAgIGZsaWdodHNMaXN0OmZsaWdodFtdO1xuXG5cblxuXG5cbmNvbnN0cnVjdG9yKHByaXZhdGUgbmFtZUFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBzZXJ2aWNlOkZsaWdodFNlcnZpY2UpXG57XG4gIG5hbWVBY3RpdmF0ZWRSb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpPT5bdGhpcy51c2VyTmFtZT1wYXJhbXNbJ3VzZXJOYW1lJ11dKTtcblxuXG59XG5uZ09uSW5pdCgpe1xuXG50aGlzLmZsaWdodHNMaXN0PXRoaXMuc2VydmljZS5nZXRGbGlnaHRzKCk7XG5jb25zb2xlLmxvZygnd2VsY29tZSBhYm9yZCcpO1xuICAgICAgICAgLy8gY29uc29sZS5sb2coXCJpZDogXCIrICB0aGlzLnRhc2tzWzBdWzBdICtcIiAgdGl0cmU6IFwiK3RoaXMudGFza3NbMF1bMV0rXCIgIGRlc2M6IFwiK3RoaXMudGFza3NbMF1bMl0gICApO1xuXG59XG5cbmFqb3V0ZXJGbGlnaHQoKVxuIHtcblxuICAgdGhpcy5zZXJ2aWNlLmluc2VydEZsaWdodCh0aGlzLnZvbCk7XG5cbiB9XG5cbmRlbGV0ZUFsbCgpXG57XG4gdGhpcy5zZXJ2aWNlLmRlbGV0ZUFsbCgpO1xuXG5cblxuXG59XG5cblxufVxuIl19