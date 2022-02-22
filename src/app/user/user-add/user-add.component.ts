import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserInfo } from 'src/app/models/userInfoResponse.model';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  public userData!: FormGroup;



  constructor(
    private data: ServiceService,
    private fb: FormBuilder
  ) { }

 
  ngOnInit(): void {
  
    this.userData = this.fb.group({
      firstName: "",
      lastName: ""
    })
  }

  sendData(value: any) {

    const userObj: UserInfo = {
      firstName: value.firstName,
      lastName: value.lastName
    }
    console.log(userObj);
    return userObj;

  }

  addUserInfo() {
    console.log(this.userData, "test user data");
    const userObj = this.sendData(this.userData.value);
    this.data.addUser(userObj).subscribe(result => {
      console.log(result, "result")
    })
  }

}
