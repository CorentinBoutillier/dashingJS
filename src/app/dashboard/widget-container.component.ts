import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild} from '@angular/core';
import {DashingjsGridsterItem} from "./interfaces/dashingjs-gridster-item";
import {WidgetHostDirective} from "./widget-host.directive";

@Component({
  selector: 'app-widget-container',
  template: `<ng-template [appWidgetHost]="data"></ng-template>`,
  styles: [':host{height: 100%; display: flex; align-items: center}']
})
export class WidgetContainerComponent implements OnInit {

  @Input () data: DashingjsGridsterItem;
  @ViewChild (WidgetHostDirective) widgetHostDirective: WidgetHostDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  private injectComponent(): void {
    if (this.data.widget.component === null) {
      return;
    }
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.data.widget.component);
    const componentRef = this.widgetHostDirective.viewContainerRef.createComponent(componentFactory);
    (<DashingjsGridsterItem>componentRef.instance).data = this.data;
  }

  ngOnInit() {
    this.injectComponent();
  }

}
