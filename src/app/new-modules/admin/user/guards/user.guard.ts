import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
// import { User } from '../../../models/user.class';
import { UserService } from '../../../../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(
    private _userService : UserService
  ) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      var id = +JSON.parse(localStorage.getItem("user"));
      var user = this._userService.findUserById(id);
      if(user && !user.isOwner) return true;
    return false;
  }

}
  