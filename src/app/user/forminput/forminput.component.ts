import { ForminputService } from './forminput.service';
import { Component, OnInit } from '@angular/core';
export interface Userdata {
  name: string;
  dob: Date;
  exprience: number;
}
@Component({
  selector: 'app-forminput',
  templateUrl: './forminput.component.html',
  styleUrls: ['./forminput.component.css']
})
export class ForminputComponent implements OnInit {
  private userData: Userdata;
  constructor(private forminputService: ForminputService) { }

  ngOnInit() {
  }

}
