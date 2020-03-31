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

  mainForm: FormGroup = this._formBuilder.group({
    name:'ah',
    email:'',
    extraName: '',
    telephone1:'',
    state1:'',
    zip1:'',
    address1:'',
    address: ''
  })
  constructor(
    private _formBuilder: FormBuilder
  ) {
    let m= this.mainForm.value
    this.step1.subscribe(form =>
      form.valueChanges.subscribe(val => {
        console.log(m)
        m.name = val.name
        m.email = val.email
        m.telephone1=val.telephone1
        m.selectPickupCity=val.selectPickupCity
        m.state1=val.state1
        m.zip1=val.zip1
        m.address1=val.address1
        m.extraName = val.extraName
      })
    )
    this.step2.subscribe(form =>
      form.valueChanges.subscribe(val => {
        // console.log(val)
        m.address = val.address
        m.recieverName = val.recieverName
        m.recieverEmail = val.recieverEmail
        m.telephone2=val.telephone2
        m.selectDropCity=val.selectDropCity
        m.state2=val.state2
        m.zip2=val.zip2
        m.address2=val.address2
        m.extraName = val.extraName
      })
    )
    this.step3.subscribe(form =>
      form.valueChanges.subscribe(val => {
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
