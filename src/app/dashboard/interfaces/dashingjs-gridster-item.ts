import {GridsterItem} from "angular-gridster2";


interface Widget {
  icon: string|null,
  class: string|null
}

export interface DashingjsGridsterItem extends GridsterItem{
  widget: Widget;
}
