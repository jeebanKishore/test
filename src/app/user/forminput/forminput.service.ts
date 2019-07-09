import { DataService } from './../../data.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ForminputService {
  private apiURL = '';
  constructor(private http: HttpClient, private dataService: DataService) { }
  sendData = (userData) => {
    this.dataService.setData(userData);
  }
}
