import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-search',
  templateUrl: './profile-search.component.html',
  styleUrls: ['./profile-search.component.css']
})
export class ProfileSearchComponent implements OnInit {

  constructor() { }
  username:string;
  search(username:string){
this.username = username;
  }

  ngOnInit() {
  }

}
