import { Component, OnInit } from '@angular/core';
import { DashboardGridsterConfigService } from "./dashboard-gridster-config.service";
import { GridsterConfig } from "angular-gridster2";
import {environment} from "../../environments/environment";
import {DashingjsGridsterItem} from "./interfaces/dashingjs-gridster-item";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public config: GridsterConfig;
  public items: Array<DashingjsGridsterItem>;

  constructor(private dashboardGridsterConfigService: DashboardGridsterConfigService) { }

  ngOnInit() {
    this.config = this.dashboardGridsterConfigService.getConfig();
    this.items = environment.dashingjsConfig.items;
  }

}

