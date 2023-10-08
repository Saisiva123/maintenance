import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  menuItems: any = [
    {
      name: "Dashboard",
      icon: "../../assets/dashboard.png",
      activeIcon: "../../assets/dashboard-active.png",
      selected: true,
      navigateTo: '/main'
    },
    {
      name: "Maintenance",
      icon: "../../assets/tools.png",
      activeIcon: "../../assets/tools-active.png",
      selected: false,
      navigateTo: 'main/maintenance'
    },
    {
      name: "Upcoming Schedule",
      icon: "../../assets/calendar.png",
      activeIcon: "../../assets/calendar-active.png",
      selected: false,
      navigateTo: 'main/upcoming-schedules'
    }]
    showChatWindow: boolean = false
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['/main/dashboard'])
  }

  selectMenuItem(menu: any)
  {
    this.menuItems.map((item:any) => item.selected = (item.name == menu.name))
    this.router.navigate([menu.navigateTo])
  }

  toggleChatWindow(val?: boolean)
  {
    if(val)
    {
      this.showChatWindow = val;
    }
    else this.showChatWindow = !this.showChatWindow
    
  }

  logout()
  {
    this.authService.logout()
  }
}
