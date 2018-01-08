
import {loginComponent} from "./login/login";
import {tachesComponent} from "./ToDo/taches";
import {tachesDetComponent} from "./ToDo/taskDetail";



export const routesApp:any=[

{path:"",component:loginComponent}, 
{path:"taches/:name",component:tachesComponent},
{path:"detail/:id",component:tachesDetComponent}



];

export const routesAppComponent:any=[
loginComponent,tachesComponent,tachesDetComponent

];