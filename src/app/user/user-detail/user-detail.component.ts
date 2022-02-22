import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  public userInfo: any;

  constructor( private data: ServiceService) { }

  ngOnInit(): void {
    this.getUserInfo();
  }

  getUserInfo() {
    this.data.getUserInfo()
    .subscribe((res => {
      this.userInfo = res;
      console.log(this.userInfo);
    }))
  }

}
