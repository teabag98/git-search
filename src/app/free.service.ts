import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Gitsearch } from './gitsearch'
import { environment } from 'src/environments/environment';

import {Repos } from './repos';



@Injectable({
  providedIn: 'root'
})

export class FreeService {
apiUrl ='https://api.github.com/users/';

constructor(private http:HttpClient){}

getResults(userName){
  return this.http.get<Gitsearch>(this.apiUrl + userName + "?access_token=" + environment.access_token);
}
getRepos(userName){
  return this.http.get<Repos>(this.apiUrl + userName + '/repos' + "?access_token=" + environment.access_token);
}
}
