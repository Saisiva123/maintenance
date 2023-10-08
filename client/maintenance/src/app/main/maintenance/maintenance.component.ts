import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { MaintenanceFormComponent } from '../maintenance-form/maintenance-form.component';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss']
})
export class MaintenanceComponent implements OnInit {

  public barChartLegend = true;
  public barChartPlugins = [];
  servicesList: any[] = [
    { name: "" }
  ]

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ '03-01-2023', '04-01-2023', '05-01-2023', '06-01-2023', '07-01-2023', '08-01-2023', '09-01-2023' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Total Tasks', backgroundColor: '#3a867d', hoverBackgroundColor:'#3a867d'},
      { data: [ 28, 48, 40, 19, 36, 27, 20 ], label: 'Tasks Completed', backgroundColor: '#FED66A', hoverBackgroundColor : '#FED66A' }
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false

  };
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialog.open(MaintenanceFormComponent);
  }

}
