import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-inf-filter-modal',
  templateUrl: './inf-filter-modal.component.html',
  styleUrls: ['./inf-filter-modal.component.scss'],
})
export class InfFilterModalComponent implements OnInit {

  //Specialities Autocomplete


  //Filter
  filters = {
    budgetByOrder: 'highToLow',
    budget : {
      lowerBudget: '0',
      higherBudget: '10000000'
    },
    instaFollowers : {
      lowerInstaFollowers: '0',
      higherInstaFollowers: '10000000'
    },
    fbFollowers : {
      lowerFbFollowers: '0',
      higherFbFollowers: '10000000'
    },
  };
  constructor( public navCtrrl: NavController) { }

  ngOnInit() {};

  budgetChange(event){
    console.log(event.detail.value);
    const type = event.detail.value;
    this.filters.budget.lowerBudget = type.lower;
    this.filters.budget.higherBudget = type.upper;
    console.log(this.filters.budget);
  };
  fbFollwersChange(event){
    console.log(event.detail.value);
    const type = event.detail.value;
    this.filters.fbFollowers.lowerFbFollowers = type.lower;
    this.filters.fbFollowers.higherFbFollowers = type.upper;
    console.log(this.filters.fbFollowers);
  };
  instaFollwersChange(event){
    console.log(event.detail.value);
    const type = event.detail.value;
    this.filters.instaFollowers.lowerInstaFollowers = type.lower;
    this.filters.instaFollowers.higherInstaFollowers = type.upper;
    console.log(this.filters.fbFollowers);
  }


  //Specialities


}
