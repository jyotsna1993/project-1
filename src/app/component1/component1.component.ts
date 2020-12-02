import { Component, OnInit } from '@angular/core';
import { DetailService } from './../detail.service';
@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
a:any;
  constructor(private det:DetailService) { }

  ngOnInit() {
    this.a = this.det.data;
  }

}
