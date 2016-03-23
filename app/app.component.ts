import { Component, EventEmitter } from 'angular2/core';
import { KegListComponent } from './keg-list.component';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
  <div class="container">
  <h1>Tap Room App</h1>
  <keg-list [kegList]="kegs"
  (onKegSelect)="kegWasSelected($event)">
  </keg-list>
  <div>
  `
})

export class AppComponent {
  public kegs: Keg[];
  constructor() {
    this.kegs = [
      new Keg("BeerA", "BrandA", 3, 4, 0),
      new Keg("BeerB", "BrandB", 3, 5, 1),
      new Keg("BeerC", "BrandC", 6, 7, 2),
      new Keg("BeerD", "BrandD", 6, 8, 3),
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
    console.log("parent",clickedKeg);
  }
}
