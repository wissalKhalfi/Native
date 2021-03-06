"use strict";
var core_1 = require("@angular/core");
var Sqlite = require("nativescript-sqlite");
var FlightService = (function () {
    function FlightService() {
        var _this = this;
        (new Sqlite("my.db")).then(function (db) {
            db.execSQL("CREATE TABLE IF NOT EXISTS " +
                "flight (id INTEGER PRIMARY KEY AUTOINCREMENT," +
                " titre TEXT, etat TEXT, date TEXT)")
                .then(function (id) {
                _this.database = db;
                _this.getAll();
            }, function (error) {
                console.log("CREATE TABLE ERROR", error);
            });
        }, function (error) {
            console.log("OPEN DB ERROR", error);
        });
    }
    FlightService.prototype.getAll = function () {
        var _this = this;
        this.database.all("SELECT * FROM flight").then(function (rows) {
            _this.flights = [];
            for (var row in rows) {
                _this.flights.push({
                    id: rows[row][0],
                    titre: rows[row][1],
                    etat: rows[row][2],
                    date: rows[row][3]
                });
                console.log("id: " + rows[row][0] + "  titre: " + rows[row][1] + "  desc: " + rows[row][2]);
            }
        }, function (error) {
            console.log("SELECT ERROR", error);
        });
    };
    FlightService.prototype.insertFlight = function (flight) {
        var _this = this;
        this.database.execSQL("INSERT INTO flight (titre, etat, date) VALUES (?, ?, ?)", [flight.titre, flight.etat, flight.date]).then(function (id) {
            console.log("INSERT RESULT", id);
            _this.getAll();
        }, function (error) {
            console.log("INSERT ERROR", error);
        });
    };
    FlightService.prototype.deleteAll = function () {
        var _this = this;
        this.database.execSQL("DELETE FROM flight").then(function (id) {
            console.log("Delete RESULT", id);
            _this.getAll();
        }, function (error) {
            console.log("Delete ERROR", error);
        });
    };
    FlightService.prototype.deleteOneFlight = function (id) {
        var _this = this;
        this.database.execSQL("DELETE FROM flight WHERE id=?", [id]).then(function (id) {
            console.log("Delete RESULT", id);
            _this.getAll();
        }, function (error) {
            console.log("Delete ERROR", error);
        });
    };
    FlightService.prototype.getFlights = function () {
        this.getAll();
        return this.flights;
    };
    FlightService.prototype.getFlight = function (id) {
        return this.flights.filter(function (tasks) { return tasks.id == id; })[0];
    };
    FlightService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], FlightService);
    return FlightService;
}());
exports.FlightService = FlightService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmljZUZsaWdodHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTZXJ2aWNlRmxpZ2h0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBR3pDLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBRTVDO0lBSUE7UUFKQSxpQkFvRkM7UUEvRUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEVBQUU7WUFDekIsRUFBRSxDQUFDLE9BQU8sQ0FBQyw2QkFBNkI7Z0JBQ3hDLCtDQUErQztnQkFDL0Msb0NBQW9DLENBQUM7aUJBQ3BDLElBQUksQ0FBQyxVQUFBLEVBQUU7Z0JBQ0osS0FBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7Z0JBRXBCLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNqQixDQUFDLEVBQUUsVUFBQSxLQUFLO2dCQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDN0MsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sOEJBQU0sR0FBYjtRQUFBLGlCQWVDO1FBZEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJO1lBQy9DLEtBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2xCLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO29CQUNoQixFQUFFLEVBQUMsSUFBSSxDQUFDLEdB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Z0JBb0Z6QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQge2ZsaWdodH0gZnJvbSBcIi4vZmxpZ2h0XCJcbnZhciBTcWxpdGUgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXNxbGl0ZVwiKTtcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGbGlnaHRTZXJ2aWNle1xuXG5mbGlnaHRzOmZsaWdodFtdO1xuZGF0YWJhc2U6YW55O1xuY29uc3RydWN0b3IoKXtcbiAgKG5ldyBTcWxpdGUoXCJteS5kYlwiKSkudGhlbihkYiA9PiB7XG4gICAgICBkYi5leGVjU1FMKFwiQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgXCIrXG4gICAgICBcImZsaWdodCAoaWQgSU5URUdFUiBQUklNQVJZIEtFWSBBVVRPSU5DUkVNRU5ULFwiK1xuICAgICAgXCIgdGl0cmUgVEVYVCwgZXRhdCBURVhULCBkYXRlIFRFWFQpXCIpXG4gICAgICAudGhlbihpZCA9PiB7XG4gICAgICAgICAgdGhpcy5kYXRhYmFzZSA9IGRiO1xuXG4gICAgICAgICB0aGlzLmdldEFsbCgpO1xuICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ1JFQVRFIFRBQkxFIEVSUk9SXCIsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9LCBlcnJvciA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIk9QRU4gREIgRVJST1JcIiwgZXJyb3IpO1xuICB9KTtcbn1cblxucHVibGljIGdldEFsbCgpe1xuICB0aGlzLmRhdGFiYXNlLmFsbChcIlNFTEVDVCAqIEZST00gZmxpZ2h0XCIpLnRoZW4ocm93cyA9PiB7XG4gICAgICB0aGlzLmZsaWdodHMgPSBbXTtcbiAgICAgIGZvcih2YXIgcm93IGluIHJvd3MpIHtcbiAgICAgICAgICB0aGlzLmZsaWdodHMucHVzaCh7XG4gICAgICAgICAgICBpZDpyb3dzW3Jvd11bMF0gLFxuICAgICAgICAgICAgdGl0cmUgOiByb3dzW3Jvd11bMV0sXG4gICAgICAgICAgICBldGF0OiByb3dzW3Jvd11bMl0sXG4gICAgICAgICAgICBkYXRlOiByb3dzW3Jvd11bM11cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImlkOiBcIisgIHJvd3Nbcm93XVswXSArXCIgIHRpdHJlOiBcIityb3dzW3Jvd11bMV0rXCIgIGRlc2M6IFwiK3Jvd3Nbcm93XVsyXSAgICk7XG4gICAgICB9XG4gIH0sIGVycm9yID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiU0VMRUNUIEVSUk9SXCIsIGVycm9yKTtcbiAgfSk7XG59XG5cbmluc2VydEZsaWdodChmbGlnaHQ6ZmxpZ2h0KXtcbiAgdGhpcy5kYXRhYmFzZS5leGVjU1FMKFwiSU5TRVJUIElOVE8gZmxpZ2h0ICh0aXRyZSwgZXRhdCwgZGF0ZSkgVkFMVUVTICg/LCA/LCA/KVwiLCBbZmxpZ2h0LnRpdHJlLCBmbGlnaHQuZXRhdCwgZmxpZ2h0LmRhdGVdKS50aGVuKGlkID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiSU5TRVJUIFJFU1VMVFwiLCBpZCk7XG4gICAgdGhpcy5nZXRBbGwoKTtcbiAgfSwgZXJyb3IgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJJTlNFUlQgRVJST1JcIiwgZXJyb3IpO1xuICB9KTtcbn1cblxuZGVsZXRlQWxsKCl7XG4gIHRoaXMuZGF0YWJhc2UuZXhlY1NRTChcIkRFTEVURSBGUk9NIGZsaWdodFwiKS50aGVuKGlkID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRGVsZXRlIFJFU1VMVFwiLCBpZCk7XG4gICAgICB0aGlzLmdldEFsbCgpO1xuXG4gIH0sIGVycm9yID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRGVsZXRlIEVSUk9SXCIsIGVycm9yKTtcbiAgfSk7XG59XG5cbmRlbGV0ZU9uZUZsaWdodChpZDpudW1iZXIpXG57dGhpcy5kYXRhYmFzZS5leGVjU1FMKFwiREVMRVRFIEZST00gZmxpZ2h0IFdIRVJFIGlkPT9cIixbaWRdKS50aGVuKGlkID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRGVsZXRlIFJFU1VMVFwiLCBpZCk7XG4gICAgICB0aGlzLmdldEFsbCgpO1xuXG4gIH0sIGVycm9yID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRGVsZXRlIEVSUk9SXCIsIGVycm9yKTtcbiAgfSk7XG5cblxuXG59XG5cblxuZ2V0RmxpZ2h0cygpOmZsaWdodFtde1xuXHR0aGlzLmdldEFsbCgpO1xuICByZXR1cm4gdGhpcy5mbGlnaHRzO1xufVxuXG5nZXRGbGlnaHQoaWQ6bnVtYmVyKTpmbGlnaHR7XG4gIHJldHVybiB0aGlzLmZsaWdodHMuZmlsdGVyKHRhc2tzPT50YXNrcy5pZD09aWQpWzBdO1xufVxuXG5cblxuXG5cbn1cbiJdfQ==