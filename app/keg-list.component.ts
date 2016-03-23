import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
import { EditKegDetailsComponent} from './edit-keg-details.component';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  directives: [KegComponent, EditKegDetailsComponent],
  template: `
  <keg-display *ngFor="#currentKeg of kegList"
  [class.cheap]="currentKeg.price <= 5"
  [class.expensive]="currentKeg.price >= 5"
  [class.highABV]="currentKeg.abv > 5"

  (click)="kegClicked(currentKeg)"
    [class.selected]="currentKeg === selectedKeg"
    [keg]="currentKeg">
  </keg-display>
  <edit-keg-details *ngIf="selectedKeg" [keg]="selectedKeg">
  </edit-keg-details>
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
