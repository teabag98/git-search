import { Component, OnInit } from '@angular/core';
import {FreeService } from './free.service';
import { Gitsearch } from './gitsearch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  users:Gitsearch[]
  constructor(private freeservice:FreeService){

  }

  ngOnInit(){
  return this.freeservice.getResults().subscribe(data => {
   this.users = data; 
  })
  }
  }
 