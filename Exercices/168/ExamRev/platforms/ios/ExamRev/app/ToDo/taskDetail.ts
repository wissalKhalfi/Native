import { Component,OnInit } from "@angular/core";
import { Router,ActivatedRoute } from "@angular/router";
import { TaskService } from "./taskService";
import { task } from "./task";
@Component({
    selector: "taches",
    templateUrl: "ToDo/taskDetails.html",
    styleUrls: [""]
})
export class tachesDetComponent implements OnInit{
  // userName: string;
   tache:task=new task();
   //tasksList:task[];





constructor(private nameActivatedRoute: ActivatedRoute, private service:TaskService)
{ 


}
ngOnInit(){
	this.nameActivatedRoute.params.subscribe(params=>this.tache=this.service.getTask(params["id"]) );
         // console.log("id: "+  this.tasks[0][0] +"  titre: "+this.tasks[0][1]+"  desc: "+this.tasks[0][2]   );

}
deleteOne()
{

    this.service.deleteOneItem(this.tache.id);
    




}




}


