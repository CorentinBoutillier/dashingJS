import { Component, OnInit } from '@angular/core';
import { DashboardGridsterConfigService } from "./dashboard-gridster-config.service";
import { GridsterConfig, GridsterItem } from "angular-gridster2";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public config: GridsterConfig;
  public items: Array<GridsterItem>;
  constructor(private dashboardGridsterConfigService: DashboardGridsterConfigService) { }

  ngOnInit() {
    this.config = this.dashboardGridsterConfigService.getConfig();
    this.items =[
      {cols: 1, rows: 2, y: 0, x: 0},
      {cols: 1, rows: 1, y: 0, x: 0},
      {cols: 1, rows: 1, y: 0, x: 0},
      {cols: 1, rows: 1, y: 0, x: 0},
      {cols: 1, rows: 1, y: 0, x: 0},
      {cols: 2, rows: 1, y: 0, x: 0},
      {cols: 1, rows: 1, y: 0, x: 0},
      {cols: 1, rows: 1, y: 0, x: 0},
      {cols: 1, rows: 1, y: 0, x: 0},
      {cols: 1, rows: 1, y: 0, x: 0},
      {cols: 1, rows: 1, y: 0, x: 0}
    ]
  }

}
