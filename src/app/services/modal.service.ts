import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class modalService {
  formData : any = {};

  constructor(private http: HttpClient,
              private formBuilder: FormBuilder,
  ) {


  }
  makeFormGroupData(modalData:any):FormGroup {  // 폼 그룸 데이터 생성
    for(let textGroupName of modalData.textData) {
      this.formData[textGroupName] = ['']
    }
    for(let textGroupName of modalData.select) {
      this.formData[textGroupName.selectData] = ['']
    }
    console.log(this.formData)

    return this.formBuilder.group(this.formData)

  }

  formGroupDataInit(modalData : any, formGroup : FormGroup):void {  // 폼 그룹 데이터 초기화
    let data : any = {}
    // for(let value of modalData.textData) {
    //     //   data[value] = ''
    //     // }
    //     // for(let value of modalData.select) {
    //     //   data[value.selectData] = ''
    //     // }
    //     // formGroup.setValue(data)
    formGroup = this.formBuilder.group([])
  }

}
