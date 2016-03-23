import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
  <div class="keg-form">
  <h3>Create Keg:</h3>
  <input placeholder="beer name" class="col-sm-8 input-lg" #newName>
  <input placeholder="beer brand" class="col-sm-8 input-lg" #newBrand>
  <input placeholder="beer price" class="col-sm-8 input-lg" #newPrice>
  <input placeholder="beer ABV" class="col-sm-8 input-lg" #newABV>
  <button (click)="addKeg(newName, newBrand, newPrice, newABV)" class="btn-success btn-lg add-button" >Add</button>
</div>
  `
})
export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<String[]>;
  constructor(){
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(newName: HTMLInputElement, newBrand: HTMLInputElement, newPrice: HTMLInputElement, newABV: HTMLInputElement){
    // newKeg = new Keg(newName.value, newBrand.value, parseInt(newPrice.value), parseInt(newABV.value), 0)
    this.onSubmitNewKeg.emit([newName.value, newBrand.value, newPrice.value, newABV.value]);
    newName.value = "";
    newBrand.value = "";
    newPrice.value = "";
    newABV.value = "";
  }
}
