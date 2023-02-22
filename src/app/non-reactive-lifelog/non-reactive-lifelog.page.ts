import {Component, OnInit} from '@angular/core';
import {LifelogService} from "../services/lifelog.service";

@Component({
  selector: 'non-reactive-lifelog',
  templateUrl: 'non-reactive-lifelog.html',
  styleUrls: ['non-reactive-lifelog.scss']
})
export class nonReactiveLifelogPage implements OnInit{
  maxBp :any;
  minBp :any;
  bs :any;
  weight :any;

  constructor(
    private lifelogService: LifelogService
  ) {


  }

  async selectLatestLifelog() {
    this.lifelogService.latestLifelog()
      .subscribe( res => {
        if (res) {
          this.maxBp = res.body[0].maxBp
          this.minBp = res.body[0].minBp
          this.bs = res.body[1].bs
          this.weight = res.body[2].weight
          console.log(this.maxBp, this.minBp, this.bs, this.weight)
        }
      }, async error => {
        // this.lifeLogData = null;
      })
  }


  ngOnInit() {
    this.selectLatestLifelog();
  }

}
