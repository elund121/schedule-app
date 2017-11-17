import { Component, OnInit, Input, Inject } from '@angular/core';
import { Appointment } from '../appointment';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
    selector: 'schedule-detail',
    templateUrl: './schedule-detail.component.html'
})
export class ScheduleDetailComponent {
    @Input() appointment: Appointment;

    constructor(
        public dialogRef: MatDialogRef<ScheduleDetailComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
        this.appointment = data.appointment;
    }

}
