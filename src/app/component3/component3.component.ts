import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {
f:any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    return this.http.get("/assets/externaldata.json").subscribe(z=> this.f =z)
  }

}
