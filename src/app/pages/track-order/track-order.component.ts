import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

// @Component({
//   selector: 'app-track-order',
//   templateUrl: './track-order.component.html',
//   styleUrls: ['./track-order.component.css']
// })
// export class TrackOrderComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

export interface DialogData {
  status: 'recieved' | 'dispatched' | 'delivered';
}
@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.component.html',
  styleUrls: ['./track-order.component.css'],
  
})
export class TrackOrderComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(CheckStatus, {
      data: {
        status: 'recieved'
      }
    });
  }
}

@Component({
  selector: 'check-status',
  templateUrl: './check-status.html',
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class CheckStatus implements OnInit{

  constructor(public dialogRef: MatDialogRef<CheckStatus>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    ngOnInit() {}
    onNoClick(): void {
    this.dialogRef.close();
  }

}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */ 