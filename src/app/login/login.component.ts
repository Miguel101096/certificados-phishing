import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
@Component(
    {
        selector: 'login',
        templateUrl: './login.component.html',
        providers: [
            UserService
        ]
    }
)
export class LoginComponent implements OnInit {
    public title:string;
    public users:Array<User>;
    constructor(
        private _userService: UserService
    ) {
        this.title = 'Login';
        this.users = []
    }
    ngOnInit(){
        
    }
}