import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FormService {

  private step1Source: Subject<FormGroup> = new Subject();
  step1: Observable<FormGroup> = this.step1Source.asObservable();

  private step2Source: Subject<FormGroup> = new Subject();
  step2: Observable<FormGroup> = this.step2Source.asObservable();

  mainForm: FormGroup = this._formBuilder.group({
    name:'',
    email:'',
    extraName: '',
    telephone1:'',
    selectCity:'',
    state1:'',
    zip1:'',
    address1:'',
    address: ''
  })

  constructor(
    private _formBuilder: FormBuilder
  ) {
    this.step1.subscribe(form =>
      form.valueChanges.subscribe(val => {
        this.mainForm.value.name = val.name
        this.mainForm.value.email = val.email
        this.mainForm.value.telephone1=val.telephone1,
        this.mainForm.value.selectCity=val.selectCity,
        this.mainForm.value.state1=val.state1,
        this.mainForm.value.zip1=val.zip1,
        this.mainForm.value.address1=val.address1,
        this.mainForm.value.extraName = val.extraName
      })
    )
    this.step2.subscribe(form =>
      form.valueChanges.subscribe(val => {
        // console.log(val)
        this.mainForm.value.address = val.address,
        this.mainForm.value.recieverName = val.recieverName
        this.mainForm.value.recieverEmail = val.recieverEmail
        this.mainForm.value.telephone2=val.telephone2,
        this.mainForm.value.selectCity2=val.selectCity2,
        this.mainForm.value.state2=val.state2,
        this.mainForm.value.zip2=val.zip2,
        this.mainForm.value.address2=val.address2,
        this.mainForm.value.extraName = val.extraName
      })
    )
  }

  stepReady(form: FormGroup, part) {
    switch (part) {
      case '1': { this.step1Source.next(form) }
      case '2': { this.step2Source.next(form) }
    }
  }
}
