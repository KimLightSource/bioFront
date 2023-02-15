import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-lifelog-modal',
  templateUrl: './lifelog-modal.page.html',
  styleUrls: ['./lifelog-modal.page.scss'],
})
export class LifelogModalPage implements OnInit {

  @Input() content! : any;

  @Input() modalOpen! : boolean;
  @Input() text !: any;
  @Input() modalGroup !: FormGroup;

  @Output() modalClosed = new EventEmitter<boolean>;


  constructor(
    private formBuilder: FormBuilder,
  ) {

  }


  ngOnInit() {

  }


  setClose(isOpen: boolean) {
    console.log(this.content);
    this.modalOpen = isOpen;
    this.modalClosed.emit(this.modalOpen)
    console.log(this.text)

  };

  onSubmit():void {
    // this.checkoutForm = this.formBuilder.group(
    //   this.text
    // );
    // console.log(this.groupform.value)
  }


}
