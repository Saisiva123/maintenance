import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-maintenance-form',
  templateUrl: './maintenance-form.component.html',
  styleUrls: ['./maintenance-form.component.scss']
})
export class MaintenanceFormComponent implements OnInit {

  vehicleForm!: FormGroup;
  HomeForm!: FormGroup;
  HealthForm!: FormGroup;
  types = ['Vehilce','Health','Home']
  typeSelected:any = 'Vehicle';

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<MaintenanceFormComponent>) { }
  
  ngOnInit(): void {
    this.vehicleForm = this.fb.group({
      manufacturer: ['', Validators.required], // Toyoto
      model: ['', Validators.required], // Camry
      mileage: ['', Validators.required],
      fuelType: ['', Validators.required],
      transmission: ['', Validators.required] //Automatic
    })
    this.HealthForm = this.fb.group({
      gender: ['', Validators.required],
      height: ['', Validators.required],
      weight: ['', Validators.required],
      heartRate: ['', Validators.required],
      allergies: ['', Validators.required]
    })
    this.HomeForm = this.fb.group({
      propertyType: ['', Validators.required], // Apartment, house
      sqrFoot: ['', Validators.required],
      comment: ['']
    })
  }

  selectedType(type:any)
  {
    console.log(type)
  }

}
