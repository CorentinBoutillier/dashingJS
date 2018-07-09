import {Component, Input, OnInit} from '@angular/core';
import {GiphyImage} from "../widgetGiphy/interfaces/giphy-image";
import {DashingjsGridsterItem} from "../../interfaces/dashingjs-gridster-item";
import {GiphyDataService} from "../widgetGiphy/giphy-data.service";

@Component({
  selector: 'app-widget-giphy',
  template: `
    <small>&copy;Giphy</small>
    <img *ngIf="image" [src]="image.url"/>
   `,
  styleUrls: ['./widget-giphy.component.scss'],
  providers: [GiphyDataService]
})
export class WidgetGiphyComponent implements OnInit {

  public image: GiphyImage;

  private images: GiphyImage[];
  private timer: any = null;
  private currentImageIndex: number = 0;

  @Input () data: DashingjsGridsterItem;

  constructor(private giphyDataService: GiphyDataService) { }

  private getImages () {
    this.giphyDataService.getImages(this.data.widget.params.q).subscribe(images => {
      this.images = images;

      if(null !== this.timer) {
        clearInterval(this.timer);
      }

      this.timer = (setInterval(() => this.setImage(), 15000));
    });
  }

  private setImage(): void {
    this.currentImageIndex = this.currentImageIndex + 1 > this.images.length ? 0 : this.currentImageIndex + 1;
    this.image = this.images[this.currentImageIndex];
    this.preloadImage();
  }

  private preloadImage () {
    const nextImageIndex = this.currentImageIndex + 1 > this.getImages.length ? 0 : this.currentImageIndex + 1;
    const image = new Image();
    image.src = this.images[nextImageIndex].url;
  }

  ngOnInit() {
    this.getImages();
  }


}
