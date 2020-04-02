import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable }  from 'rxjs';
import { FormService } from 'src/app/form.service';
import { MatStep, MatStepper } from '@angular/material/stepper';

export var Myform = {formValues:[]};

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css'],
  providers: [ FormService ]
})
export class NewOrderComponent {
  // @ViewChild('stepper') stepper: MatStepper;
  @Input () stepper: MatStep;
  @Input () checker: MatStep;
  @Input () stepControl: MatStep;
  step1: FormGroup;
  step2: FormGroup;
  step3: FormGroup;
  step4: FormGroup;
    check={
      validity:false,
      isCompleted:true,
      isLinear:true,
      isEditable:true
    }

    myCForm: Array<string>
    myRForm: Array<string>
    myPForm: Array<string>
    
    constructor(
      public formService: FormService,
      private fb: FormBuilder
    ) {
      
      // this.myForm = this.formService.mainForm.value
      // console.log("-----  ",this.myForm,this.keys())
      // myForm: Array<string>
    this.myCForm = this.formService.customerForm.value
    this.myRForm= this.formService.recieverForm.value
    this.myPForm= this.formService.packageForm.value
    Myform.formValues =[
      this.formService.customerForm.value,
      this.formService.recieverForm.value,
      this.formService.packageForm.value
    ];
      // console.log("-----  ",this.myCForm,"+++",this.keys())
    }
    keys() : Array<string> {
      return Object.keys(this.myCForm);
    }
    // nextClicked(event) {
    //   // complete the current step
    //   this.stepper.selected.completed = true;
    //   // move to next step
    //   this.stepper.next();
    // }
  }

