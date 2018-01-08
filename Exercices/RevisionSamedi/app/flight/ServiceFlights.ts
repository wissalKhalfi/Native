import {Injectable} from "@angular/core";

import {flight} from "./flight"
var Sqlite = require("nativescript-sqlite");
@Injectable()
export class FlightService{

flights:flight[];
database:any;
constructor(){
  (new Sqlite("my.db")).then(db => {
      db.execSQL("CREATE TABLE IF NOT EXISTS "+
      "flight (id INTEGER PRIMARY KEY AUTOINCREMENT,"+
      " titre TEXT, etat TEXT, date TEXT)")
      .then(id => {
          this.database = db;

         this.getAll();
      }, error => {
          console.log("CREATE TABLE ERROR", error);
      });
  }, error => {
      console.log("OPEN DB ERROR", error);
  });
}

public getAll(){
  this.database.all("SELECT * FROM flight").then(rows => {
      this.flights = [];
      for(var row in rows) {
          this.flights.push({
            id:rows[row][0] ,
            titre : rows[row][1],
            etat: rows[row][2],
            date: rows[row][3]
          });
          console.log("id: "+  rows[row][0] +"  titre: "+rows[row][1]+"  desc: "+rows[row][2]   );
      }
  }, error => {
      console.log("SELECT ERROR", error);
  });
}

insertFlight(flight:flight){
  this.database.execSQL("INSERT INTO flight (titre, etat, date) VALUES (?, ?, ?)", [flight.titre, flight.etat, flight.date]).then(id => {
      console.log("INSERT RESULT", id);
    this.getAll();
  }, error => {
      console.log("INSERT ERROR", error);
  });
}

deleteAll(){
  this.database.execSQL("DELETE FROM flight").then(id => {
      console.log("Delete RESULT", id);
      this.getAll();

  }, error => {
      console.log("Delete ERROR", error);
  });
}

deleteOneFlight(id:number)
{this.database.execSQL("DELETE FROM flight WHERE id=?",[id]).then(id => {
      console.log("Delete RESULT", id);
      this.getAll();

  }, error => {
      console.log("Delete ERROR", error);
  });



}


getFlights():flight[]{
	this.getAll();
  return this.flights;
}

getFlight(id:number):flight{
  return this.flights.filter(tasks=>tasks.id==id)[0];
}





}
