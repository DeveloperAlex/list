import { Injectable } from '@angular/core';
import { Http, HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/add/operator/map'


@Injectable()
export class NodejsService {

  constructor(http: Http) { 
    
  }

}




/*
// https://angular.io/docs/ts/latest/guide/server-communication.html

// https://angular.io/docs/ts/latest/guide/server-communication.html#!#the-herolistcomponent-class
// https://angular.io/docs/ts/latest/guide/server-communication.html#!#fetch-data-with-_http-get-_

// https://angular.io/docs/ts/latest/api/http/index/Http-class.html

@Component({
  selector: 'http-app',
  viewProviders: [HTTP_PROVIDERS],
  templateUrl: 'people.html'
})
class PeopleComponent {
  constructor(http: Http) {
    http.get('people.json')
      // Call map on the response observable to get the parsed people object
      .map(res => res.json())
      // Subscribe to the observable to get the parsed people object and attach it to the
      // component
      .subscribe(people => this.people = people);
  }
}
*/
