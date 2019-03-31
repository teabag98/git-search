import { Component, OnInit } from '@angular/core';
import {FreeService } from '../free.service';

@Component({
  selector: 'app-profile-search',
  templateUrl: './profile-search.component.html',
  styleUrls: ['./profile-search.component.css']
})
export class ProfileSearchComponent implements OnInit {

  constructor(private https: FreeService) { }
  userName:string;

  updateSearch(){
this.https.search(this.userName)
  }
  ngOnInit() {

  }

}
