import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Hero } from './hero';

@Injectable()
export class HeroSearchService {

    constructor(private http: Http) { }

    //A request-cancel-new-request sequence is difficult to implement with Promises, but easy with Observables.
    search(term: string): Observable<Hero[]> {
        return this.http
            .get(`app/heroes/?name=${term}`)
            .map(response => response.json().data as Hero[]);
    }
}