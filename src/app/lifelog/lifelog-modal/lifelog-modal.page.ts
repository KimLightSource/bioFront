import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {modalService} from "../../api/modal-service";

@Component({
  selector: 'app-lifelog-modal',
  templateUrl: './lifelog-modal.page.html',
  styleUrls: ['./lifelog-modal.page.scss'],
})
export class LifelogModalPage implements OnInit {

  // setOpen(isOpen: boolean) {
  //   console.log(this.isModalOpen)
  //   this.isModalOpen = isOpen;
  // }
  ngOnInit() {
  }
  @Input() content! : any;

  @Input() modalOpen! : boolean;

  @Output() modalClosed = new EventEmitter<boolean>;


  constructor(
  ) {   }

  setOpen(isOpen: boolean) {
    console.log(this.content);
    this.modalOpen = isOpen;
    this.modalClosed.emit(this.modalOpen)
  };


}
