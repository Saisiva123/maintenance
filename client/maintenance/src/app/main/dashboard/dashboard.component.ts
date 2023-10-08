import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatHorizontalStepper } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  @ViewChild(MatHorizontalStepper) stepper!: MatHorizontalStepper;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.stepper._getIndicatorType = () => 'number';
  }

}
