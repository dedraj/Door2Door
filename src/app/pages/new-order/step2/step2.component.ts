import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { FormService } from 'src/app/form.service';
import { Observable } from 'rxjs';

interface City {
  recieverName: string;
  viewName: string;
}
@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit{

  formGroup: FormGroup;
  titleAlert: string = 'This field is required';
  // post: any = '';
  
  selectCity2 = new FormControl('', Validators.required);
  cities: City[] = [
    {recieverName: 'jaipur', viewName: 'Jaipur'},
    {recieverName: 'delhi', viewName: 'Delhi'},
    {recieverName: 'pune', viewName: 'Pune'},
    {recieverName: 'mumbai', viewName: 'Mumbai'},
    {recieverName: 'gujrat', viewName: 'Gujrat'},
  ];
  constructor(
    private formBuilder: FormBuilder,
    private formService: FormService
  ) {
    this.formGroup = this.formBuilder.group({
      extraName: ''
    });
    const one = '1';
    this.formService.stepReady(this.formGroup, one)
  }
  ngOnInit(): void {
    this.createForm();
    this.setChangeValidate()
  }
  change(title){
    this.formGroup.patchValue({ extraName: title})
  }

  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.formGroup = this.formBuilder.group({
      'recieverEmail': [null, [Validators.required, Validators.pattern(emailregex)], this.checkInUseEmail],
      'recieverName': [null, Validators.required],
      'validate': '',
      'Telephone2':[null, Validators.required],
      'selectCity2':[null, Validators.required],
      'state2':[null, Validators.required],
      'zip2':[null, Validators.required],
      'address2':[null, Validators.required],
    });
    const one = '1';
    this.formService.stepReady(this.formGroup, one)
  } 

  setChangeValidate() {
    this.formGroup.get('validate').valueChanges.subscribe(
      (validate) => {
        if (validate == '1') {
          this.formGroup.get('recieverName').setValidators([Validators.required, Validators.minLength(3)]);
          this.titleAlert = "You need to specify at least 3 characters";
        } else {
          this.formGroup.get('recieverName').setValidators(Validators.required);
        }
        this.formGroup.get('recieverName').updateValueAndValidity();
      }
    )
  }

  get recieverName() {
    return this.formGroup.get('recieverName') as FormControl
  }

  checkPassword(control) {
    let enteredPassword = control.value
    let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { 'requirements': true } : null;
  }

  checkInUseEmail(control) {
    // mimic http database access
    let db = ['tony@gmail.com'];
    return new Observable(observer => {
      setTimeout(() => {
        let result = (db.indexOf(control.value) !== -1) ? { 'alreadyInUse': true } : null;
        observer.next(result);
        observer.complete();
      }, 4000)
    })
  }

  getErrorEmail() {
    return this.formGroup.get('recieverEmail').hasError('required') ? 'Field is required' :
      this.formGroup.get('recieverEmail').hasError('pattern') ? 'Not a valid emailaddress' :
        this.formGroup.get('recieverEmail').hasError('alreadyInUse') ? 'This emailaddress is already in use' : '';
  }

  // onSubmit(post) {
  //   this.post = post;
  // }

}
