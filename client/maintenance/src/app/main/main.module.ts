import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpcomingSchedulesComponent } from './upcoming-schedules/upcoming-schedules.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSidenavModule,
} from '@angular/material';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { MatTableModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MaintenanceFormComponent } from './maintenance-form/maintenance-form.component';
import { MatSelectModule } from '@angular/material/select';
import {MatStepperModule} from '@angular/material/stepper';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
    UpcomingSchedulesComponent,
    MaintenanceComponent,
    ChatWindowComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    NgChartsModule
  ],
  entryComponents: [MaintenanceFormComponent]
})
export class MainModule { }
