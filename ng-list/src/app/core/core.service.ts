import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable()
export class CoreService {

  constructor(private titleService: Title) {
    }

//declare var window;
//var declare window;

  modernBrowser(): boolean {
    // if (window.Worker) {
    //   return true;
    // } else {
    //   return false;
    // }
    return true;
  }
  
  setTitle(title: string): void {
    this.titleService.setTitle(title);
  }

}
