import { Component, OnInit } from '@angular/core';
import {FreeService } from './free.service';
import { Gitsearch } from './gitsearch';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  data:any;
  repos:any;
  username:string;
  constructor(private freeservice:FreeService)
  {
    this.freeservice.getResults('teabag98').subscribe(data => {
    
      this.data= data;
     });
   
     this.freeservice.getRepos('teabag98').subscribe(repos => {
       
       this.repos= repos;
      });

     
  }
  search(username){
    console.log(username);
    this.freeservice.getResults(username).subscribe(data => {
    
      this.data= data;
     });
   
     this.freeservice.getRepos(username).subscribe(repos => {
       
       this.repos= repos;
      })
  }

  ngOnInit(){ }

  }
 