import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service'; 
import { BehaviorSubject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private tokenSubject = new BehaviorSubject<String>("")
  private token$ = this.tokenSubject.asObservable();

  private userDataSubject = new BehaviorSubject<Object>({});
  private userData$ = this.userDataSubject.asObservable();

  constructor(private httpClient: HttpClient, private apiService: ApiService, private toastr: ToastrService) { }

  public registerAccountAPI(registeredData: Object) {
    this.httpClient.post(this.apiService.accountRegisterEndpoint, registeredData).subscribe({
      next: (response: any) => {
        this.tokenSubject.next(response.token);
        this.userDataSubject.next(response.user);
        this.toastr.success('Account created successfully', 'Success');
      },
      error: (error) => {
        this.toastr.error(error.error.message, 'Error');
      }
    })
  }

  public loginAccountAPI(loginData: Object) {
    this.httpClient.post(this.apiService.accountLoginEndpoint, loginData).subscribe({
      next: (response: any) => {
        this.tokenSubject.next(response.token);
        this.userDataSubject.next(response.user);
        this.toastr.success('Account logged in successfully', 'Success');
      },
      error: (error) => {
        this.toastr.error(error.error.message, 'Error');
      }
    })
  }

}
