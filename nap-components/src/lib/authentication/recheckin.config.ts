import { Injectable } from '@angular/core';

@Injectable()
export class RecheckinConfig {
    checkinUrl = 'Login/ReCheckLogin';
    logoutUrl = 'UserLogin/Login/LogOut';
}
