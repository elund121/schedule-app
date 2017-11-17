import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Material Design Components
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ScheduleDetailComponent } from './schedule-detail/schedule-detail.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        ScheduleComponent,
        ScheduleDetailComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        MatToolbarModule,
        MatListModule,
        MatDialogModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        BrowserAnimationsModule
    ],
    entryComponents: [
        ScheduleDetailComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
