import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DetailService } from './../detail.service';
@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
c:any;
  constructor(private http:HttpClient, private det:DetailService) { }

  ngOnInit() {
    this.det.b().subscribe(d=> this.c =d)
  }

}
