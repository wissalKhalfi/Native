import { AuthentificationComponent  } from "./login/authentificationComponenet";
import { RegisterComponent  } from "./register/register";
import { FlightsComponent } from "./flights/flightsComponent"

export const routes: any= [
  { path: "", component: AuthentificationComponent  },
  { path: "register", component: RegisterComponent  },
  { path: "flightsSchedule/:userName", component: FlightsComponent  },
];

export const navigatableComponents: any= [
  AuthentificationComponent, RegisterComponent, FlightsComponent
];
