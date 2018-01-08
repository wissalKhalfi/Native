import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../User/User";

@Component({
    selector: "login",
    templateUrl: "login/login.html",
    styleUrls: ["login/login-common.css"]
})
export class LoginComponent {
  user:User= new User("espritmobile@esprit.tn","");

  constructor( private router: Router){}

   Login(){
       alert("Welcome"+this.user.email);
  //   this.router.navigate(["prods"]);
   //alert("You are logged in with "+ this.user.email+" password: "+this.user.password);
      //this.router.navigate(["home",this.user.email]);
   }

}
