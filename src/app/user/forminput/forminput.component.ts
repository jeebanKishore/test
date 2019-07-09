import { ForminputService } from './forminput.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
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
  selector: 'app-forminput',
  templateUrl: './forminput.component.html',
  styleUrls: ['./forminput.component.css']
})
export class ForminputComponent implements OnInit {
  public userData: FormGroup;
  constructor(private datePipe: DatePipe, private formInputService: ForminputService) { }

  ngOnInit() {
    this.userData = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      dateOfBirth: new FormControl(new Date()),
      address: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      exprience: new FormControl('', [Validators.required, Validators.max(25)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [Validators.required, Validators.maxLength(11)]),
      aboutYou: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      gender: new FormControl('', [Validators.required])
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.userData.controls[controlName].hasError(errorName);
  }

  public createUser = (userFormValue) => {
    if (this.userData.valid) {
      this.executeUserCreation(userFormValue);
    }
  }

  private executeUserCreation = (userFormValue) => {
    const user: Userdata = {
      name: userFormValue.name,
      dateOfBirth: this.datePipe.transform(userFormValue.dateOfBirth, 'dd-MM-yyyy'),
      address: userFormValue.address,
      exprience: userFormValue.exprience as string,
      email: userFormValue.email,
      phoneNumber: userFormValue.phoneNumber as string,
      aboutYou: userFormValue.aboutYou,
      gender: userFormValue.gender
    };
    this.formInputService.sendData(user);
  }
}
