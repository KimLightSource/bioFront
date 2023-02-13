import { Component, OnInit } from '@angular/core';
import {LifelogService} from "../../../api/lifelogService";

@Component({
  selector: 'app-bp',
  templateUrl: './bp.page.html',
  styleUrls: ['./bp.page.scss'],
})
export class BpPage implements OnInit {

  lifeLogData: any;
  detail: boolean = false;
  constructor(
    private lifelogService: LifelogService
  ) {
    this.selectAllBp();
  }

  showDetail() {
    if(this.detail == true) this.detail = false
    else this.detail = true;
  }



  async selectAllBp() {
    this.lifelogService.getAllBp()
      .subscribe( res => {
        if (res) {
          console.log(res.body);
          this.lifeLogData = res.body;
        }
      }, async error => {
        this.lifeLogData = null;
      })
  }

  ngOnInit() {

  }

}
