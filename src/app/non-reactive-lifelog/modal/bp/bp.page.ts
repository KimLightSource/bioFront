import {Component, OnInit} from '@angular/core';
import {LifelogService} from "../../../services/lifelog.service";
import {FormGroup} from "@angular/forms";
import {modalService} from "../../../services/modal.service";

@Component({
  selector: 'app-bp',
  templateUrl: './bp.page.html',
  styleUrls: ['./bp.page.scss'],
})
export class BpPage implements OnInit {

  lifeLogData: any;
  detail: boolean = false;
  modalOpen : boolean= false;
  formGroup !: FormGroup

  modalData = {
      lifelogName:'혈압',
      text: ['최고혈압(mmHg)','최저혈압(mmHg)','맥박'],
      textData: ['maxBp', 'minBp', 'pulse'],
      select: [
        {title: '측정장소', selCont: ['집', '병원', '직장', '기타'], selectData: 'location', selContData: ['HOME', 'HOSPITAL', 'JOB', 'EXT']},
        {title : '혈압약 복용', selCont: ['예', '아니오'], selectData: 'drugField', selContData: ['Y', 'N']},
      ],
     url: 'lifelog/bp'
    }

  visible : boolean[] = [] ;

  constructor(
    private lifelogService: LifelogService,
    private modalService: modalService
  ) {
    this.selectAllBp();
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
    this.selectAllBp();
  }



  async selectAllBp() {
    this.lifelogService.getAllBp()
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
    for(let i=0; i<this.lifeLogData.length; i++){
      if(this.visible.length <= this.lifeLogData.length)
      this.visible.splice(i, 0,false)
    }

  }

  ngOnInit() {
    this.selectAllBp()

  }

}
