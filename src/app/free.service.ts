import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Gitsearch } from './gitsearch'

// import {Gitsearch } from './gitsearch';



@Injectable({
  providedIn: 'root'
})

export class FreeService {
apiUrl ='https://api.github.com/users';

constructor(private http:HttpClient){}

getResults(){
  return this.http.get<Gitsearch[]>(this.apiUrl);
}

}
