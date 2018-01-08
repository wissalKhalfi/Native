import { Component } from "@angular/core";
import { Router } from "@angular/router"
import { user} from "../user/user"

@Component({
    selector: "my-app",
    templateUrl: "login/login.html",
    styleUrls: ["login/login.css"]
})
export class loginComponent {
    user : user=new user("sarra","123");
constructor(private router:Router)
{

}

 connect(){
     if(this.user.name=="")
     {
    alert("You're logged in with "+this.user.name );
}
console.log(this.user.name);
   this.router.navigate(["taches",this.user.name]);
  /*this.route.navigate(["home"],{queryParams :
     {email:this.user.email ,
       password:this.user.password}
     });*/
    // this.route.navigate(["prods"]);
    }
  
}


