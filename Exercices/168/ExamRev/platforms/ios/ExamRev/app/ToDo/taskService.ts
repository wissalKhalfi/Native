import {Injectable} from "@angular/core";

import {task} from "./task"
var Sqlite = require("nativescript-sqlite");
@Injectable()
export class TaskService{

tasks:task[];
database:any;
constructor(){
  (new Sqlite("my.db")).then(db => {
      db.execSQL("CREATE TABLE IF NOT EXISTS "+
      "task (id INTEGER PRIMARY KEY AUTOINCREMENT,"+
      " titre TEXT, description TEXT)")
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
  this.database.all("SELECT * FROM task").then(rows => {
      this.tasks = [];
      for(var row in rows) {
          this.tasks.push({
            id:rows[row][0] ,
            titre : rows[row][1],
            description: rows[row][2]
          });
          console.log("id: "+  rows[row][0] +"  titre: "+rows[row][1]+"  desc: "+rows[row][2]   );
      }
  }, error => {
      console.log("SELECT ERROR", error);
  });
}

insertTask(task:task){
  this.database.execSQL("INSERT INTO task (titre, description) VALUES (?, ?)", [task.titre, task.description]).then(id => {
      console.log("INSERT RESULT", id);
    this.getAll();
  }, error => {
      console.log("INSERT ERROR", error);
  });
}

deleteAll(){
  this.database.execSQL("DELETE FROM task").then(id => {
      console.log("Delete RESULT", id);
      this.getAll();

  }, error => {
      console.log("Delete ERROR", error);
  });
}

deleteOneItem(id:number)
{this.database.execSQL("DELETE FROM task WHERE id=?",[id]).then(id => {
      console.log("Delete RESULT", id);
      this.getAll();

  }, error => {
      console.log("Delete ERROR", error);
  });



}


getTasks():task[]{
	this.getAll();
  return this.tasks;
}

getTask(id:number):task{
  return this.tasks.filter(tasks=>tasks.id==id)[0];
}





}
