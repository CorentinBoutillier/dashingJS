import { Injectable } from '@angular/core';
import {GridsterConfig} from "angular-gridster2";

const DashboardGridsterConfig: GridsterConfig = {
  gridType: 'fit',
  fixedColWidth: 250,
  fixedRowHeight: 250,
  keepFixedHeightInMobile: false,
  keepFixedWidthInMobile: false,
  compactType: 'none',
  mobileBreakpoint: 0,
  minCols: 4,
  maxCols: 8,
  minRows: 3,
  maxRows: 5,
  defaultItemCols: 4,
  defaultItemRows: 3,
  maxItemCols: 5,
  maxItemRows: 8,
  minItemCols: 1,
  minItemRows: 1,
  minItemArea: 1,
  maxItemArea: 40,
  margin: 10,
  outerMargin: true,
  scrollSensitivity: 10,
  scrollSpeed: 20,
  initCallback: undefined,
  destroyCallback: undefined,
  itemChangeCallback: undefined,
  itemResizeCallback: undefined,
  itemInitCallback: undefined,
  itemRemovedCallback: undefined,
  enableEmptyCellClick: false,
  enableEmptyCellContextMenu: false,
  enableEmptyCellDrop: false,
  enableEmptyCellDrag: false,
  emptyCellClickCallback: undefined,
  emptyCellContextMenuCallback: undefined,
  emptyCellDropCallback: undefined,
  emptyCellDragCallback: undefined,
  emptyCellDragMaxCols: 50,
  emptyCellDragMaxRows: 50,
  draggable: {
    //
    // enabled: this.isEditMode,
    ignoreContentClass: 'gridster-item-content',
    ignoreContent: false,
    dragHandleClass: 'drag-handler',
    stop: undefined,
    start: undefined
  },
  resizable: {
    //enabled: this.isEditMode,
    handles: {
      s: true,
      e: true,
      n: true,
      w: true,
      se: true,
      ne: true,
      sw: true,
      nw: true
    },
    stop: undefined,
    start: undefined
  },
  swap: false,
  pushItems: true,
  pushResizeItems: false,
  disablePushOnDrag: false,
  disablePushOnResize: false,
  pushDirections: { north: true, east: true, south: true, west: true },
  displayGrid: 'onDrag&Resize',
  disableWindowResize: false,
  disableWarnings: false,
  scrollToNewItems: false
};

@Injectable({
  providedIn: 'root'
})
export class DashboardGridsterConfigService {

  constructor() { }

  getConfig (): GridsterConfig {
    return DashboardGridsterConfig;
  }
}
