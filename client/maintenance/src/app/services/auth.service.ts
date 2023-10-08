import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  login(details: any)
  {
    console.log(details)
    sessionStorage.setItem('token',"dsdnc3j23283123bh1h3b");
    this.router.navigate(["/main"])
    // this.http.post("",{}).subscribe((res:any) => console.log(res))
  }

  logout()
  {
    sessionStorage.removeItem('token')
    this.router.navigate(["/auth/login"])
  }

  checkLoggedIn()
  {
    return sessionStorage.getItem('token');
  }

}
