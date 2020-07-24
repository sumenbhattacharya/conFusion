import { Injectable } from '@angular/core';
import {Leader} from '../shared/leader'
import { map } from 'rxjs/operators';
import { baseURL } from '../shared/baseurl';
import { HttpClient } from '@angular/common/http';
import { resolve } from 'url';
import { Observable,of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private http: HttpClient) { }

  getLeaders(): Observable<Leader[]>{
    return this.http.get<Leader[]>(baseURL + 'leaders');
  }

  getLeader(id: string): Observable<Leader>{
    return this.http.get<Leader>(baseURL + 'leader' +id);
  }
   getFeaturedLeader(): Observable<Leader>{
     return this.http.get<Leader[]>(baseURL + 'leaders?featured=true').pipe(map
      (leaders=>leaders[0]));
 }
}
