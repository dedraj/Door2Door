import { Component, OnInit, Inject, Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { FormService } from 'src/app/form.service';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatStepper } from '@angular/material/stepper';
import { NewOrderComponent,Myform } from 'src/app/pages/new-order/new-order.component';
import { ClaculateCost,submitData,db } from "src/calculation/calculations";

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

  validity= false;
  formGroup: FormGroup;
  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private formService: FormService
  ) {
    // console.log("stepp--------",stepper);
    
    this.formGroup = this.formBuilder.group({
      length:[null, Validators.required],
      breadth:[null, Validators.required],
      height:[null, Validators.required],
      weight:[null, Validators.required],
      dMode:[null, Validators.required]
    });
    const three = '3';
    this.formService.stepReady(this.formGroup, three)
  }
  openDialog(stepper,checker) {
    const dialogRef = this.dialog.open(ConfirmDialog, {
      data: {
        status: 'confirm',
        stepdata: stepper,
        checker: checker
      }
    });
    // console.log("stepper controls,check edit or linear",stepper,checker);
    // dialogRef.afterClosed().subscribe(result => { //metods after closing dialog
    //   console.log(`Dialog result: ${result}`);
    // });
  }
  ngOnInit(): void {
  }
  goBack(){
    this.stepper.selected.completed = true;
    this.stepper.previous();
  }
  checkValidity(){
    // console.log(this.checker);
    if(this.formGroup.valid) {
      this.validity=true;
      return true;
    }
    else {
      this.validity = false;
      return false;
    }
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
  dataa=Myform;
  constructor(public dialogRef: MatDialogRef<ConfirmDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private formService: FormService) {}
    ngOnInit() {}
    onNoClick(): void {
    this.dialogRef.close();
  }
  get getCost(){
  const cost = new ClaculateCost;
    return cost.getCost(db[0])
  }
  doReset({stepdata}){
    stepdata.reset();
    this.dialogRef.close();
  }
  doClose(){
    this.dialogRef.close();
  }
  goForward({stepdata,checker}){
    // console.log(checker);
    checker.isEditable=false;
    stepdata.selected.completed = true;
    stepdata.next();
    console.log(submitData);
    
    submitData(this.dataa.formValues);
    this.dialogRef.close();
  }
}