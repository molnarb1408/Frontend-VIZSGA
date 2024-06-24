import { Component } from '@angular/core';
import { UserService } from './user.service';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-di-angular',
  standalone: true,
  imports: [],
  templateUrl: './di-angular.component.html',
  styleUrl: './di-angular.component.css',
  providers: [UserService, LoggerService],
})
export class DiAngularComponent {
  private userName: string;

  constructor(private userService: UserService){
    this.userName = this.userService.getUserName();
  }

  public get UserName():string {
    return this.userName;
  }

  public changeUser():void {
    this.userService.setUserName("Jane Doe");
    this.userName = this.userService.getUserName();
  }
}
