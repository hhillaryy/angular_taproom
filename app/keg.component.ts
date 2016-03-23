import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
  <h3>{{keg.name}} {{keg.brand}} {{"$" + keg.price + ".00"}} {{keg.abv + "%ABV"}} {{"Pints left: " + keg.pintsLeft}}</h3>
  <button (click)="soldPint(keg)"> Sell Pint </button>
  `
})

export class KegComponent {
  public keg: Keg;
  soldPint(selectedKeg: Keg) {
    if((this.keg.pintsLeft - 1) <= 10 ) {
      alert("Keg is getting low");
      this.keg.pintsLeft -= 1;
      console.log("Keg is getting low");
    } else if (this.keg.pintsLeft === 0) {
      alert("KEG IS EMPTY!!!");
      console.log("KEG IS EMPTY!!!")
    } else {
      this.keg.pintsLeft -= 1;
      console.log("Filling a pint");
    }
  }
}
