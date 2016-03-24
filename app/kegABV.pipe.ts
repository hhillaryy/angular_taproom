import {Pipe, PipeTransform} from 'angular2/core';
import {Keg} from './keg.model';

@Pipe({
  name: "kegABV"
})

export class KegABVPipe implements PipeTransform {
  transform(input: Keg[], args) {
    var option = args[0];
    if(option === "high") {
      return input.filter((keg) => {
        console.log("returning only kegs with high ABV");
        return keg.abv > 7;
      });
    } else if (option === "low") {
      return input.filter((keg) => {
        console.log("returning only kegs with low ABV");
        return keg.abv <= 7;
      });
    } else {
      console.log("Returning all abvs");
      return input;
    }
  }
}
