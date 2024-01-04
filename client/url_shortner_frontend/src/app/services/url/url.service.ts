import { ApiService } from './../api/api.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  private shortenedUrlSubject = new BehaviorSubject<string>('');
  public shortenedUrl = this.shortenedUrlSubject.asObservable();

  constructor(private httpClient: HttpClient, private apiService: ApiService, private toastr: ToastrService) { }

  public getShortenedUrl(url: string) {

    this.httpClient.post(this.apiService.storeUrlEndpoint, {url: url}, {headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA0NDA2MTM5LCJpYXQiOjE3MDQ0MDI1MzksImp0aSI6Ijg2MTg5NjMxYjExMzQ1MjRiZjk1NzlhMTc3ZWU1OWNmIiwidXNlcl9pZCI6Nn0.t0xKipeVtK5BCGQLnTtEDlaH6hktW3Y6G8ukRWJNcO4'}}).subscribe({
      next: (response: any) => {
          this.shortenedUrlSubject.next(response.url);
          this.toastr.success('Shortened URL created successfully', 'Success');
      },
      error: (error) => {
        this.toastr.error(error.error.message, 'Error');
      }
  })
  }

}
