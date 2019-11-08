import { Component, OnInit, HostListener, Input} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   wasInside:boolean;
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
  
}
