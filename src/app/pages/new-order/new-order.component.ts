import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable }  from 'rxjs';
import { FormService } from 'src/app/form.service';
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
  
    isLinear = false;
    myForm: Array<string>
  
    constructor(
      public formService: FormService,
      private fb: FormBuilder
    ) {
      this.myForm = this.formService.mainForm.value
    }
  
    keys() : Array<string> {
      return Object.keys(this.myForm);
    }
  }

