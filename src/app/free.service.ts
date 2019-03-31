import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Gitsearch } from './gitsearch'

// import {Gitsearch } from './gitsearch';



@Injectable({
  providedIn: 'root'
})

export class FreeService {
  private userName= 'teabag98';
  private Client_id = '53477246ba4418ec6df9';
  private client_secrets = '792b79c78fa21fb3f21e0721dc828781a97e52f4';
   
apiUrl ='https://api.github.com/users/'+this.userName;

constructor(private http:HttpClient){}

getResults(){
  return this.http.get<Gitsearch[]>(this.apiUrl);
}

}
