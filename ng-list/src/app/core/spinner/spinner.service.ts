import { Injectable } from '@angular/core';

@Injectable()
export class SpinnerService {
  private spinArray: string[];
  public spinning: boolean;  // TODO: Change this to a Property Getter instead (check TypescriptLang.org how).

  constructor() { 
    this.spinning = false;
    this.spinArray = new Array<string>();
  }

  spin(spinText: string) {
    if (!spinText) return;
    
    if (this.spinArray.indexOf(spinText) === -1) {
      this.spinArray.push(spinText);
    }

    this.spinning = true;
  }
  
  stop(spinText: string) {
    if (!spinText) return;

    var index = this.spinArray.indexOf(spinText);
    if (index > -1) {
      this.spinArray.splice(index, 1);
    }
    
    if (this.spinArray.length === 0) {
      this.spinning = false;
    }
  }

}

// https://material.angular.io/components/component/progress-spinner
// usSpinnerService.spin('deleteSpinner');
// usSpinnerService.stop('deleteSpinner');
