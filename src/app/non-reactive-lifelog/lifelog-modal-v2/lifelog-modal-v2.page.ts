import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {modalService} from "../../services/modal.service";
import {LifelogService} from "../../services/lifelog.service";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-lifelog-modal-v2',
  templateUrl: './lifelog-modal-v2.page.html',
  styleUrls: ['./lifelog-modal-v2.page.scss'],
})
export class LifelogModalV2Page implements OnInit {
  @Input() modalOpen! : boolean;
  @Input() modalData! : any;
  @Input() formGroup! : FormGroup
  @Output() modalClosed = new EventEmitter<boolean>;



  constructor(
      private modalService : modalService,
      private lifelogService : LifelogService,
      private alertController: AlertController
  ) {

  }

  ngOnInit() {

  }

  setClose(isOpen: boolean) {
    this.modalOpen = isOpen;
    this.modalClosed.emit(this.modalOpen);
    this.modalService.formGroupDataInit(this.modalData, this.formGroup);
  };

  async insertModalData() {
    this.lifelogService.saveModalData(this.formGroup.value, this.modalData.url)
      .subscribe( res => {
        if (res) {
          console.log(res.body);
        }
      }, async error => {
      })
  }




  onSubmit():void {
    console.log('넘어간 데이터 :'+this.formGroup.value.forEach +', 요청 url :'+ this.modalData.url)
    this.insertModalData();
    this.setClose(false)
    }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: '저장되었습니다',
      buttons: ['OK'],
    });
    await alert.present();
  }

}
