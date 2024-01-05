import { Component } from '@angular/core';
import { AccountService } from '../../services/account/account.service';
import { OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {

  public toggleLogin: boolean = false
  public userData: any = {}

  constructor(private accountService: AccountService, private toastr: ToastrService) { }

  public ngOnInit(): void {
    this.accountService.token$.subscribe((token) => {
      if(token) {
        this.toggleLogin = true
        this.accountService.userData$.subscribe((userData) => {
          this.userData = userData
        })
      }
    })
  }

  public logout(){
    this.toggleLogin = false
    this.userData = {}
    this.accountService.logoutAPI()
    this.toastr.success('See you again!', 'Success')
  }

}
