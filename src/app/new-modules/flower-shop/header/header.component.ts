import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
// import { User } from '../../new-modules/models/user.class';
import {User} from '../../models/user.class'
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public title : string = "Hieu's Shop";
  public user : User = null;
  constructor(
      private _userService : UserService,
      private _routerService : Router
  ) { }

  ngOnInit(): void {
    var id = +JSON.parse(localStorage.getItem("user"));
    this.user = this._userService.findUserById(id);
  }

  loginOwner(){
    this.user = this._userService.login("owner1","123");
    localStorage.clear();
    localStorage.setItem("user",JSON.stringify(this.user.id));
  }

  loginUser(){
    this.user = this._userService.login("user1","123");
    localStorage.setItem("user",JSON.stringify(this.user.id));
  }
  logOut(){
    this.user = null
    localStorage.removeItem("user");
    this._routerService.navigate([""]);
  }
}
