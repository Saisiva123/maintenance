import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registrationDetails: FormGroup = new FormGroup({
    username : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required),
    confirmPassword : new FormControl('', Validators.required)
  })
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  register()
  {
    this.http.post("",{}).subscribe((res:any) => 
    {
      this.router.navigate(['/auth/login'])
    })
  }

  navigateToLogin()
  {
    this.router.navigate(['/auth/login'])
  }

}
