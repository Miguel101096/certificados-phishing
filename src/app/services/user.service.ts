import { Injectable } from '@angular/core';
import { User } from '../models/user';
@Injectable()
export class UserService {
    public user:Array<User>;
    constructor() {
        this.user=[
            new User('miguel.reina@epn.edu.ec','12345678',0),
            new User('roberto.andrade@epn.edu.ec','12345678',0),
            new User('jose.davila@epn.edu.ec','12345678',1),
            new User('david.moncayo@epn.edu.ec','12345678',1)
        ];
    }
    getUser():Array<User>{
        return this.user;
    }
}