import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
export interface Data {
  message: object;
}

export interface Userdata {
  name: string;
  dateOfBirth: string;
  exprience: string;
  email: string;
  phoneNumber: string;
  aboutYou: string;
  address: string;
  gender: string;
}
@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent implements OnInit {
  subscription: Subscription;
  public userData: Userdata;
  public userDataCollection = [];
  public showData = false;
  constructor(private dataService: DataService) {
    this.subscription = this.dataService.observeData().subscribe((data: Data) => {
      this.userData = data.message as Userdata;
      this.userDataCollection.push(this.userData);
      this.showData = true;
    });
  }

  ngOnInit() {
  }

}
