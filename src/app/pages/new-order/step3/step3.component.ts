import { Component, OnInit, Inject, Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { FormService } from 'src/app/form.service';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatStepper } from '@angular/material/stepper';

export interface DialogData {
  status: 'confirm' | 'canceled';
  stepdata:'';
  checker:'',
}
@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component implements OnInit {
  @Input () stepper;
  @Input () checker;
  formGroup: FormGroup;
  isConfirm: false;
  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private formService: FormService
  ) {
    // console.log("stepp--------",stepper);
    
    this.formGroup = this.formBuilder.group({
      extraName: [null, Validators.required],
      length:[null, Validators.required],
      breadth:[null, Validators.required],
      height:[null, Validators.required],
      weight:[null, Validators.required],
      dMode:''
    });
    const three = '3';
    this.formService.stepReady(this.formGroup, three)
  }
  openDialog(stepper,checker) {
    this.dialog.open(ConfirmDialog, {
      data: {
        stepdata: stepper,
        checker: checker
      }
    });
    console.log("dia00-: ",stepper,checker);
  }
  // goForward(stepper: MatStepper){
  //   console.log("+++++++++",stepper);
  //   stepper.next();
  // }
  ngOnInit(): void {
  }

}

@Component({
  selector: 'confirm-dialog',
  templateUrl: './confirm-dialog.html',
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }] 
})
export class ConfirmDialog implements OnInit{
  constructor(public dialogRef: MatDialogRef<ConfirmDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
    ngOnInit() {}
    onNoClick(): void {
    this.dialogRef.close();
  }
  goForward({stepdata,checker}){
    console.log(checker);
    checker.isEditable=false;
    stepdata.next();
    this.dialogRef.close();
  }
}