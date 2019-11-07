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
  @Input() flagFromNav: boolean;
   wasInside:boolean;
   @HostListener('click')
    clickInside() {
       this.wasInside = true;
       console.log("clickInside: "+this.wasInside );
   }

   @HostListener('document:click', ['$event'])
   clickout(event) {
     console.log(this.flagFromNav);
     this.wasInside = this.flagFromNav;
    // document.getElementById("navbarSide").classList.remove("change");
     if (!this.wasInside) {
        document.getElementById("navbarSide").classList.remove("change");
      }
     this.flagFromNav = false;
   }
  
}
