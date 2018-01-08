import { Component,OnInit } from "@angular/core";
import { Router,ActivatedRoute } from "@angular/router";
import { flight } from "../flight/flight";
import {FlightService} from "../flight/ServiceFlights";
@Component({
    selector: "flights",
    templateUrl: "flights/flights.html",
    styleUrls: [""]
})
export class FlightsComponent implements OnInit{
   userName: string;
   vol:flight=new flight();
   flightsList:flight[];





constructor(private nameActivatedRoute: ActivatedRoute, private service:FlightService)
{
  nameActivatedRoute.params.subscribe((params)=>[this.userName=params['userName']]);


}
ngOnInit(){

this.flightsList=this.service.getFlights();
console.log('welcome abord');
         // console.log("id: "+  this.tasks[0][0] +"  titre: "+this.tasks[0][1]+"  desc: "+this.tasks[0][2]   );

}

ajouterFlight()
 {

   this.service.insertFlight(this.vol);

 }

deleteAll()
{
 this.service.deleteAll();




}


}
