import { Injectable } from '@angular/core';
import { User } from '../../new-modules/models/user.class';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public users : User[] =[
    new User({
      id:1,
      name:"Hieu",
      username:"user1",
      password:"123",
      phone:"0777903474",
      isOwner:false
    }),
    new User({
      id:2,
      name:"Owner",
      username:"owner1",
      password:"123",
      phone:"0345265550",
      isOwner:true
    }),
  ];
  constructor() { }

  login(username : string, password : string){
    return this.users.find(x => x.username === username && x.password === password);
  }
  findUserById(id : number){
    return this.users.find(x => x.id === id);
  }
}
