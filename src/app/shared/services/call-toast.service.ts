import { Injectable } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

@Injectable({
  providedIn: 'root'
})
export class CallToastService {

  constructor(
    private _notificationService : NotificationsService
  ) { }

  success(message:string, timeOut : number){
    this._notificationService.success("Notification",message,{
      position:['bottom','right'],
      timeOut:timeOut,
      animate:'fade',
      showProgressBar:true
    });
  }

  error(message:string, timeOut : number){
    this._notificationService.error("Notification",message,{
      position:['bottom','right'],
      timeOut:timeOut,
      animate:'fade',
      showProgressBar:true
    });
  }
}
