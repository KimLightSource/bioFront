import {Component, OnInit} from '@angular/core';
import {LifelogService} from "../../../services/lifelog.service";
import {FormGroup} from "@angular/forms";
import {modalService} from "../../../services/modal.service";

@Component({
  selector: 'app-bs',
  templateUrl: './bs.page.html',
  styleUrls: ['./bs.page.scss'],
})
export class BsPage implements OnInit {

  lifeLogData: any;
  detail: boolean = false;
  modalOpen : boolean= false;
  formGroup !: FormGroup

  modalData = {
    lifelogName:'혈당',
    text: ['혈당(mg/dL)'],
    textData: ['bs'],
    select: [
      {title: '상태', selCont: ['공복', '식후2시간', '취침전'], selectData: 'bsstatus', selContData: ['EMPTY', 'TWO_HOUR_AFTER', 'BEFORE_SLEEP',]},
      {title : '인슐린 복용', selCont: ['예', '아니오'], selectData: 'insulin', selContData: ['Y', 'N']},
      {title: '측정장소', selCont: ['집', '병원', '직장', '기타'], selectData: 'measurementLocation', selContData: ['HOME', 'HOSPITAL', 'JOB', 'ETC']}
    ],
    url: 'lifelog/bs'
  }

  visible : boolean[] = [] ;

  constructor(
    private lifelogService: LifelogService,
    private modalService: modalService
  ) {
    this.selectAllBs();
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
    this.selectAllBs();
  }



  async selectAllBs() {
    this.lifelogService.getAllBs()
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
    this.selectAllBs()

  }

}
