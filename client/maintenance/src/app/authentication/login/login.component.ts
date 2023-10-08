import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  users: any = [
    {
      name: "User",
      icon: "../../../assets/profile.png",
      onSelect: () => this.selectUser('User'),
      selected: true
    },
    {
      name: "Admin",
      icon: "../../../assets/admin.png",
      onSelect: () => this.selectUser('Admin'),
      selected: false
    }
  ]
  loginDetails:FormGroup = new FormGroup({
    username : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  })


  constructor(private http: HttpClient, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  selectUser(user: any)
  {
    this.users.map((item:any) => item.selected = (item.name == user))
  }

  login()
  {
    let details = {...this.loginDetails.value, forUser: this.users.find((item:any) => item.selected).name}
    console.log(details)
    if(this.loginDetails?.value.username && this.loginDetails?.value.password)
    this.authService.login(details)
  }

  navigateToRegister()
  {
    this.router.navigate(['/auth/register'])
  }


}
