import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable }  from 'rxjs';
import { FormService } from 'src/app/form.service';
import { MatStep } from '@angular/material/stepper';
interface City {
  name: string;
  viewName: string;
}
@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css'],
  providers: [ FormService ]
})
export class NewOrderComponent {
  @Input () stepper: MatStep;
  @Input () checker: MatStep;
  @Input () stepControl: MatStep;
  step1: FormGroup;
  step2: FormGroup;
  step3: FormGroup;
  step4: FormGroup;
    check={
      isLinear:true,
      isEditable:true
    }

    myForm: Array<string>
    constructor(
      public formService: FormService,
      private fb: FormBuilder
    ) {
      
      this.myForm = this.formService.mainForm.value
      // console.log("-----  ",this.myForm,this.keys())
    }
    keys() : Array<string> {
      return Object.keys(this.myForm);
    }
  }

