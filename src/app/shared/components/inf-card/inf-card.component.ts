import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { RecommendationService } from 'src/app/services/recoService/recommendation.service';
import { Influencer } from '../../models/influencer';

@Component({
  selector: 'app-inf-card',
  templateUrl: './inf-card.component.html',
  styleUrls: ['./inf-card.component.scss'],
})
export class InfCardComponent implements OnInit {
  @Input() influencer: Influencer;
  ratingsNb: number;
  avgRatung=0;
  roundAvgRating=0;
  isExist: boolean; // Check whether the Influencer has recommendations or not
  constructor(
    private router: Router,
   private recoService: RecommendationService,

  ) { }

  ngOnInit() {
    this.getInfReco();
  }

  goToInfProfile() {
    this.router.navigate([`/tabs/infs-profile/${this.influencer.idInf}`]);
  }
    //get all inf recommendation
    async getInfReco(){
      await this.recoService.getInfReco(this.influencer.idInf).subscribe((data)=>{
        this.avgRatung = 0;
        this.roundAvgRating = 0;
        if(data.length > 0){
          this.isExist = true;
          this.ratingsNb = data.length;
          data.forEach(rec => {
            this.avgRatung = this.avgRatung + rec.starNb;
            console.log(this.avgRatung);
            console.log(rec);
          });

          this.avgRatung = this.avgRatung / this.ratingsNb;
          this.avgRatung = Number(this.avgRatung.toFixed(2));
          this.roundAvgRating = Math.round(this.avgRatung);

        }else{
          this.isExist = false;
          this.roundAvgRating = 1;

        }
      });
    };

}
