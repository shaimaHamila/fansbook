import { Component, Input, OnInit } from '@angular/core';
import { EnpService } from 'src/app/services/enpService/enp.service';
import { Entrepreneur } from 'src/app/shared/models/entrepreneur';
import { Recommendation } from 'src/app/shared/models/Recommendation';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss'],
})
export class RecommendationComponent implements OnInit {
  @Input() recommendation: Recommendation;
  enp = new Entrepreneur();
  constructor(
    private enpService: EnpService,
  ) { }

  ngOnInit() {
    this.getEnpData();
  }

  //Get entrepreneur data
  async getEnpData(){
    await this.enpService.getEnpById(this.recommendation.idEnp).subscribe(res =>{
      this.enp = res;
    });
  }

}
