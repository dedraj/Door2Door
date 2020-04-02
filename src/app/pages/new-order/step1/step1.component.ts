import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit{
  // @ViewChild('stepper') stepper: MatStepper;
  @Input () stepper;
  @Input () checker;
  
  step1valid = {
    validity:false
  }
  ngOnInit():void {

  }
  // isFormValid(valid){
  //   console.log(valid);
    
  // }
  goNext(){
    // console.log(this.stepper);
    this.stepper.selected.completed = true;
    // move to next step
    this.stepper.next();
  }
}