import {Directive, Input, ViewContainerRef} from '@angular/core';
import {DashingjsGridsterItem} from "./interfaces/dashingjs-gridster-item";

@Directive({
  selector: '[appWidgetHost]'
})
export class WidgetHostDirective {

  private data: DashingjsGridsterItem;

  @Input('appWidgetHost') set appWidgetHost(data: DashingjsGridsterItem) {
    this.data = data;
  }

  constructor(public viewContainerRef: ViewContainerRef) { }

}
