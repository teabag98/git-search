import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Gitsearch } from './gitsearch'
import { environment } from 'src/environments/environment';

// import {Gitsearch } from './gitsearch';



@Injectable({
  providedIn: 'root'
})

export class FreeService {
   private userName:string;
  private Client_id = '53477246ba4418ec6df9';
  private client_secrets = '792b79c78fa21fb3f21e0721dc828781a97e52f4';
   
apiUrl ='https://api.github.com/users/';

constructor(private http:HttpClient){}

getResults(userName){
  return this.http.get<Gitsearch>(this.apiUrl + userName + "?access_token=" + environment.access_token);
}
getRepos(userName){
  return this.http.get<Gitsearch>(this.apiUrl + userName + '/repos' + "?access_token=" + environment.access_token);
}
}
