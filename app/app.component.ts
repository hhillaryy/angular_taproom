import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
  <h1>Tap Room App</h1>
  <h3 *ngFor="#keg of kegs"> {{keg.name}} {{keg.brand}} {{"$" + keg.price}} {{keg.abv + "%"}}
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
}


export class Keg {
  public pintsLeft: number = 124;
  constructor(public name: string, public brand: string, public price: number, public abv: number, public id: number) {}
  soldPint() {
    this.pintsLeft -= 1;
  }
}
