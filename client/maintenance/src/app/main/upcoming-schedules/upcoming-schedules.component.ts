import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upcoming-schedules',
  templateUrl: './upcoming-schedules.component.html',
  styleUrls: ['./upcoming-schedules.component.scss']
})
export class UpcomingSchedulesComponent implements OnInit {

  schedules: any[] = [
    { serviceName: 'Oil Change', type: 'Vehicle', dateCreated: "03-02-2023", scheduledFor: '05-10-2023', cost: '$900', daysLeft: 8},
    { serviceName: 'Ceiling Repair', type: 'Home', dateCreated: "12-12-2023", scheduledFor: '01-10-2024', cost: '$1900', daysLeft: 12},
    { serviceName: 'Dental Checkup', type: 'Health', dateCreated: "05-12-2023", scheduledFor: '03-10-2023', cost: '$200', daysLeft: 30},
    { serviceName: 'Car Wash', type: 'Vehicle', dateCreated: "01-06-2023", scheduledFor: '03-10-2023', cost: '$100', daysLeft:10},
    { serviceName: 'Take Medicine', type: 'Health', dateCreated: "09-19-2023", scheduledFor: '10-10-2023', cost: '$800', daysLeft:12},
    { serviceName: 'Tyre Change', type: 'Vehicle', dateCreated: "10-22-2023", scheduledFor: '11-10-2023', cost: '$900', daysLeft: 28}
  ];

  constructor() { }

  ngOnInit(): void {
  }

 

}
