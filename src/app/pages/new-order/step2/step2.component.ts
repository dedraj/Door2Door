import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit{

  @Input () stepper;
  @Input () checker;
  step2valid = {
    validity:false
  }

  ngOnInit():void {

  }
  goNext(){
    // console.log(this.stepper);
    this.stepper.selected.completed = true;
    // move to next step
    this.stepper.next();
  }
  goBack(){
    this.stepper.selected.completed = true;
    this.stepper.previous();
  }
}
