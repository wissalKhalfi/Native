import { Component,OnInit } from "@angular/core";
import { Router,ActivatedRoute } from "@angular/router";
import { TaskService } from "./taskService";
import { task } from "./task";
@Component({
    selector: "taches",
    templateUrl: "ToDo/taches.html",
    styleUrls: [""]
})
export class tachesComponent implements OnInit{
   userName: string;
   tache:task=new task();
   tasksList:task[];





constructor(private nameActivatedRoute: ActivatedRoute, private service:TaskService)
{ 
  nameActivatedRoute.params.subscribe((params)=>[this.userName=params['name']]);


}
ngOnInit(){
this.tasksList=this.service.getTasks();
         // console.log("id: "+  this.tasks[0][0] +"  titre: "+this.tasks[0][1]+"  desc: "+this.tasks[0][2]   );

}
 
 addTask()
 {this.service.insertTask(this.tache);

 }

deleteAll()
{
    this.service.deleteAll();




}


}


