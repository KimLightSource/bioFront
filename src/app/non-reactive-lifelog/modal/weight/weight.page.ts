import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {LifelogService} from "../../../services/lifelog.service";
import {modalService} from "../../../services/modal.service";

@Component({
  selector: 'app-weight',
  templateUrl: './weight.page.html',
  styleUrls: ['./weight.page.scss'],
})
export class WeightPage implements OnInit {

  lifeLogData: any;
  detail: boolean = false;
  modalOpen : boolean= false;
  formGroup !: FormGroup

  modalData = {
    lifelogName:'몸무게',
    text: ['신장(cm)', '체중(kg)', '체질량', '체지방(%)'],
    textData: ['height', 'weight', 'bodyMass', 'bodyFat'],
    select: [
      {title: '성별', selCont: ['남성', '여성'], selectData: 'gender', selContData: ['M','F']},
      {title: '측정장소', selCont: ['집', '병원', '직장', '기타'], selectData: 'location', selContData: ['HOME', 'HOSPITAL', 'JOB', 'EXT']}
    ],
    url: 'lifelog/weight'
  }

  visible : boolean[] = [] ;

  constructor(
    private lifelogService: LifelogService,
    private modalService: modalService
  ) {
    this.selectAllWeight();
    this.formGroup = this.modalService.makeFormGroupData(this.modalData)
  }

  toggleCollapse(id: number): void {
    this.visible[id] = !this.visible[id];
  }


  setOpen(bool:boolean) { //모달창 오픈
    this.modalOpen = bool;
    this.modalService.makeFormGroupData(this.modalData)
  }

  setClose(event:any){ //모달창 닫기
    this.modalOpen=event
    console.log('닫기')
    this.selectAllWeight();
  }



  async selectAllWeight() {
    this.lifelogService.getAllWeight()
      .subscribe( res => {
        if (res) {
          console.log(res.body);
          this.lifeLogData = res.body;
          this.setVisible()
        }
      }, async error => {
        this.lifeLogData = null;
      })
  }

  setVisible() {
    console.log(this.visible)
    for(let i=0; i<=this.lifeLogData.length; i++){
      if(this.visible.length <= this.lifeLogData.length)
        this.visible.splice(i, 0,false)
    }

  }

  ngOnInit() {
    this.selectAllWeight()

  }



}
