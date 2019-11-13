import { Favrouite } from './../../models/favrouite';
import { ProfileService } from './../../services/profile/profile.service';
import { Component, OnInit, HostListener, Input} from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  wasInside:boolean;
  listLimit:Number;
  favoritesItem:any;
  

  constructor(private profileservice:ProfileService) {
       
  }
  
  ngOnInit() {
    this.profileservice.getFavrouite().subscribe((data: any[])=>{
      console.log(data);
      this.favoritesItem = data;
      this.listLimit = 4;
    })  
  }
  
   @HostListener('click')
    clickInside() {
       this.wasInside = true;
       console.log("clickInside: "+this.wasInside );
   }

   toggleSideNav(){
        document.getElementById("navbarSide").classList.toggle("change");
  }

   @HostListener('document:click', ['$event'])
   clickout(event) {
     if (!this.wasInside) {
        document.getElementById("navbarSide").classList.remove("change");
      }
     this.wasInside = false;
   }
  
   showMoreData(){
    this.listLimit = this.favoritesItem.length;
   }

   showLessData(){
    this.listLimit = 4; 
  }
}
