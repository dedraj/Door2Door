import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { FormService } from 'src/app/form.service';
import { Observable } from 'rxjs';

interface City {
  name: string;
  viewName: string;
}
@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit{

  formGroup: FormGroup;
  titleAlert: string = 'This field is required';
  // post: any = '';
  selectPickupCity = new FormControl('', Validators.required);
  cities: City[] = [
    {name: 'jaipur', viewName: 'Jaipur'},
    {name: 'delhi', viewName: 'Delhi'},
    {name: 'pune', viewName: 'Pune'},
    {name: 'mumbai', viewName: 'Mumbai'},
    {name: 'gujrat', viewName: 'Gujrat'},
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
      'email': [null, [Validators.required, Validators.pattern(emailregex)], this.checkInUseEmail],
      'name': [null, Validators.required],
      'description': [null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      'validate': '',
      'selectPickupCity':[null, Validators.required],
      'telephone1':[null, Validators.required],
      'state1':[null, Validators.required],
      'zip1':[null, Validators.required],
      'address1':[null, Validators.required],
    });
    const one = '1';
    this.formService.stepReady(this.formGroup, one)
  } 

  setChangeValidate() {
    this.formGroup.get('validate').valueChanges.subscribe(
      (validate) => {
        if (validate == '1') {
          this.formGroup.get('name').setValidators([Validators.required, Validators.minLength(3)]);
          this.titleAlert = "You need to specify at least 3 characters";
        } else {
          this.formGroup.get('name').setValidators(Validators.required);
        }
        this.formGroup.get('name').updateValueAndValidity();
      }
    )
  }

  get name() {
    return this.formGroup.get('name') as FormControl
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
    return this.formGroup.get('email').hasError('required') ? 'Field is required' :
      this.formGroup.get('email').hasError('pattern') ? 'Not a valid emailaddress' :
        this.formGroup.get('email').hasError('alreadyInUse') ? 'This emailaddress is already in use' : '';
  }

  // onSubmit(post) {
  //   this.post = post;
  // }

}
