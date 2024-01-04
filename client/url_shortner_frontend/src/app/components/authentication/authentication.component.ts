import { Component } from '@angular/core';
import { AccountService } from '../../services/account/account.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css'
})
export class AuthenticationComponent {

  public toggleLogin: boolean = false;

  constructor(private accountService: AccountService) { } 

  public registerAccount(registeredData: any) {
      if(!registeredData) {
        return;
      }
      if(!registeredData.name || !registeredData.email || !registeredData.password || !registeredData.confirmPassword) {
        return;
      }
      if(registeredData.password !== registeredData.confirmPassword) {
        return;
      }
      let data = {
        name: registeredData.name,
        email: registeredData.email,
        password: registeredData.password
      }
      this.accountService.registerAccountAPI(data);
  }

  public loginAccount(loginData: any) {
    if(!loginData) {
      return;
    }
    if(!loginData.email || !loginData.password) {
      return;
    }
    let data = {
      email: loginData.email,
      password: loginData.password
    }
    this.accountService.loginAccountAPI(data);
  }

}
