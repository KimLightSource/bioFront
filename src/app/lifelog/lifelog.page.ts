import { Component } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {modalService} from "../api/modal-service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-lifelog',
  templateUrl: 'lifelog.page.html',
  styleUrls: ['lifelog.page.scss']
})
export class lifelogPage {
  public content : any;
  public text : any;
  public modalGroup!: FormGroup;
  public bpContent = {
    lifelogName:'혈압',
    text: ['최고혈압(mmHg)','최저혈압(mmHg)','맥박'],
    select: [
      {title: '측정장소', selCont: ['집', '병원', '직장', '기타']},
      {title : '혈압약 복욕', selCont: ['예', '아니오']}
    ]
  }

  public bsContent = {
    lifelogName : '혈당',
    text: ['혈당'],
    select:
      [{title: '상태', selCont: ['공복', '식후2시간', '취침전']},
        {title: '인슐린 복용', selCont: ['예', '아니오']},
        {title: '측정장소', selCont: ['집', '병원', '직장', '기타']}]
  }
  public weightContent = {
    lifelogName : '체중',
    text: ['신장','체중','체질량','체지방',],
    select:
      [{title: '성별', selCont: ['남성', '여성']},
        {title: '측정장소', selCont: ['집', '병원', '직장', '기타']}
      ]
  }

  public appPages = [
    { title: '혈압',  icon: 'pulse' , modalContent: this.bpContent},
    { title: '혈당', url: '/lifelogDetail/bs', icon: 'fitness', modalContent: this.bsContent},
    { title: '체중', url: '/lifelogDetail/weight', icon: 'fast-food', modalContent: this.weightContent },
    { title: '칼로리', url: '/lifelogDetail/cal', icon: 'cal' , modalContent: ['최고혈압', '최저혈압', '맥박']},
    { title: '걸음수', url: '/lifelogDetail/step', icon: 'footsteps' , modalContent: ['최고혈압', '최저혈압', '맥박']},
    { title: '체온', url: '/lifelogDetail/temperature', icon: 'thermometer' , modalContent: ['최고혈압', '최저혈압', '맥박']},
  ];


  constructor(
    private modalController: ModalController,
  ) {}

  initText(groupContent:any) {  // form빌더에 들어갈 동적 formGroupName 초기화
    this.text = {};
    for(let input of groupContent.text) {
      this.text[input] = ''
    }
    for(let select of groupContent.select) {
      this.text[select.title] = ''
    }
    // for(let select of groupContent.data) {
    //   this.text[select] = ''
    // }
  }

  modalCon:boolean=false;
  setOpen(bool:boolean, p:any, groupContent:any) {
    this.initText(groupContent);
    this.modalCon = bool;
    this.content = p;
    this.modalGroup = this.makeFormGroup(this.text) // form그룹을 만들어서 modal로 전달하기 위함
    console.log(this.text)
    console.log(p);
    console.log(this.modalCon)
  }

  setClose(event:any){
    this.modalCon=event
  }



  makeFormGroup(value:any): FormGroup {
    let fg:any = {}
    for (let formName of value) {

      fg.formName = new FormControl(formName);
    }
    return new FormGroup(fg);
  }

  setCheckoutForm(event:any){
    event.group(this.text);
  }

  async selectLatest() {

  }




  // async openLifelogRegisterModal(content: any) {
  //   const modal = await this.modalController.create({
  //     component: this.getComponent(title),
  //     cssClass: 'lifelog-register-modal',
  //     componentProps: {
  //       lifelogType: this.lifelogType,
  //       lifelogName: this.lifelogName
  //     }
  //   });
  //
  //   await modal.present();
  //
  //   const { data } = await modal.onWillDismiss();
  //   if (data === ResponseCode.ok) {
  //     this.search.next();
  //   }
  // }



}
