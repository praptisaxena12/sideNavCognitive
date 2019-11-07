import { Component, OnInit} from '@angular/core';
import {ProfileComponent} from '../profile/profile.component'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {    
  }
  
  flagFromNav:boolean;
  toggleSideNav(){
    this.flagFromNav = true;
        document.getElementById("navbarSide").classList.toggle("change");
  }
  
}
