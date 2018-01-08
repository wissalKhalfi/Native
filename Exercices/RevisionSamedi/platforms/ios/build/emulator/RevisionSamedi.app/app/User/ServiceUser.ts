import { Injectable } from "@angular/core";

import { User } from "./User";
var Sqlite = require("nativescript-sqlite")

@Injectable()
export class ServiceUser {

   users:User[];
   database:any;

   constructor(){
     (new Sqlite("my.db")).then(db => {
        db.execSQL("CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, password TEXT)").then(id => {
          //  page.bindingContext = createViewModel(db);
          this.database=db;
          //this.insertProducts();
          this.getAll();
        }, error => {
            console.log("CREATE TABLE ERROR", error);
        });
    }, error => {
        console.log("OPEN DB ERROR", error);
    });

   }
  getUsers():User[]{
  return this.users;
}
  getUser(id:number):User{
    return this.users.filter(pr=>pr.id == id)[0];
  }

  FindUser(email:string,password:string):User{
    return this.users.filter(pr=>pr.email == email)[0];
  }

  public getAll(){
    this.database.all("SELECT * FROM user").then(rows => {
           for(var row in rows) {
              // console.log("RESULT", rows[row]);
              this.users.push({
                id: rows[row][0],
                email: rows[row][1],
                password: rows[row][2]
              });
           }
       }, error => {
           console.log("SELECT ERROR", error);
       });
  }
  public insertUser(pr:User){
    this.database.execSQL("INSERT INTO user (email, password) VALUES (?, ?)", [pr.email, pr.password]).then(id => {
            console.log("INSERT RESULT", id);
            this.getAll();
        }, error => {
            console.log("INSERT ERROR", error);
        });
  }

}
