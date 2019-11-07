import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  collection = [];
  favrouiteIconActive:string = null;
  constructor(){
    for(let i=1;i<=25;i++){
      let Obj = {'name': `Employee Name ${i}`}
      this.collection.push(Obj);
    }
  }
  
  ngOnInit() {
  }

  alert(result){
    var idValue = result.target.id
    alert(idValue);
    console.log(result);
    this.favrouiteIconActive = idValue;
  }
  
 
}
