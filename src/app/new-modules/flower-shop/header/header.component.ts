import { Component, OnInit } from '@angular/core';
// import { User } from '../../new-modules/models/user.class';
import { UserModel } from '../../models/user.class';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public title: string = "Hieu's Shop";
  public user: UserModel = null;
  constructor(
    private _userService: UserService,
    private _routerService: Router
  ) { }

  ngOnInit(): void {
    var id = +JSON.parse(localStorage.getItem('user'));
    this.user = this._userService.findUserById(id);
  }

  loginOwner() {
    this.user = this._userService.login('owner1', '123');
    localStorage.clear();
    localStorage.setItem('user', JSON.stringify(this.user.id));
  }

  loginUser() {
    this.user = this._userService.login('user1', '123');
    localStorage.setItem('user', JSON.stringify(this.user.id));
    window.location.reload();
  }
  logOut() {
    this.user = null;
    localStorage.removeItem('user');
    this._routerService.navigate(['']);
  }
}
