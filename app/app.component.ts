import { Component, EventEmitter } from 'angular2/core';


@Component ({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
  <h3>{{keg.name}} {{keg.brand}} {{"$" + keg.price}} {{keg.abv + "%"}}</h3>
  `
})

export class KegComponent {
  public keg: Keg;
}


@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  directives: [KegComponent],
  template: `
  <keg-display *ngFor="#currentKeg of kegList"
  [class.cheap]="currentKeg.price <= 5"
  [class.expensive]="currentKeg.price >= 5"
  [class.highABV]="currentKeg.abv > 5"

  (click)="kegClicked(currentKeg)"
    [class.selected]="currentKeg === selectedKeg"
    [keg]="currentKeg">
  </keg-display>
  `
})

export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void{
    console.log("child",clickedKeg);
    this.selectedKeg = clickedKeg;
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
      new Keg("BeerC", "BrandC", 6, 7, 2),
      new Keg("BeerD", "BrandD", 6, 8, 3),
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
