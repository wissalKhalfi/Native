import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../User/User";
@Component({
    selector: "authentification",
    templateUrl: "login/auth.html",
    styleUrls: ["login/login-common.css"]


})
export class AuthentificationComponent {

userLog:User= new User("pilot@airport.tn","");
constructor( private router: Router){}
 //email:string= "espritmobile@esprit.tn" ;

AuthUser(){
   //this.router.navigate(["prods"]);
//  alert("You are logged in with "+ this.userLog.email+" password: "+this.userLog.password);


  this.router.navigate(["flightsSchedule",this.userLog.email]);
 }
 RegisterP(){
   this.router.navigate(["register"]);
 }
}
