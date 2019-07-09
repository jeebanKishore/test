import { ForminputService } from './forminput.service';
import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
export interface Userdata {
  name: string;
  dateOfBirth: Date;
  exprience: number;
  email: string;
  phoneNumber: number;
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
  constructor(private location: Location, private forminputService: ForminputService) { }

  ngOnInit() {
    this.userData = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      dateOfBirth: new FormControl(new Date()),
      address: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      exprience: new FormControl('', [Validators.required, Validators.max(25)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [Validators.required, Validators.maxLength(11)]),
      aboutYou: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      gender: new FormControl('', [Validators.required, Validators.maxLength(100)])
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
      dateOfBirth: userFormValue.dateOfBirth,
      address: userFormValue.address,
      exprience: userFormValue.exprience,
      email: userFormValue.email,
      phoneNumber: userFormValue.phoneNumber,
      aboutYou: userFormValue.aboutYou,
      gender: userFormValue.gender
    };
    console.log(user);
  }
}
