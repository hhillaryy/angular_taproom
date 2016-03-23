import {Component} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `
    <h3>Edit Keg: {{keg.name}} {{keg.brand}} {{"$" + keg.price}} {{keg.abv + "%"}}
  `
})
export class EditKegDetailsComponent {
  public keg: Keg;
}
