import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import {Router, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import { SharedService } from './shared.service';
@Injectable({
  providedIn: 'root'
})
export class auth implements CanActivate {
    isLogin: any;
    constructor(private router: Router, private SharedService: SharedService) {
     this.isLogin = localStorage.getItem ("isLogin");

    }
    canActivate() {
        if (this.isLogin) {
            this.SharedService.sendMessage(false);
            return true;
        } else {
            this.router.navigate(['login']);
            return false;
        }
    }
}
