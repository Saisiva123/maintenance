import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpcomingSchedulesComponent } from './upcoming-schedules/upcoming-schedules.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import {
  MatIconModule,
  MatInputModule,
  MatSidenavModule,
} from '@angular/material';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { MatTableModule } from '@angular/material';

@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
    UpcomingSchedulesComponent,
    MaintenanceComponent,
    ChatWindowComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
  ],
})
export class MainModule {}
