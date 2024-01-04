import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service'; 
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private tokenSubject = new BehaviorSubject<String>("")
  private token$ = this.tokenSubject.asObservable();

  private userDataSubject = new BehaviorSubject<Object>({});
  private userData$ = this.userDataSubject.asObservable();

  constructor(private httpClient: HttpClient, private apiService: ApiService) { }

  public registerAccountAPI(registeredData: Object) {
    this.httpClient.post(this.apiService.accountRegisterEndpoint, registeredData).subscribe({
      next: (response) => {
        console.warn(response);
      },
      error: (error) => {
        console.warn(error);
      }
    })
  }

}
