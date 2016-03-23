import { Component, EventEmitter } from 'angular2/core';


@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  template: `
  <h3 *ngFor="#currentKeg of kegList" (click)="kegClicked(currentKeg)">
    {{currentKeg.name}} {{currentKeg.brand}} {{"$" + currentKeg.price}} {{currentKeg.abv + "%"}}
  </h3>
  `
})

export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void{
    console.log("child",clickedKeg);
    this.onKegSelect.emit(clickedKeg);
  }

}

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
      new Keg("BeerC", "BrandC", 5, 7, 2),
      new Keg("BeerD", "BrandD", 5, 8, 3),
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
    console.log("parent",clickedKeg);
  }
}


export class Keg {
  public pintsLeft: number = 124;
  constructor(public name: string, public brand: string, public price: number, public abv: number, public id: number) {}
  soldPint() {
    this.pintsLeft -= 1;
  }
}
