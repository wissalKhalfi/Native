import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../User/User";
import {ServiceUser} from "../User/ServiceUser";
@Component({
    selector: "register",
    templateUrl: "register/register.html"


})
export class RegisterComponent {

userRegistred:User= new User("pilot@airport.tn","");
constructor( private service:ServiceUser,private router: Router ){}
 //email:string= "espritmobile@esprit.tn" ;


 Registration(){
   if (this.userRegistred.email == ""){
     alert("Email must be filled");
   }
   else if (this.userRegistred.password == ""){
     alert("Password must be filled");
   }

else {

   this.service.insertUser(this.userRegistred);
   this.service.getAll();
    this.router.navigate([""]);
}

 }
}
