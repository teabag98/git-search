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
  constructor(private freeservice:FreeService){

  }

  ngOnInit(){
  return this.freeservice.getResults().subscribe(data => {
    
   this.data= data;
  });
  }
  }
 