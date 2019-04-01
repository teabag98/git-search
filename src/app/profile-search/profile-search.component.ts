import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FreeService } from '../free.service';

@Component({
  selector: 'app-profile-search',
  templateUrl: './profile-search.component.html',
  styleUrls: ['./profile-search.component.css']
})
export class ProfileSearchComponent implements OnInit {

  @Output() searchUser = new EventEmitter<string>();
  userName:string;
  
  constructor(private https: FreeService) { }
 
  ngOnInit() {

  }

  search() {
    console.log(this.userName);
    
    this.searchUser.emit(this.userName);
  }

}
