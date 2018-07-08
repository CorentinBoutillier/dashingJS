import {Component, Input, OnInit} from '@angular/core';
import {DashingjsGridsterItem} from "../../interfaces/dashingjs-gridster-item";

@Component({
  selector: 'app-hello-world',
  template:`
    <h4>Hello world !</h4>
    c: {{ data.cols }} r: {{ data.rows }}
  `
})
export class HelloWorldComponent implements OnInit {

  @Input () data: DashingjsGridsterItem;

  constructor() { }

  ngOnInit() {
  }

}
