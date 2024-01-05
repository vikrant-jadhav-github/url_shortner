import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account/account.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css'
})
export class AuthenticationComponent implements OnInit {

  public toggleLogin: boolean = false;

  
  constructor(private accountService: AccountService, private toastr: ToastrService, private activatedRoute: ActivatedRoute) { } 
  
  ngOnInit(): void {
    this.toggleLogin = this.activatedRoute.snapshot.params['toggle'];
  }
  
  public registerAccount(registeredData: any) {
      if(!registeredData.name || !registeredData.email || !registeredData.password || !registeredData.confirmPassword) {
        this.toastr.error('All fields are required', 'Error');
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
    if(!loginData.email || !loginData.password) {
      this.toastr.error('All fields are required', 'Error');
      return;
    }
    let data = {
      email: loginData.email,
      password: loginData.password
    }
    this.accountService.loginAccountAPI(data);
  }

}
