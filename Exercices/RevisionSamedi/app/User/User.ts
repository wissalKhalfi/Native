export class User {
  id:number;
  email: string;
  password: string;
  constructor(e:string, pass:string){
    this.email=e;
    this.password=pass;
  }
}
