// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { DashingjsConfig } from '../app/dashboard/interfaces/dashingjs-config';
import {WidgetGiphyComponent} from "../app/dashboard/widgets/widget-giphy/widget-giphy.component";

const dashingjsConfig: DashingjsConfig = {
  items: [
    { cols: 1, rows: 2, y: 0, x: 0, widget: { component: WidgetGiphyComponent, params: { q: 'funny cat' }, icon: null, class: 'bg-primary' } },
    { cols: 1, rows: 1, y: 0, x: 0, widget: { component: WidgetGiphyComponent, params: { q: 'funny dev' }, icon: null, class: 'bg-secondary' } },
    { cols: 1, rows: 1, y: 0, x: 0, widget: { component: WidgetGiphyComponent, params: { q: 'funny school' }, icon: null, class: 'bg-success' } },
    { cols: 1, rows: 1, y: 0, x: 0, widget: { component: WidgetGiphyComponent, params: { q: 'funny fail' }, icon: 'fi flaticon-youtube', class: 'bg-danger' } },
    { cols: 1, rows: 1, y: 0, x: 0, widget: { component: WidgetGiphyComponent, params: { q: 'funny animal' }, icon: null, class: 'bg-warning' } },
    { cols: 2, rows: 1, y: 0, x: 0, widget: { component: WidgetGiphyComponent, params: { q: 'funny clinician' }, icon: null, class: 'bg-info' } },
    { cols: 1, rows: 1, y: 0, x: 0, widget: { component: WidgetGiphyComponent, params: { q: 'funny silicon valley' }, icon: null, class: 'bg-light text-dark' } },
    { cols: 1, rows: 1, y: 0, x: 0, widget: { component: WidgetGiphyComponent, params: { q: 'funny silicon valley' }, icon: 'fa fa-bitcoin', class: 'bg-dark' } },
    { cols: 1, rows: 1, y: 0, x: 0, widget: { component: WidgetGiphyComponent, params: { q: 'funny silicon valley' }, icon: 'fa fa-download', class: 'bg-white text-dark' } },
    { cols: 1, rows: 1, y: 0, x: 0, widget: { component: WidgetGiphyComponent, params: { q: 'funny silicon valley' }, icon: 'fi flaticon-github', class: 'bg-primary' } }

  ]
};
export const environment = {
  production: false,
  dashingjsConfig: dashingjsConfig
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
