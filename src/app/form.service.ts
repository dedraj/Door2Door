import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { HttpUrlEncodingCodec } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class FormService {

  private step1Source: Subject<FormGroup> = new Subject();
  step1: Observable<FormGroup> = this.step1Source.asObservable();

  private step2Source: Subject<FormGroup> = new Subject();
  step2: Observable<FormGroup> = this.step2Source.asObservable();

  private step3Source: Subject<FormGroup> = new Subject();
  step3: Observable<FormGroup> = this.step3Source.asObservable();

  
  customerForm: FormGroup = this._formBuilder.group({
  })
  recieverForm: FormGroup = this._formBuilder.group({
  })
  packageForm: FormGroup = this._formBuilder.group({
  })
  // mainForm: FormGroup = this._formBuilder.group({
  //   update:'',...this.customerForm.value,...this.recieverForm.value,...this.packageForm.value
  // })
  constructor(
    private _formBuilder: FormBuilder
  ) {
    // let u= this.mainForm.value
    let c= this.customerForm.value
    let r= this.recieverForm.value
    let p= this.packageForm.value
    this.step1.subscribe(form =>
      form.valueChanges.subscribe(val => {
        let m= c
        console.log(m) 
        m.name = val.name
        m.email = val.email
        m.telephone=val.telephone
        m.city=val.city
        m.state=val.state
        m.zip=val.zip
        m.address=val.address
      })
    )
    this.step2.subscribe(form =>
      form.valueChanges.subscribe(val => {
        // console.log(val)
        let m= r
        m.address = val.address
        m.name = val.name
        m.email = val.email
        m.telephone=val.telephone
        m.selectDropCity=val.selectDropCity
        m.state=val.state
        m.zip=val.zip
        m.address=val.address
      })
    )
    this.step3.subscribe(form =>
      form.valueChanges.subscribe(val => {
        let m=p
        m.length= val.length
        m.breadth= val.breadth
        m.height= val.height
        m.weight= val.weight
        m.dMode= val.dMode
      })
    )
  }

  stepReady(form: FormGroup, part) {
    switch (part) {
      case '1': { this.step1Source.next(form) }
      case '2': { this.step2Source.next(form) }
      case '3': { this.step3Source.next(form) }
    }
  }
}
