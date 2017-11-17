import { Component, OnInit, Inject } from '@angular/core';
import { Appointment } from '../appointment';
import { ScheduleDetailComponent } from '../schedule-detail/schedule-detail.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'schedule',
    templateUrl: './schedule.component.html',
    styleUrls: ['./schedule.component.css']
})

export class ScheduleComponent implements OnInit {

    hours = this.generateTimeSlots();
    selectedAppointment: Appointment;

    constructor(public dialog: MatDialog) { }

    ngOnInit() {
    }

    generateTimeSlots() {
        let start: number = 9;
        let end: number = 17;

        let hours: Appointment[] = [];

        var i = start;
        do {
            let toAdd: Appointment = {
                time: this.calculateTime(i),
                available: true,
                name: null,
                number: null
            }
            hours.push(toAdd);
            i++;
        }
        while (i <= end);

        return hours;
    }

    calculateTime(hour) {
        var suffix = "AM";

        if (hour > 12) {
            hour = hour - 12;
            suffix = "PM";
        }
        else if (hour == "00") {
            hour = 12;
            suffix = "AM";
        }
        else if (hour == "12") {
            suffix = "PM";
        }

        return hour + suffix;
    }

    openDialog(appointment): void {
        this.selectedAppointment = appointment;
        let dialogRef = this.dialog.open(ScheduleDetailComponent, {
            data: {
                appointment: this.selectedAppointment
            },
        });

        dialogRef.afterClosed().subscribe(result => {

            // Check for save confirmation and update availability
            if (result !== undefined && result === true) {
                this.selectedAppointment.available = this.selectedAppointment.name && this.selectedAppointment.number ? false : true;

            // Cleanup data when dialog is canceled
            } else if (this.selectedAppointment.available === true) {
                this.selectedAppointment.name = null;
                this.selectedAppointment.number = null;;
            }
        });
    }
}    
