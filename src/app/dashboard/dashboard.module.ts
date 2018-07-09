import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {DashboardRouteModule} from "./dashboard.route";
import {GridsterModule} from "angular-gridster2";
import {DashboardGridsterConfigService} from "./dashboard-gridster-config.service";
import { HelloWorldComponent } from './widgets/hello-world/hello-world.component';
import {WidgetHostDirective} from "./widget-host.directive";
import {WidgetContainerComponent} from "./widget-container.component";
import {HttpClientModule} from "@angular/common/http";
import { WidgetGiphyComponent } from './widgets/widget-giphy/widget-giphy.component';


@NgModule({
  imports: [CommonModule, DashboardRouteModule, GridsterModule, HttpClientModule],
  declarations: [DashboardComponent, WidgetContainerComponent, WidgetHostDirective, HelloWorldComponent, WidgetGiphyComponent],
  providers: [DashboardGridsterConfigService],
  entryComponents: [HelloWorldComponent, WidgetGiphyComponent]

})

export class DashboardModule { }
