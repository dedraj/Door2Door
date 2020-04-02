import { Component, OnInit, Input, ViewChild, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { FormService } from 'src/app/form.service';
import { Observable } from 'rxjs';
import { EventEmitter } from 'protractor';
 

interface City {
  name: string;
  viewName: string;
}

@Component({
  selector: 'app-detail-form',
  templateUrl: './detail-form.component.html',
  styleUrls: ['./detail-form.component.css']
})
export class DetailFormComponent implements OnInit {  
  @Input() fid; 
  @Input() checker;
  // _check: string ='';
  // @Input() set check(check: string) {
  //   this._check = check;
  //   console.log(check);
  // }
  formGroup: FormGroup;
  titleAlert: string = 'This field is required';
  city = new FormControl('', Validators.required);
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
  ) { }
  ngOnInit(): void {
    this.createForm();
  }
  
  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.formGroup = this.formBuilder.group({
      'email': [null, [Validators.required, Validators.pattern(emailregex)], this.checkInUseEmail],
      'name': [null, [Validators.required,Validators.minLength(3)]],
      'telephone':[null, [Validators.required, Validators.minLength(10),Validators.pattern('[0-9]*')]],
      'state':[null, Validators.required],
      'city':[null, Validators.required],
      'zip':[null, [Validators.required,Validators.minLength(6),Validators.pattern('[0-9]*')]],
      'address':[null,[Validators.minLength(10), Validators.required]],
    });
    this.formService.stepReady(this.formGroup, this.fid)
  }
  get name() {
    return this.formGroup.get('name') as FormControl
  }

  // checkPassword(control) {
  //   let enteredPassword = control.value
  //   let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
  //   return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { 'requirements': true } : null;
  // }

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

  getError(name) {
    let control = this.formGroup.get(name);
    return control.hasError('required') ? 'Field is required' :
    control.hasError('pattern') ? `Not a valid ${name}` :
      control.hasError('alreadyInUse') ? `This ${name} is already in use` :
       control.hasError('minlength') ? `${name} is  too short`:'';
  }
  // onSubmit(post) {
  //   this.post = post;
  // }
  get checkInvalid(){
    // if(this.formGroup.valid===false) return this.checker;
    if(this.checker) this.checker.validity = false;
    return ["invalid:",this.formGroup.valid==false,"checker",this.checker];
  }
   checkValidity(){
    // console.log(this.checker);
    if(this.formGroup.valid) {
      this.checker.validity=true;
      // return true;
    }
    else if(this.checker) {
      this.checker.validity = false;
      // return false;
    }
  }
}
