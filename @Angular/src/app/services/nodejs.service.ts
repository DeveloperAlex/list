import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';  // HTTP_PROVIDERS
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Config } from "../config";


@Injectable()
export class NodejsService {
  private restfulUrl = Config.urls.restfulUrl;

  constructor(private http: Http) { 
  }

  // getPong(): Observable<Object> {
  getPong(): Observable<any> {
    return this.http.get(this.restfulUrl + 'ping')
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    // debugger;
    let data = res.json();
    // return body.data || { };
    return data;
  }

  private handleError (error: Response | any) {
    debugger;
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
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
