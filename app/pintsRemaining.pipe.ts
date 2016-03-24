import {Pipe, PipeTransform} from 'angular2/core';
import {Keg} from './keg.model';

@Pipe({
  name: "pintsRemaining"
})

export class PintsRemainingPipe implements PipeTransform {
  transform(input: Keg[], args) {
    var option = args[0];
    if(option === "full") {
      return input.filter((keg) => {
        console.log("returning only ones with more than 10 pints");
        return keg.pintsLeft > 10;
      });
    } else if (option === "empty") {
      return input.filter((keg) => {
        console.log("returning only ones with less than 10 pints");
        return keg.pintsLeft <= 10;
      });
    } else {
      console.log("retuning all");
      return input;
    }
  }
}
