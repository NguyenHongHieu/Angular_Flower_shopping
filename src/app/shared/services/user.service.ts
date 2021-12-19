import { Injectable } from '@angular/core';
import { User } from '../../new-modules/models/user.class';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public users : User[] =[
    new User(1,"Hieu","user1","123","0777903474",false),
    new User(2,"Owner","owner1","123","0345265550",true),
  ];
  constructor() { }

  login(username : string, password : string){
    return this.users.find(x => x.username === username && x.password === password);
  }
  findUserById(id : number){
    return this.users.find(x => x.id === id);
  }
}
