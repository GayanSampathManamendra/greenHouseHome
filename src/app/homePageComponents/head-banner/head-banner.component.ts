import { Component, OnInit } from '@angular/core';
import{ AuthService } from '../../services/auth.service'
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-head-banner',
  templateUrl: './head-banner.component.html',
  styleUrls: ['./head-banner.component.css']
})
export class HeadBannerComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
    console.log(this.isLoggedIn())
  }

  isLoggedIn():boolean{
  	const user = JSON.parse(localStorage.getItem('user'));
    console.log(user)
    return(user!==null)? true:false;
    // return(user!==null && user.emailVerified!==false)? true:false;
  }

  logout(){
    localStorage.removeItem('user');
    // this.router.navigate(['']);
  }

}
