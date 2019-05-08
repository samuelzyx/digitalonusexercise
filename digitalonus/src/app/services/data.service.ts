import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
declare var require: any;

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private http: Http) {
    }

    getData() {
        let headers = new Headers({});

        return this.http.get('https://jsonplaceholder.typicode.com/users', { headers: headers })
        .map(res => res.json());
    }
}
