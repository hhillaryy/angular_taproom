import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
import { EditKegDetailsComponent} from './edit-keg-details.component';
import { NewKegComponent } from './new-keg.component';
import {PintsRemainingPipe} from './pintsRemaining.pipe';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  directives: [KegComponent, EditKegDetailsComponent, NewKegComponent],
  pipes: [PintsRemainingPipe],
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="all" selected="selected">Show All</option>
    <option value="empty">Near Empty (<10 pints)</option>
    <option value="full">Mostly full (>10 pints)</option>
  </select>
  <keg-display *ngFor="#currentKeg of kegList | pintsRemaining:filterKeg"
  [class.cheap]="currentKeg.price <= 5"
  [class.expensive]="currentKeg.price >= 5"
  [class.highABV]="currentKeg.abv > 5"

  (click)="kegClicked(currentKeg)"
    [class.selected]="currentKeg === selectedKeg"
    [keg]="currentKeg">
  </keg-display>
  <edit-keg-details *ngIf="selectedKeg" [keg]="selectedKeg">
  </edit-keg-details>
  <br>
  <br>
  <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
  `
})

export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg
  public filterKeg: string = "all";
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void{
    console.log("child",clickedKeg);
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
  createKeg(newKegInformation: string[]): void {
    this.kegList.push(
      new Keg(newKegInformation[0], newKegInformation[1], parseInt(newKegInformation[2]), parseInt(newKegInformation[3]), this.kegList.length)
    );
  }
  onChange(filterOption) {
  this.filterKeg = filterOption;
  console.log(this.filterKeg);
  }
}
