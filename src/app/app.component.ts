import { Component, OnInit } from '@angular/core';
import {FreeService } from './free.service';
import { Gitsearch } from './gitsearch';
import { userInfo } from 'os';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  data:any;
  repos:any;
  constructor(private freeservice:FreeService){

  }

  ngOnInit(){
 this.freeservice.getResults().subscribe(data => {
    
   this.data= data;
  });

  this.freeservice.getRepos().subscribe(repos => {
    
    this.repos= repos;
   });

  }
  }
 